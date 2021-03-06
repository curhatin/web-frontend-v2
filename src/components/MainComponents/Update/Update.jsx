import React, { Component } from "react";
import { login } from "../../../actions/authActions";
import { connect } from "react-redux";
import { updatePostById } from "../../../actions/postActions";


class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      post: ""
    };
  }
  

  OnChangeModule = e => {
    this.setState({
      [e.target.name] : e.target.value
  })
  }


  UpdateDataHandle = () => {
    this.props.updatePostById({
      id: this.props.id,
      post: this.state.post,
      topic: this.state.topic,
      token: localStorage.token
    })
    this.props.history.push(`/myStoryDetail/${this.props.id}`);

      

  
  }

  render() {
    return (
      <div>
        <div id="box-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="create-boxes">
                  <div className="row">
                    <div id="create-wrapper">
                      <div className="col-md-12">
                        <div id="comment-title">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Title....."
                            name="topic" value={this.state.topic} onChange={this.OnChangeModule}
                          />
                        </div>
                        <hr />
                        <div id="stories-content">
                          <textarea type="text" placeholder="Your stories" name="post" value={this.state.post} onChange={this.OnChangeModule} />
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div id="create-button">
                              <button onClick={this.UpdateDataHandle}
                                type="submit"
                                className="btn-outline-success"
                              >
                                Update
                              </button>
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div id="create-catagories">
                              <a href="#">
                                <p> Education</p>
                              </a>
                              <a href="#">
                                <p> Sex </p>
                              </a>
                              <a href="#">
                                <p> Social life </p>
                              </a>
                              <a href="#">
                                <p> Religion </p>
                              </a>
                              <a href="#">
                                <p> Health </p>
                              </a>
                              <a href="#">
                                <p> Others </p>
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
          </div>
        </div>
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
)(Update);
