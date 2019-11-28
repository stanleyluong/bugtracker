import React, { Component } from 'react'
import BugList from './BugList'
import Search from './Search'
import '../css/BugContainer.css'
import NewBug from './NewBug'
import { Context } from './Provider'
class BugContainer extends Component{
    static contextType = Context
    state = {searchText:""}
    handleChange = (searchText) => {this.setState({searchText})}
    render(){
        console.log(this.props.project)
        const re = new RegExp(this.state.searchText, "i");
        const bugs = this.props.bugs.filter((bug) => {
            return re.test(bug.id) 
            || re.test(bug.name)
            || re.test(bug.priority)
            || re.test(bug.project)
            || re.test(bug.status)
            || re.test(bug.description)
            || re.test(bug.opened)
            || re.test(bug.closed)
            || re.test(bug.age)
            || re.test(bug.submitted_by)
            || re.test(bug.location)
        })
        return(
            <div className="project-container-div">
                <NewBug jwt={this.props.jwt} project={this.props.project}/>
                <Search onChange={this.handleChange}/>
                <BugList 
                bugs={bugs}
                />
            </div>
        )
    }
}

export default BugContainer