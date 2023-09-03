import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBar.css';
import coreFares_logo from '../../Assets/coreFares_logo.png'
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className='Navbar'>
      <div>
        <div className='logo-box'>
          <img src={coreFares_logo} alt="coreFares_logo" width={"100%"} />
        </div>
        <div className='search-box'>
          <input className="nosubmit" type="search" placeholder="Search..." />
        </div>
        <div className='links'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>

          <div className='hemburger-menu'>
            <Button variant="none" onClick={handleShow}>
              <AiOutlineMenu/>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
              <Offcanvas.Header closeButton>
                {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul className='hemburger-menu-ul'>
                  <li>Home</li>
                  <li>About US</li>
                  <li>Contact Us</li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar