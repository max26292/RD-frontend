import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

//Metismenu
import MetisMenu from 'metismenujs';

export class Sidebar extends Component {
  readonly location: string;

  constructor(props, location: string) {
    super(props);
    this.state = {};
    this.location = location;
  }

  componentDidMount() {
    new MetisMenu('#menu', {}); //object

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
            <div className="sidebar-header"></div>
            <div className="main-menu">
              <div className="menu-inner" id="sidebar_menu">
                <nav>
                  <li className="metismenu" id="menu">

                    <li>
                      <Link to="/#">
                        <i className=""></i>
                        <span>Declare Categories</span>
                      </Link>

                      <ul className="submenu">
                        <li>
                          <Link to="alert">
                            <i className="ti-alert"></i>
                            <span>Alert</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="buttons">
                            <i className="icon-focus"></i>
                            <span>Buttons</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="badges">
                            <i className="icon-ribbon"></i>
                            <span>Badges</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="cards">
                            <i className="ti-id-badge"></i>
                            <span>Cards</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="carousel">
                            <i className="ti-layout-slider"></i>
                            <span>Carousels</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="dropdown">
                            <i className="icon-layers"></i>
                            <span>Dropdown</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="list-group">
                            <i className="ti-list"></i>
                            <span>List Group</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="modals">
                            <i className="ti-layers-alt"></i>
                            <span>Modals</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="pagination">
                            <i className="ion-android-more-horizontal"></i>
                            <span>Pagination</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="progressbar">
                            <i className="ion-ios-settings-strong"></i>
                            <span>Progressbar</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="tabs">
                            <i className="ti-layout-tab"></i>
                            <span>Tabs</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="typography">
                            <i className="ti-smallcap"></i>
                            <span>Typography</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="grid">
                            <i className="ti-layout-grid4"></i>
                            <span>Grid</span>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/#">
                        <i className=""></i>
                        <span>The List of warehouse</span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to="sweet-alert">
                            <i className="ti-layout-media-overlay-alt-2"></i>{' '}
                            <span>Sweet Alert</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="cropper">
                            <i className="ion-crop"></i>{' '}
                            <span>Image Cropper</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="dropzone">
                            <i className="ti-layout-placeholder"></i>{' '}
                            <span>Dropzone</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="loaders">
                            <i className="ion-load-a"></i>{' '}
                            <span>Css Loaders</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="ladda-button">
                            <i className="ion-load-b"></i>{' '}
                            <span>Ladda Button</span>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/#">
                        <i className=""></i>
                        <span>
                          Declare account Categories
                        </span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to="font-awesome">
                            <i className="ti-flag-alt"></i>{' '}
                            <span>Font Awesome</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="themify">
                            <i className=""></i>
                            <span>Declare the list of cases</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="ionicons">
                            <i className="ion-ionic"></i>
                            <span>Ionicons V2</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="et-line">
                            <i className="icon-basket"></i>
                            <span>ET Line Icons</span>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/#">
                        <i className=""></i>
                        <span> Accounting documents</span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to="google-maps">
                            <i className="icon-map"></i>
                            <span>Google Maps</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="vector-maps">
                            <i className="icon-map-pin"></i>
                            <span>Vector Maps</span>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/#">
                        <i className=""></i>
                        <span>Documents Arising</span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to="basic-table">
                            <i className="ion-ios-grid-view"></i>
                            <span>Basic Tables</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="datatable">
                            <i className="ti-layout-slider-alt"></i>
                            <span>Datatable</span>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/#">
                        <i className=""></i>
                        <span>Reporting System</span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to="form-basic">
                            <i className="ion-edit"></i>
                            <span>Basic ELements</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="form-layouts">
                            <i className="ti-layout-grid2-thumb"></i>
                            <span>Form Layouts</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="form-groups">
                            <i className="ion-ios-paper"></i>
                            <span>Input Groups</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Sidebar);
