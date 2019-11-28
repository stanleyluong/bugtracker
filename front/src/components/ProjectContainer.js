import React, { Component } from 'react'
import ProjectSearch from './ProjectSearch'
import '../css/BugContainer.css'
import NewProject from './NewProject'
import ProjectBar from './ProjectBar'
import {Context} from './Provider'

class ProjectContainer extends Component{
    static contextType=Context

    // state = {searchText: ""}

    // handleChange = (searchText) => {this.setState({searchText })}
    
    render(){
        // const re = new RegExp(this.state.searchText, "i");
        // const projects = this.context.projects.filter((project)=>{
        //     return re.test(project.title)
        // })
        // const bugs = this.context.bugs.filter((bug) => {
        //     return re.test(bug.id) 
        //     || re.test(bug.name)
        //     || re.test(bug.priority)
        //     || re.test(bug.project)
        //     || re.test(bug.status)
        //     || re.test(bug.description)
        //     || re.test(bug.opened)
        //     || re.test(bug.closed)
        //     || re.test(bug.age)
        //     || re.test(bug.submitted_by)
        //     || re.test(bug.location)
        // })
        return(
            <div className="project-container-div">
                {/* <ProjectSearch onChange={this.handleChange}/> */}
                <NewProject /> 
                <ProjectBar
                    // projects={projects}
                    // bugs={bugs}
                /> 
                
            </div>
        )
    }
}

export default ProjectContainer