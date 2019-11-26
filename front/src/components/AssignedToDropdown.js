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
        console.log(assignedUsers)
        return assignedUsers
        // if(assignedUsers.length === 0){this.setState({value: []})}
        // else {
        //     return(this.setState({value: assignedUsers}),()=>console.log(this.state))
        // }
    }

    componentDidMount(){
        this.findAssignedUsers()
        // let assignedUsers = []
        // this.context.user_bugs.forEach(user_bug=>{
        //     if (user_bug.bug_id === this.props.bug.id){
        //         this.context.users.forEach(user=>{
        //             if (user.id === user_bug.user_id){
        //                 assignedUsers.push(user.id)
        //             }
        //         })
        //     }
        // })
        // if(assignedUsers.length === 0){this.setState({value: []})}
        // else {
        //     this.setState({value: assignedUsers})
        // }
        // console.log(assignedUsers)
        // console.log(this.state.value)
    }
    handleChange = (e, { searchQuery, value }) => {
        console.log("foo")
        this.setState({ searchQuery, value },()=> this.context.handleChangeAssignedTo(this.state.value,this.props.bug, this.findAssignedUsers),()=> this.findAssignedUsers())
        
    }

    handleSearchChange = (e, { searchQuery }) => {this.setState({ searchQuery })}
    render(){
        const { searchQuery, value } = this.state

        console.log("foo3", value, this.props.bug.name)
       
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