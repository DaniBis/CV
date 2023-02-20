import React from "react";
import PropTypes from "prop-types";
import { Bar, MainNav, NavLi, NavBarToggle, Hamburger, BarMenu, NavLink } from "./style";
import { Link } from "react-router-dom";

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      displayNav: props.displayNav ? "flex" : "none",
      transform1: '',
      transform2: '',
      opacity: '',
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  toggleNavBar() {
    this.setState((prevState, props) => {
      switch (prevState.displayNav) {
        case "none":
          return { displayNav: "flex" };
        case "flex":
        default:
          return { displayNav: "none" };
      }
    });
  }

    // Function to handle the click event
     handleClick() {
      if(this.state.count%2 === 0){
        this.setState({transform1: 'translate(0, 11px) rotate(-45deg)'});
        this.setState({opacity: '0'});
        this.setState({transform2: 'translate(0, -11px) rotate(45deg)'});
      }else{
        this.setState({transform1: '', opacity: '', transform2: ''});
      }
      this.setState({count: (this.state.count+1)});
    }
  
  render() {
    return (
      <Bar>
        <NavBarToggle onClick={() => this.toggleNavBar()}>
          <Hamburger onClick={this.handleClick}>
            <BarMenu className='change1' transform1={this.state.transform1}/>
            <BarMenu className='change2' opacity={this.state.opacity}/>
            <BarMenu className='change3' transform2={this.state.transform2}/>  
           </Hamburger>
        </NavBarToggle>
        <MainNav display={this.state.displayNav}>
          <NavLi>
            <NavLink to="/">Home</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/About">About</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/Contact">Contact</NavLink>
          </NavLi>
        </MainNav>
      </Bar>
    );
  }
}

Navbar.propTypes = {
  displayNav: PropTypes.bool
};

export default Navbar;
