import React, { Component } from "react";
import Footer from "../MainComponents/Footer/Footer";
import UserNavbar from "../MainComponents/UserNavbar/UserNavbar";
import Navbar from "../MainComponents/Navbar/Navbar";
import Pstories from "../MainComponents/Pstories/Pstories";
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import {login} from '../../actions/authActions'
import { Z_FIXED } from "zlib";

class PeopleStories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRedirect = () => {
    if (this.props.isAuthenticated === false) {
      return <Redirect to="/Login" />;
    }
  };

  render() {
    this.renderRedirect()   
    return (
      <div>
          <Navbar />
          <UserNavbar />
        <Pstories />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps,{login})(PeopleStories)
