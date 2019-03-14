import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/*
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand img" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <i className="fas fa-list" /> products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer cart>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: #fff;
  box-sizing: border-box;
  border-bottom: 2px solid var(--mainYellow);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  .nav-link {
    color: var(--mainBlue) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    outline: none;
    transition: all 0.3s ease-out;

    &:hover {
      color: var(--lightBlue) !important;
    }
  }

  .img {
    width: 3rem;
  }
`;

export default Navbar;
