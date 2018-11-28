import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import { Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../../actions/authActions'
import {fetchDataPost} from '../../../actions/postActions'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit = async () => {
    await this.props.login({
      email: this.state.email,
      password: this.state.password
    })
    // await this.props.fetchDataPost(localStorage.token);
      // this.props.history.push("/Share");
      
  }

  renderRedirect = () => {
    if (this.props.isAuthenticated === true) {
     this.props.history.push("/Share");
    }
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    this.renderRedirect()   
 
    return (
      <div>
        <div id="login">
          <div className="container-login">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4" />
                <div className="col-md-8">
                  <div id="login-right">
                    <div id='login-form'>
                     <Link to="/">
                        <p>HOME</p>
                        </Link>
                      
                      <h4>
                        {" "}
                        Sign in to <span>CURHATIN!</span>{" "}
                      </h4>
                      <p>Enter your detail below!</p>
                      <div className="row">
                        <div className="col-md-12">
                          <div class="form-group">
                            <input
                              value={this.state.email}
                              onChange={this.onChange}
                              name="email"
                              placeholder="Email"
                              class="form-control"
                              type="text"
                             
                             
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div class="form-group">
                            <input
                              value={this.state.password}
                              onChange={this.onChange}
                              name="password"
                              placeholder="Password.."
                              class="form-control"
                              type="password"
          
                            />
                          </div>
                        </div>
                      </div>
                      <div id="login-btn">
                        <button type="button" onClick={this.handleSubmit} className="btn btn-outline-secondary">
                          Sign In
                        </button>
                      </div>

                      <div id="login-register-box">
                        <p> Sign Up?</p>
                        <div id="login-register-btn">
                        <Link to='/Register'>
                        <button  type="button" className="btn btn-outline-secondary">
                            Click here
                          </button>
                          </Link>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated,
  token : state.auth.token
})

export default withRouter(connect(mapStateToProps,{login,fetchDataPost})(Login))