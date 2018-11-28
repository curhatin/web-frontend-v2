import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../PstoryDetail/Style.css";
import { connect } from "react-redux";
import { login } from "../../../actions/authActions";
import { fetchDataPostUserById } from "../../../actions/postActions";
import timeAgo from "time-ago";
import { Link } from "react-router-dom";
import { fetchDataCommentsByPostId } from "../../../actions/commentsActions";

class PstoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log('kebuka')
    this.props.fetchDataPostUserById(localStorage.token, this.props.id);
  }
  render() {
    console.log(this.props.post_by_post_id )
    return (
      <div>
      <div id="peoplestories">
        <div id="box-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <div id="comment-boxes">
                  <div className="row">
                    <div id="comment-wrapper">
                      <div className="col-md-12">
                        <div id="comment-notif">
                          <p>
                            {" "}
                            {this.props.post_by_post_id &&
                              this.props.post_by_post_id[`posts-comments`].length}{" "}
                            comments{" "}
                          </p>
                          <p>
                            {" "}
                            {timeAgo.ago(
                              new Date(
                                this.props.post_by_post_id &&
                                  this.props.post_by_post_id.createdAt
                              )
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div id="comment-box">
                          <div id="comment-title">
                            <a href="#">
                              <h5>
                                <strong>
                                  {this.props.post_by_post_id &&
                                    this.props.post_by_post_id.topic}
                                </strong>
                              </h5>
                            </a>
                          </div>
                          <hr />
                          <div id="comment-content">
                            <p>
                              {this.props.post_by_post_id &&
                                this.props.post_by_post_id.post}
                            </p>
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                    <div id="button-wrapper">
                      <div id="update-button">
                        <button type="submit" className="btn-outline-success">
                          Update
                        </button>
                      </div>
                      <div id="update-button">
                        <button type="submit" className="btn-outline-success">
                          Delete
                        </button>
                      </div>
                    </div>

                    {this.props.post_by_post_id &&
                      this.props.post_by_post_id[`posts-comments`].map(
                        (commentData, index) => (
                          <div id="other-comment-box" key={index}>
                            <div id="comment-title">
                              <div id="comment-notif">
                                <p>
                                  {timeAgo.ago(
                                    new Date(commentData.comment.createdAt)
                                  )}
                                </p>
                              </div>
                            </div>

                            <div id="comment-content">
                              <p>{commentData.comment.comments}</p>
                              <hr />
                            </div>
                          </div>
                        )
                      )}

                    <div id="button-wrapper-2">
                      <div id="update-button-2">
                        <button type="submit" className="btn-outline-success">
                          Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
  post_detail: state.post.post_detail,
  comment: state.comment.comments_by_post_id,
  post_by_post_id: state.post.post_by_post_id
});

export default connect(
  mapStateToProps,
  { login, fetchDataCommentsByPostId, fetchDataPostUserById }
)(PstoryDetail);
