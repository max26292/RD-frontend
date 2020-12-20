/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

//Metismenu
import MetisMenu from '../../../../node_modules/metismenujs';

// const content = [
//   {

//   }
// ]



export class Sidebar extends Component {
   location: string;

  constructor(props, location: string) {
    super(props);
    this.state = {};
    this.location = location;
  }

  componentDidMount() {
    new MetisMenu('#menu', {});

    let matchingMenuItem = null;
    const ul = document.getElementById('menu');
    const items = ul.getElementsByTagName('a');

    for (var i = 0; i < items.length; ++i) {
      if (window.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }
  activateParentDropdown = item => {
    item.classList.add('mm-active');
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add('mm-active'); // li
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add('mm-show');
        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add('mm-active'); // li
          parent3.childNodes[0].classList.add('mm-active'); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add('active');
          }
        }
      }
      return false;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="left side-menu">
          <div className="sidebar-menu">
            {/* <div className="sidebar-header"></div> */}
            {/* <div className="main-menu"> */}
              <div className="menu-inner" id="sidebar_menu">
                <nav>
                  <li className="metismenu" id="menu">
                    <li>
                      <Link to="/#">
                        <i className="ti-server"></i>
                        <span>Declare Categories</span>
                      </Link>

                      <ul className="submenu">
                        <li>
                          <Link to="alert">
                            <i className="ti-server" ></i>
                            <span>Declare the list of warehouse</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="buttons">
                            <i className="ti-server"></i>
                            <span>Declare the account categories</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="badges">
                            <i className="ti-server"></i>
                            <span>Declare the list of cases</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="cards">
                            <i className="ti-server"></i>
                            <span>Declare types of accounting documents</span>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/#">
                        <i className="ti-server"></i>
                        <span>Document Arising</span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to="sweet-alert">
                            <i className="ti-server"></i>{' '}
                            <span>Enter the generated vouchers</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="cropper">
                            <i className="ti-server"></i>{' '}
                            <span>Declaration of automatic entry of documents</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="dropzone">
                            <i className="ti-server"></i>{' '}
                            <span>Calculate and update the export price of materials and goods</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="loaders">
                            <i className="ti-server"></i>{' '}
                            <span>Carry over the closing balance and other allocations</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="ladda-button">
                            <i className="ti-server"></i>{' '}
                            <span>Check and import documents to be duplicated</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="ladda-button">
                            <i className="ti-server"></i>{' '}
                            <span>search and list the generated documents selectively</span>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/#">
                        <i className="ti-help"></i>
                        <span>Reporting System</span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to="font-awesome">
                            <i className="ti-flag-alt"></i>{' '}
                            <span>Reporting System</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="themify">
                            <i className="ti-server"></i>
                            <span>Quickly view any detailed book data</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="ionicons">
                            <i className="ion-ionic"></i>
                            <span>Quick view of T-letter synthesis of accounts</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="et-line">
                            <i className="ti-exchange-vertical"></i>
                            <span>Quick view of account exchange balance</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </li>
                </nav>
              </div>
            {/* </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Sidebar);