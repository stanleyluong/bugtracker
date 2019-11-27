import React, { Component } from 'react'
import '../css/Project.css'
import BugContainer from './BugContainer'
class Project extends React.Component {

    state = {
        showProjectTitle: false
    }
   
    handleShowProject=()=>{
        let projectTitle
            this.props.projects.forEach(project=>{
                if (project.id === this.props.bug.project_id){
                    projectTitle = project.title
                }
            })
            return projectTitle     
    }
    
    handleProjectTitle=(val)=>{
        this.props.handleProjectTitle(val, this.props.project)
        this.setState({showProjectTitle: false})
    }

    handleProjectTitleClick=()=>{
        this.setState({showProjectTitle:true})
    }

    handleShowProjectTitle=()=>{
        let bugs = this.props.bugs.filter(bug=>{if (bug.project_id===this.props.project.id){return bug}})
        if(this.state.showProjectTitle===false){
            return this.props.project.title
        } else {
            return <BugContainer
                        bugs={bugs}
                        user_bugs={this.props.user_bugs}
                        users={this.props.users}
                        projects={this.props.projects}
                        user_projects={this.props.user_projects}
                        jwt={this.props.jwt}
                        project={this.props.project}
                        />
        }
    }

    handleCancelProjectTitle=()=>{this.setState({showProjectTitle:false})}
    
    render(){
        return(
            <tr>
                <td>{this.props.project.id}</td>
                <td onClick={()=>this.handleProjectTitleClick()}>{this.handleShowProjectTitle()}</td>
            </tr>
        )
    }
}
export default Project