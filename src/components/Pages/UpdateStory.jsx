import React, { Component } from 'react';
import Navbar from '../MainComponents/Navbar/Navbar';
import UserNavbar from '../MainComponents/UserNavbar/UserNavbar';
import Update from  '../MainComponents/Update/Update'
import { login } from "../../actions/authActions";
import { connect } from "react-redux";
import { updatePostById } from "../../actions/postActions";

class UpdateStory extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Navbar />
                <UserNavbar />
                <Update id={this.props.match.params.id} history={this.props.history}/>
            </div>
         );
    }
}
 
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    post_by_post_id: state.post.post_by_post_id
  });
  
  export default connect(
    mapStateToProps,
    { login, updatePostById}
  )(UpdateStory);