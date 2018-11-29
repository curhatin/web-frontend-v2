import React, { Component } from 'react';
import HomePage from './components/Pages/HomePage';
import Login from './components/MainComponents/LoginPage/Login'
import { register } from './serviceWorker';
import Register from './components/MainComponents/Register/Register'
import Footer from './components/MainComponents/Footer/Footer'
import Navbar from './components/MainComponents/Navbar/Navbar';
import UserNavbar from './components/MainComponents/UserNavbar/UserNavbar';
import PeopleStories from './components/Pages/PeopleStories'
import Header from './components/MainComponents/Header/Header';
import Contact from './components/MainComponents/Contact/Contact';
import CreateStory from './components/Pages/CreteStory';
import PeopleStoryDetail from './components/Pages/PeopleStoryDetail';
import CommentStory from './components/Pages/CommentStory';
import MyStoryDetail from './components/Pages/MyStoryDetail';
import UpdateStory from './components/Pages/UpdateStory';
import MstoryDetail from './components/MainComponents/MstoryDetail/MstoryDetail'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import axios from 'axios'
import { Provider } from 'react-redux'
import store from "./store"
import {cekToken} from "./actions/authActions"
import {connect} from 'react-redux'
import Mystories from './components/Pages/MyStories'



class App extends Component {

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.cekToken(localStorage.getItem("token"))
    } else {
      this.setState({ isAuthenticated: false });
    }
  }

  
  render() {
    return (
      <Provider store={store}>
      <Router >
        <div>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Login"  render={(props) => <Login {...props} />}/>
          <Route exact path="/Register"  render={(props) => <Register {...props} />}   />
          <Route exact path="/Share" render={(props) => <PeopleStories {...props} />} />
          <Route exact path="/Mystories" render={(props) => <Mystories {...props} />} />
          <Route exact path="/MyStoryDetail" render={(props) => <MyStoryDetail {...props} />} />
          <Route exact path="/PeopleStoryDetail/:id" render={(props) => <PeopleStoryDetail {...props} />} />
          <Route exact path="/CreateStory" render={(props) => <CreateStory {...props} />} />
          <Route exact path="/MyStoryDetail/:id" render={(props) => <MyStoryDetail {...props} />} />
          <Route exact path="/PeopleStories" render={(props) => <PeopleStories {...props} />} />
          <Route exact path="/CommentStory" render={(props) => <CommentStory {...props} />} />
          <Route exact path="/UpdateStory/:id" render={(props) => <UpdateStory {...props} />} />


          </Switch>
          
      </div>
      </Router>
      </Provider>
    );
  }
}

export default connect(null,{cekToken})(App)
