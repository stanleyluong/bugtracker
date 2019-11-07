// import faker from 'faker'
// import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class AssignedToDropdown extends React.Component{
    state = {
        searchQuery: "",
        value: []
    }
    // componentDidMount(){
    //     this.setState({
    //         value: this.props.findUserName()
    //     })
    // }
    handleChange = (e, { searchQuery, value }) => {
        this.setState({ searchQuery, value })
        console.log(this.state.searchQuery)
        // console.log(e)
        console.log(this.state.value)
        this.props.handleChangeAssignedTo(this.state.value,this.props.bug)
    }

    handleSearchChange = (e, { searchQuery }) => {
        this.setState({ searchQuery })
        console.log(searchQuery)
        console.log(e)
    }
    
    render(){
        const { searchQuery, value } = this.state
        // console.log('searchQuery', searchQuery);
        // console.log('value', value)
        const developerOptions = this.props.users.map((user)=>{
            return {key:user.id, text: user.username, value:user.id, image: user.image}
        
        })
        // console.log(developerOptions)
        // console.log(this.props.users)
        // console.log(developerOptions)
        
        return(
            <Dropdown
            fluid
            multiple
            onChange={this.handleChange}
            onSearchChange={this.handleSearchChange}
            options={developerOptions}
            placeholder="     selectdevs"
            search
            searchQuery={searchQuery}
            selection
            value={value}
            closeOnChange
            closeOnBlur
            />
        )
    }

}
    



export default AssignedToDropdown