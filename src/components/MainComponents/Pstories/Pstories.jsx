import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Pstories/Style.css";
import timeAgo from "time-ago";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../actions/authActions";
import { fetchDataPost } from "../../../actions/postActions";

class Pstories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderRedirect = () => {
    if (this.props.isAuthenticated === false) {
     this.props.history.push("/Login");
    }
  };
  componentDidMount(){
    if(this.props.token){
      this.props.fetchDataPost(localStorage.token);
    }
    
  }
  render() {
    console.log(this.props.post_list)
    return (
      <div id="peoplestories">
        <div id="box-lg">
          <div className="container">
            <div className="row">
              {this.props.post_list &&
                this.props.post_list.map((postData, index) => (
                  <React.Fragment>
                    <div className="col-md-10">
                      <div id="comment-boxes">
                        <div className="row">
                          <div id="comment-wrapper">
                            <div className="col-md-12">
                              <div id="comment-notif">
                                <p>
                                  {" "}
                                  {postData[`posts-comments`].length} comments
                                </p>
                                <p>
                                  {" "}
                                  {timeAgo.ago(new Date(postData.createdAt))}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div id="comment-box">
                                <div id="comment-title">
                                  <h5>
                                
                                    <Link to={`/PeopleStoryDetail/${postData.id}`} >
                                      <strong>{postData.topic}</strong>
                                    </Link>
                                  </h5>
                                </div>
                                <hr />
                                <div id="comment-content">
                                  <p>{postData.post}</p>
                                </div>
                              </div>
                              <hr />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index === 0 && (
                      <div className="col-md-2">
                        <div id="topic-box">
                          <div>
                            <h6 className="text-center">
                              {" "}
                              <strong>TOPICS</strong>
                            </h6>
                            <hr />
                          </div>
                          <div id="topic-catagories">
                            <div className="topic-category">
                              <a href="#">
                                <p>EDUCATION</p>
                              </a>
                            </div>
                            <div className="topic-category">
                              <a href="#">
                                <p>SEX</p>
                              </a>
                            </div>
                            <div className="topic-category">
                              <a href="#">
                                <p>SOCIAL LIFE</p>
                              </a>
                            </div>
                            <div className="topic-category">
                              <a href="#">
                                <p>RELIGION</p>
                              </a>
                            </div>
                            <div className="topic-category">
                              <a href="#">
                                <p>HEALTH</p>
                              </a>
                            </div>
                            <div className="topic-category">
                              <a href="#">
                                <p>OTHERS</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
            </div>

            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  post_list: state.post.post_list,
  token: state.auth.token
});

export default connect(
  mapStateToProps,
  { login, fetchDataPost }
)(Pstories);
