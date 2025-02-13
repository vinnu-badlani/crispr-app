import React, { Component } from "react";
import Logo from "../assets/CRISPR_white.png";
import { Link } from "react-router-dom";
import login_img from "../assets/user-login.png"

import "../styles/Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav>
        <Link to="/">
          <img src={Logo} />
        </Link>
        <div>
          <ul id="navbar" className={this.state.clicked ? '#navbar active' : '#navbar'}>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/Menu"> Events </Link>
            </li>
            <li>
              <Link to="/Form"> Events creation </Link>
            </li>
            <li>
              <Link to="/Approval"> Events approval </Link>
            </li>
            <li>
              <Link to="/About"> Article approval </Link>
            </li>
            <li>
              <Link to="/Contact"> Response </Link>
            </li>
            <li>
              <Link to="./login">
                <div className="login">
                  <img src={login_img} width={25} height={25}></img>
                  Log Out
                </div>
              </Link>
            </li>
          </ul>
          <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fa fa-bars"}></i>

          </div>
        </div>
      </nav>


    );
  }
}

export default Navbar;