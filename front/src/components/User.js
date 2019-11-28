import React, { Component } from 'react'

class User extends Component {
    render(){
        return(
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.firstname}</td>
                <td>{this.props.user.lastname}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.job}</td>
                <td><img src={`${this.props.user.image}`}/></td>
            </tr>
        )
    }
}

export default User