import React, { Component } from 'react';
import axios from 'axios';


class UserList extends Component {
    constructor () {
        super();
        this.state = {

        }
    }

    getUserList = () => {
        axios.get('/api/person').then((response) => {
        console.log(response.data);
        this.setState({
            userList: response.data
        })
    }).catch((error) => {
        console.log('error in userlist get', error);
    })
    }

    render () {
        return (
            <div>
                <button onClick={this.getUserList}>Get User List</button>
                <br />
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default UserList;