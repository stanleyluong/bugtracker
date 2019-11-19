// import faker from 'faker'
// import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class AssignedToDropdown extends React.Component{
    state = {
        searchQuery: "",
        value: [],
        addUser: [],
        removeUser: []
    }

    componentDidMount(){
        let assignedUsers = []
        console.log(this.props.user_bugs)
        console.log(this.props)
        this.props.user_bugs.forEach(user_bug=>{
            if (user_bug.bug_id === this.props.bug.id){
                this.props.users.forEach(user=>{
                    if (user.id === user_bug.user_id){
                        assignedUsers.push(user.id)
                    }
                })
            }
        })

        console.log(assignedUsers)
        this.setState({value: assignedUsers},()=> console.log(this.state.value))
    }
    handleChange = (e, { searchQuery, value }) => {
        // console.log(e)
        // console.log(value)
        // console.log(searchQuery)
        // console.log("state", this.state.value)
        // console.log(this.props.bug)
        this.setState({ searchQuery, value },()=>{this.props.handleChangeAssignedTo(this.state.value,this.props.bug)})
        
        // console.log(this.state.searchQuery)
        // console.log(e)
        // console.log(this.state.value)
    }

    handleSearchChange = (e, { searchQuery }) => {
        this.setState({ searchQuery })
        console.log(searchQuery)
        console.log(e)
    }
    // placeholder=()=>{
    //     // console.log(this.props.users)
    //     return "hello"
    // }

    // findusers=()=>{
    //     let assignedUsers = []
    //     this.props.user_bugs.forEach(user_bug=>{
    //         if (user_bug.bug_id === this.props.bug.id){
    //             this.props.users.forEach(user=>{
    //                 if (user.id === user_bug.user_id){
    //                     assignedUsers.push(user.id)
    //                 }
    //             })
    //         }
    //     })
    //     // console.log(assignedUsers)
    //     this.setState({value: assignedUsers})
    // }
    render(){
        // this.findusers()
        const { searchQuery, value } = this.state
        // console.log('searchQuery', searchQuery);
        // console.log('value', value)
        const developerOptions = this.props.users.map((user)=>{
            return {key:user.id, text: user.username, value:user.id, image: user.image}
        
        })
        // console.log(developerOptions)
        // console.log(this.props.users)
        // console.log(developerOptions)
        //riven always on third line on front end. doesnt show up until 3rd addition.
        return(<div>
                {console.log(value,"value")}
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
            // loading
            />
        </div>
        )
    }

}

export default AssignedToDropdown