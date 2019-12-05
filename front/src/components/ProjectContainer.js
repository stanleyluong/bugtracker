import React, { Component } from 'react'
import '../css/BugContainer.css'
import NewProject from './NewProject'
import ProjectBar from './ProjectBar'

class ProjectContainer extends Component{
    render(){
        return(
            <div className="project-container-div">
                <NewProject />   
                <ProjectBar />  
            </div>
        )
    }
}

export default ProjectContainer