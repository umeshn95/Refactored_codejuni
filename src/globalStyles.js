import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Containe = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 0px;
  padding-left: 0px;

  @media screen and (max-width: 991px) {
    padding-right: 0px;
    padding-left: 0px;
  }

`;

export const Button = styled.button`
  border-radius: 12px;
  background: ${({ primary }) => (primary ? '#da5b4a' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '11px 64px' : '10px 30px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '19px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  font-weight:bold;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#ff5a11' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
