import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {Context} from './Provider'

class AssignUserToNewBug extends Component{
    static contextType = Context
    state = {
        searchQuery: "",
        value: [],
        addUser: [],
        removeUser: []
    }
    
    handleChange = (e, { searchQuery, value }) => {
        this.setState({ searchQuery, value },()=>{this.context.handleChangeAssignedTo(this.state.value,this.props.bug)})
    }

    handleSearchChange = (e, { searchQuery }) => {this.setState({ searchQuery })}
    render(){
        const { searchQuery, value } = this.state
       
        const developerOptions = this.context.users.map((user)=>{
            return {key:user.id, text: user.username, value:user.id, image: user.image}
        })
        return(<div>
            <Dropdown
            fluid
            multiple
            onChange={this.handleChange}
            onSearchChange={this.handleSearchChange}
            options={developerOptions}
            placeholder=".....devs"
            search
            searchQuery={searchQuery}
            selection
            value={value}
            closeOnChange
            closeOnBlur
            />
        </div>
        )
    }

}

export default AssignUserToNewBug