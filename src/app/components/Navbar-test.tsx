import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaiIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
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
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
