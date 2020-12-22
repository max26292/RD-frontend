/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
} from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {}

interface State {
  create_menu: boolean;
  toggle: boolean;
  menu: boolean;
  notificationMenu: boolean;
  messagesMenu: boolean;
}

declare global {
  interface Document {
    cancelFullScreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
    webkitExitFullscreen?: () => Promise<void>;
    webkitFullscreenElement?: Element;
    webkitCancelFullScreen?: () => Promise<void>;
    mozCancelFullScreen?: () => Promise<void>;
    mozFullScreenElement?: () => Promise<void>;
  }

  interface HTMLElement {
    msRequestFullscreen?: () => Promise<void>;
    mozRequestFullScreen?: () => Promise<void>;
    webkitRequestFullscreen?: () => Promise<void>;
  }
}

class Navbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      create_menu: false,
      toggle: false,
      menu: false,
      notificationMenu: false,
      messagesMenu: false,
    };

    this.toggleCreate = this.toggleCreate.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleNotification = this.toggleNotification.bind(this);
    this.toggleMessages = this.toggleMessages.bind(this);
  }

  toggle = () => {
    this.setState(prevState => ({
      menu: !prevState.menu,
    }));
  };

  toggleNotification = () => {
    this.setState(prevState => ({
      notificationMenu: !prevState.notificationMenu,
    }));
  };

  toggleMessages() {
    this.setState(prevState => ({
      messagesMenu: !prevState.messagesMenu,
    }));
  }

  toggleCreate() {
    this.setState(prevState => ({
      create_menu: !prevState.create_menu,
    }));
  }

  sidebarToggle = () => {
    const pageClass = document.querySelector('.page-container');
    pageClass.classList.toggle('sidebar_collapsed');
  }

  toggleFullscreen() {
    console.debug('this function is called');
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="header-area">
          <Row className="align-items-center">
            <div className="mobile-logo d_none_lg"></div>

            <div className="col-md-6 d_none_sm d-flex align-items-center">
              <div className="nav-btn pull-left" onClick={this.sidebarToggle}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="search-box pull-left">
                <form action="#">
                  <i className="ti-search"></i>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    required
                  />
                </form>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <ul className="notification-area pull-right">
                <li>
                  <span
                    className="nav-btn pull-left d_none_lg"
                    onClick={this.sidebarToggle}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </li>
                <li
                  id="full-view"
                  className="d_none_sm"
                  onClick={this.toggleFullscreen}
                >
                  FullScreen button
                  <i className="feather ft-maximize"></i>
                </li>

                <Dropdown
                  isOpen={this.state.notificationMenu}
                  toggle={this.toggleNotification}
                  tag="li"
                >
                  <DropdownToggle tag="i" className="ti-bell">
                    <span></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu bell-notify-box notify-box">
                    <span className="notify-title">
                      You have 3 new notifications <Link to="#">view all</Link>
                    </span>
                    <Scrollbars style={{ height: '350px' }}>
                      <div className="nofity-list">
                        <DropdownItem tag="a" htef="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-map-alt bg_blue"></i>
                          </div>
                          <div className="notify-text">
                            <h3>You added your Location</h3>
                            <span>Just Now</span>
                          </div>
                        </DropdownItem>
                        <DropdownItem tag="a" htef="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-bolt-alt bg_warning"></i>
                          </div>
                          <div className="notify-text">
                            <h3>Your Subscription Expired</h3>
                            <span>30 Seconds ago</span>
                          </div>
                        </DropdownItem>
                        <DropdownItem tag="a" htef="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-heart bg_danger"></i>
                          </div>
                          <div className="notify-text">
                            <h3>Some special like you</h3>
                            <span>Just Now</span>
                          </div>
                        </DropdownItem>
                        <DropdownItem tag="a" htef="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-comments bg_info"></i>
                          </div>
                          <div className="notify-text">
                            <h3>New Commetns On Post</h3>
                            <span>30 Seconds ago</span>
                          </div>
                        </DropdownItem>
                        <DropdownItem tag="a" htef="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-settings bg_secondary"></i>
                          </div>
                          <div className="notify-text">
                            <h3>You changed your Settings</h3>
                            <span>Just Now</span>
                          </div>
                        </DropdownItem>
                        <DropdownItem tag="a" htef="#" className="notify-item">
                          <div className="notify-thumb">
                            <i className="ti-image bg_success"></i>
                          </div>
                          <div className="notify-text">
                            <h3>Image Uploaded Successfully</h3>
                            <span>Just Now</span>
                          </div>
                        </DropdownItem>
                      </div>
                    </Scrollbars>
                  </DropdownMenu>
                </Dropdown>

                <Dropdown
                  isOpen={this.state.messagesMenu}
                  toggle={this.toggleMessages}
                  tag="li"
                >
                  <DropdownToggle tag="i" className="fa fa-envelope-o">
                    <span></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu notify-box nt-enveloper-box">
                    <span className="notify-title">
                      You have 3 new Messages <Link to="#">view all</Link>
                    </span>
                    <Scrollbars style={{ height: '350px' }}>
                      <div className="nofity-list">
                        <DropdownItem tag="a" htef="#" className="notify-item">
                          <div className="notify-thumb"></div>
                          <div className="notify-text">
                            <h3>Jhon Doe</h3>
                            <span className="msg">Hello are you there?</span>
                            <span>3:15 PM</span>
                          </div>
                        </DropdownItem>
                        <DropdownItem tag="a" htef="#" className="notify-item">
                          <div className="notify-thumb"></div>
                          <div className="notify-text">
                            <h3>David Boos</h3>
                            <span className="msg">
                              Waiting for your Response...
                            </span>
                            <span>3:15 PM</span>
                          </div>
                        </DropdownItem>
                        <DropdownItem tag="a" htef="#" className="notify-item">
                          <div className="notify-thumb"></div>
                          <div className="notify-text">
                            <h3>Jason Roy</h3>
                            <span className="msg">
                              Hi there, Hope you are well
                            </span>
                            <span>3:15 PM</span>
                          </div>
                        </DropdownItem>
                        <DropdownItem tag="a" htef="#" className="notify-item">
                          <div className="notify-thumb"></div>
                          <div className="notify-text">
                            <h3>Malika Roy</h3>
                            <span className="msg">
                              Your Product Dispatched form Warehouse...
                            </span>
                            <span>3:15 PM</span>
                          </div>
                        </DropdownItem>
                        <DropdownItem tag="a" htef="#" className="notify-item">
                          <div className="notify-thumb"></div>
                          <div className="notify-text">
                            <h3>Raven Jhon</h3>
                            <span className="msg">
                              Please recieve your parcel from our store
                            </span>
                            <span>3:15 PM</span>
                          </div>
                        </DropdownItem>
                        <DropdownItem tag="a" htef="#" className="notify-item">
                          <div className="notify-thumb"></div>
                          <div className="notify-text">
                            <h3>Angela Yo</h3>
                            <span className="msg">
                              You recieved a new message...
                            </span>
                            <span>3:15 PM</span>
                          </div>
                        </DropdownItem>
                        <DropdownItem tag="a" htef="#" className="notify-item">
                          <div className="notify-thumb"></div>
                          <div className="notify-text">
                            <h3>Rebecca Jhon</h3>
                            <span className="msg">
                              Hey I am waiting for you...
                            </span>
                            <span>3:15 PM</span>
                          </div>
                        </DropdownItem>
                      </div>
                    </Scrollbars>
                  </DropdownMenu>
                </Dropdown>

                <li className="user-dropdown">
                  <Dropdown
                    isOpen={this.state.menu}
                    toggle={this.toggle}
                    tag="div"
                  >
                    <DropdownToggle className="btn dropdown-toggle" tag="div">
                      <span className="d_none_sm">
                        Quan <i className="ti-angle-down"></i>
                      </span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      <DropdownItem tag="a" href="#">
                        <i className="ti-user"></i> Profile
                      </DropdownItem>
                      <DropdownItem tag="a" href="#">
                        <i className="ti-settings"></i> Account Settings
                      </DropdownItem>
                      <span role="separator" className="divider"></span>
                      <DropdownItem
                        tag="a"
                        className="text-danger"
                        href="auth/login"
                      >
                        <i className="ti-power-off"></i>Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;