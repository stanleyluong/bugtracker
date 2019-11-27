import React, { Component } from 'react'
import ProjectSearch from './ProjectSearch'
import '../css/BugContainer.css'
import NewProject from './NewProject'
import ProjectBar from './ProjectBar'
import {Context} from './Provider'

class ProjectContainer extends Component{
    static contextType=Context

    state = {searchText: ""}

    handleChange = (searchText) => {this.setState({searchText })}
    
    render(){
        const re = new RegExp(this.state.searchText, "i");
        const projects = this.context.projects.filter((project)=>{
            return re.test(project.title)
        })

        return(
            <div className="project-container-div">
                <ProjectSearch onChange={this.handleChange}/>
                <NewProject /> 
                <ProjectBar
                    projects={projects}
                /> 
                
            </div>
        )
    }
}

export default ProjectContainer