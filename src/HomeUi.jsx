/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';

import Axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';

const team = {
  style: {
    padding: '128px 16px',
  },
  style1: {
    marginTop: '64px',
  },
  style2: {
    width: '100%',

  },
};

function HomeUi() {
  return (

    <div className="ro row1">
      <div className="column">
        <div className="w3-container w3-animate-top">
          <h1 className="textcolor header ">TRACK YOUR EXPENSES!</h1>

        </div>
      </div>
      <div className="column1">
        <div className="text1">
          <div className="hclass2 subheader">
            We bring you the ability to track all your transactions from income to expenses to savings. All transactions are
            displayed in a neat table with editable features! All your information is safe and secure from unauthorized access.


          </div>
        </div>
      </div>
      <div className="text1">
        <div className="hclass1 subheader">
          Not only that, you can also search crypto-currencies and view its prices histories, health index such as its
          Fundamental Score or its Market Maturity Score. We also offer a currency converter to add convenience.
          You can also review essential information about stocks.

        </div>
      </div>
      <div className="column3">


        <div className="w3-container" id="team" style={team.style}>
          <h3 className="w3-center">THE TEAM</h3>
          <p className="w3-center w3-large">The ones who runs this company</p>
          <div className="w3-row-padding w3-grayscale" style={team.style1}>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
              <img src="https://i.ibb.co/qFLY530/Whats-App-Image-2021-08-12-at-18-03-21.jpg" alt="Whats-App-Image-2021-08-12-at-18-03-21" style={team.style2}/>
                <div className="w3-container">
                  <h3>Aditi Shrivastava</h3>
                  <p className="w3-opacity">Full Stack Developer</p>
                  <p>Fun loving coder, loves to click photos. Ready everytime for chai.</p>
                </div>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src="https://i.ibb.co/xfs1Kfs/Whats-App-Image-2021-08-12-at-17-57-36.jpg" alt="John" style={team.style2} />
                <div className="w3-container">
                  <h3>Krina Dankhara</h3>
                  <p className="w3-opacity">Full Stack Developer</p>
                  <p>Friendly Teaching Assistant, but pro at making plans and planning trips.</p>
                </div>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src="https://i.ibb.co/BghCmKz/Whats-App-Image-2021-08-12-at-17-57-22.jpg" style={team.style2} />
                <div className="w3-container">
                  <h3>Janvi Dankhara</h3>
                  <p className="w3-opacity">Full Stack Developer</p>
                  <p>Strict one in the group. Never ready for photos.</p>
                </div>
              </div>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-card">
                <img src="https://i.ibb.co/m8v3N6F/7077-F66-C-990-F-4-DA8-96-BC-F765-D66-C8737.jpg"
 alt="Whats-App-Image-2021-08-12-at-18-29-31" alt="John" style={team.style2} />
                <div className="w3-container">
                  <h3>Ayush Sahai</h3>
                  <p className="w3-opacity">Full Stack Developer</p>
                  <p>You wanna meet me? Get tested at cabot.Pro at sending stickers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>


  );
}
export default HomeUi;
