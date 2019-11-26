import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {Context} from './Provider'

class AssignedToDropdown extends Component{
    static contextType = Context
    state = {
        searchQuery: "",
        value: []
    }

    findAssignedUsers=()=>{
        let assignedUsers = []
        this.context.user_bugs.forEach(user_bug=>{
            if (user_bug.bug_id === this.props.bug.id){
                this.context.users.forEach(user=>{
                    if (user.id === user_bug.user_id){
                        assignedUsers.push(user.id)
                    }
                })
            }
        })
        return assignedUsers
    }

    componentDidMount(){
        this.findAssignedUsers()
    }
    handleChange = ({ searchQuery, value }) => {
        this.setState({ searchQuery, value },
            ()=> this.context.handleChangeAssignedTo(this.state.value,this.props.bug, this.findAssignedUsers)
        )
        
    }

    handleSearchChange = (e, { searchQuery }) => {this.setState({ searchQuery })}
    render(){
        const { searchQuery } = this.state
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
            value={this.findAssignedUsers()}
            closeOnChange
            closeOnBlur
            />
        </div>
        )
    }
}

export default AssignedToDropdown