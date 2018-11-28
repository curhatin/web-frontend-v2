import React, { Component } from 'react';
import Navbar from '../MainComponents/Navbar/Navbar';
import UserNavbar from '../MainComponents/UserNavbar/UserNavbar';
import MstoryDetail from '../MainComponents/MstoryDetail/MstoryDetail';


class MyStoryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <Navbar />
            <UserNavbar />
            <MstoryDetail id={this.props.match.params.id} history={this.props.history}/>

        </div>
             );
    }
}
 
export default MyStoryDetail;