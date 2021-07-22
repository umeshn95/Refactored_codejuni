import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import Dropdown from './Dropdown';

// import zetalogo from '../../images/zetamonklogo.svg';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };



  //

  const [dropdown, setDropdown] = useState(false);


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
//
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: 'green' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu} onClick={() => {window.location.href="/"}}>
            {/* <img src={zetalogo} style={{height:'50px', width:'50px'}}></img> */}
              <span style={{color:'#867AE9'}} >Code</span>
              <span style={{color:'#E5D549', marginLeft:'5px'}}>Juni</span>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu} onClick={() => {window.location.href="/"}}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks   onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave} to='/services' onClick={closeMobileMenu} >
                  Courses &nbsp; <i className='fas fa-caret-down' />
                  {dropdown && <Dropdown/>}
                </NavLinks>
                
              </NavItem>
              <NavItem>
                <NavLinks to='/about' onClick={closeMobileMenu} onClick={() => {window.location.href="/about"}}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu} onClick={() => {window.location.href="/products"}}>
                  Contact
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/contactus' onClick={() => {window.location.href="/contactus"}}>
                    <Button primary>Login</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/contactus' onClick={() => {window.location.href="/contactus"}}>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Login
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
