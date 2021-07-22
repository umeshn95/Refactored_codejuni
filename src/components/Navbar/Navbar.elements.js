import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Containe } from '../../globalStyles';

export const Nav = styled.nav`
  background: white;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.18rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Containe)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Containe}
`;

export const NavLogo = styled(Link)`
font-family: Proxima Nova,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  color: #2541B2;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  font-weight:bold;
  font-family: 'Encode Sans SC', sans-serif;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 70px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: white;
  }
`;

export const NavItem = styled.li`
  height: 70px;
  padding:5px;
  

  &:hover {
    background:#F4F9F9;
    background-clip: content-box;
    border-radius:19px;
    
    
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.9rem 1.7rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 30px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
