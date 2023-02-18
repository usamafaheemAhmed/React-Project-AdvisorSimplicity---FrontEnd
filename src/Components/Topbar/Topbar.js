import React from 'react';
import './Topbar.css';

import { Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

function Topbar() {
  return (
    <div className='container-fluid'>
        <div className='row' id="TopBar">
        <div className='col-md-10 text-center'></div>
        <div className='col-md-2 float-right'>
            <Nav className="me-auto">
            <FontAwesomeIcon icon={faBell} id='BellIcon'/>
            <FontAwesomeIcon icon={faUser} id='UserIcon'/>
            <NavDropdown title="User" id="DropDown">
                <NavDropdown.Item href="#action/3.1">UserName</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Forget Password</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </div>
        </div>      
    </div>
  )
}

export default Topbar;