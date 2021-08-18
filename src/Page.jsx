/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  Navbar, Nav, NavItem, NavDropdown,
  MenuItem, Glyphicon,
  Grid, Col,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Contents from './Contents.jsx';
import IssueAddNavItem from './IssueAddNavItem.jsx';
import SignInNavItem from './SignInNavItem.jsx';
import Search from './Search.jsx';
import UserContext from './UserContext.js';
import graphQLFetch from './graphQLFetch.js';
import store from './store.js';
import Crypto from './Crypto.jsx';
import HomeUi from './HomeUi.jsx';
import CurrencyConversion from './CurrencyConversion.jsx';
import StockSearch from './StockSearch.jsx';

function NavBar({ user, onUserChange }) {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>CryptoStockAnalyzer</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/HomeUi">
          <NavItem>Home </NavItem>

        </LinkContainer>
        <LinkContainer to="/issues">
          <NavItem>Expense List</NavItem>
        </LinkContainer>
        <LinkContainer to="/crypto">
          <NavItem>CryptoCurrency</NavItem>
        </LinkContainer>
        <LinkContainer to="/StockSearch">
          <NavItem>Stock</NavItem>
        </LinkContainer>
        <LinkContainer to="/CurrencyConversion">
          <NavItem>CurrencyConvert</NavItem>
        </LinkContainer>
      </Nav>
      <Col sm={5}>
        <Navbar.Form>
          <Search />
        </Navbar.Form>
      </Col>
      <Nav pullRight>
        <IssueAddNavItem user={user} />
        <SignInNavItem user={user} onUserChange={onUserChange} />
        <NavDropdown
          id="user-dropdown"
          title={<Glyphicon glyph="option-vertical" />}
          noCaret
        >
          <LinkContainer to="/about">
            <MenuItem>About</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

function Footer() {
  return (
    <small>
      <hr />
      <p className="text-center">
        <h4>
          Full source code available at this
          {' '}
          <a href="https://github.ccs.neu.edu/NEU-CS5610-SU21/CryptoStockAnalyzer" target="/">
            here.

          </a>
        </h4>
      </p>
    </small>
  );
}

export default class Page extends React.Component {
  static async fetchData(cookie) {
    const query = `query { user {
      signedIn givenName
    }}`;
    const data = await graphQLFetch(query, null, null, cookie);
    return data;
  }

  constructor(props) {
    super(props);
    const user = store.userData ? store.userData.user : null;
    delete store.userData;
    this.state = { user };

    this.onUserChange = this.onUserChange.bind(this);
  }

  async componentDidMount() {
    const { user } = this.state;
    if (user == null) {
      const data = await Page.fetchData();
      this.setState({ user: data.user });
    }
  }

  onUserChange(user) {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    if (user == null) return null;

    return (
      <div>
        <NavBar user={user} onUserChange={this.onUserChange} />
        <Grid fluid>
          <UserContext.Provider value={user}>
            <Contents />
          </UserContext.Provider>
        </Grid>
        <Footer />
      </div>
    );
  }
}