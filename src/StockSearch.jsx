import React, { Component } from 'react';
import IBM from './IBM_Stock.jsx';
import Shopify from './Shopify_Stock.jsx';
import Dai from './Dai_Stock.jsx';
import GreenPower from './GreenPower_Stock.jsx';
import Saic from './Saic_Stock.jsx';
import Tesco from './Tesco_Stock.jsx';

class StockSearch extends Component {
  constructor() {
    super();

    this.state = {

      name: 'React',
      showHideDemo1: true,

    };

    this.hideComponent = this.hideComponent.bind(this);
  }

  a = {

    showHideDemo1: false,
    showHideDemo2: false,
    showHideDemo3: false,
    showHideDemo4: false,
    showHideDemo5: false,
    showHideDemo6: false,

  };
  hideComponent(name) {

    switch (name) {
      case 'IBM':
        this.setState({ ...this.a, showHideDemo1: true });
        break;

      case 'Shopify':
        this.setState({ ...this.a, showHideDemo2: true });
        break;

      case 'Dai':
        this.setState({ ...this.a, showHideDemo3: true });
        break;

      case 'GreenPower':

        this.setState({ ...this.a, showHideDemo4: true });

        break;
      case 'Saic':
        this.setState({ ...this.a, showHideDemo5: true });

        break;

      case 'Tesco':

        this.setState({ ...this.a, showHideDemo6: true });

        break;
    }
  }

  render() {
    const {
      showHideDemo1, showHideDemo2, showHideDemo3, showHideDemo4, showHideDemo5, showHideDemo6,
    } = this.state;

    return (

      <div>
        <div>
          <form>
            <label>
              Select Stock:
              <select className="btn btn-default btn-rounded btn-lg dropdown-toggle"onChange={(e)=> {
                  this.hideComponent(e.target.value);
                }
                }
                  >
                <option value="IBM" >IBM</option>
                <option value="Shopify" >Shopify</option>
                <option value="Dai" >Dai</option>
                <option value="GreenPower" >GreenPower</option>
                <option value="Saic" >Saic</option>
                <option value="Tesco" >Tesco</option>
              </select>

            </label>

          </form>
        </div>


        {showHideDemo1 && <IBM />}

        {showHideDemo2 && <Shopify />}

        {showHideDemo3 && <Dai />}

        {showHideDemo4 && <GreenPower />}

        {showHideDemo5 && <Saic />}

        {showHideDemo6 && <Tesco />}


      </div>

    );
  }
}

export default StockSearch;
