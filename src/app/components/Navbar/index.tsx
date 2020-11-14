import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import * as FaiIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const NavbarItem = [
  {
    key: 1,
    link: '#1',
    name: 'Test 1',
  },
  {
    key: 2,
    link: '#1',
    name: 'Test 2',
  },
  {
    key: 3,
    link: '#3',
    name: 'quan khung',
  },
];

export function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const navItem = NavbarItem.map((value, index) => {
    console.debug({ value });
    return (
      <li className="navbar-toggle" key={value.key}>
        <Link to={`${value.link}`} className="menu-bar">
          {/* <AiIcons.AiOutlineClose /> */}
          {value.name}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bar">
          <FaiIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bar">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {navItem}
        </ul>
      </nav>
    </>
  );
}
// CamelCase;
// lower_case;
//  default Navbar;
interface stateInterface {
  sidebar: boolean;
}
interface myProps {}
class SideBar extends Component<myProps, stateInterface> {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false,
    };
    this.showSidebar = this.showSidebar.bind(this);
  }
  showSidebar() {
    this.setState({
      sidebar: !this.state.sidebar,
    });
  }
  componentDidMount() {}
  render() {
    const navItem = NavbarItem.map((value, index) => {
      console.debug({ value });
      return (
        <li className="navbar-toggle" key={value.key}>
          <Link to={`${value.link}`} className="menu-bar">
            {/* <AiIcons.AiOutlineClose /> */}
            {value.name}
          </Link>
        </li>
      );
    });
    return (
      <>
        <div className="navbar">
          <Link to="#" className="menu-bar">
            <FaiIcons.FaBars onClick={this.showSidebar} />
          </Link>
        </div>

        <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bar">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {navItem}
          </ul>
        </nav>
      </>
    );
  }
}
