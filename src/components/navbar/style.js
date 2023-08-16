import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Bar = styled.nav`
  font-size: 18px;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    padding-left: 7%;
    height: 70px;
    align-items: center;
  }
  @media (max-width: 968px) {
    display: inherit;
    width: 100%;
    padding: 0;
  }
`;
export const MainNav = styled.ul`
  list-style-type: none;
  display: ${(props) => props.display};
  width: 100%;
  color: #1d2230;
  padding:0;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    width: inherit;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
export const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
  
`;
export const NavLink = styled(Link)`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  color:#ff2a00;
  text-decoration: none;
  @media (min-width: 768px) {
    margin: 0px 10px;
    color:#ff2a00;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  font-size: 24px;
`;
export const Hamburger = styled.div`
  display: inline-block;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const BarMenu = styled.div`
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
    ${props => props.transform1 && `transform: ${props.transform1};`}
    ${props => props.opacity && `opacity: ${props.opacity};`}
    ${props => props.transform2 && `transform: ${props.transform2};`}
`;

export const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
