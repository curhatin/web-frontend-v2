import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Comment/Style.css'
import { connect } from "react-redux";
import { fetchDataPostUserById } from "../../../actions/postActions"


class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId : '',
      comments : ''
    };
  }

  onChange = e => {
    this.setState({
      
    })
  }
  render() {
    console.log(this.props)
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
                            <p> 100 comments</p>
                            <p> 10 minutes ago</p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div id="comment-box">
                            <div id="comment-title">
                              <a href="#">
                                <h5>
                                  <strong>Makan bang</strong>
                                </h5>
                              </a>
                            </div>
                            <hr />
                            <div id="comment-content">
                              <p>
                                {" "}
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Laboriosam, corrupti
                                voluptate. Facere vel autem, sequi asperiores
                                inventore facilis qui cum odit. Molestiae
                                praesentium ipsam saepe tenetur fugiat dolorem!
                                Magni, fugit?{" "}
                              </p>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                      <div id="comment-content">
                        <textarea
                          type="text"
                          placeholder="your suggestion or advice"
                        />
                      </div>
                      <div id="send-comment-button">
                        <button type="submit" className="btn-outline-success">
                          Send
                        </button>
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
  post_by_post_id: state.post.post_by_post_id
 
});

export default connect(
mapStateToProps,fetchDataPostUserById 
)(Comment);
