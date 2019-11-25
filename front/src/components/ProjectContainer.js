import React from 'react'
import ProjectSearch from './ProjectSearch'
import 'semantic-ui-css/semantic.min.css'
import '../css/BugContainer.css'
import NewProject from './NewProject'
import ProjectBar from './ProjectBar'
import {Context} from './Provider'

class ProjectContainer extends React.Component{
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
                    jwt={this.state.jwt}
                    bugs={this.state.bugs} 
                    user_bugs={this.state.user_bugs}
                    users={this.state.users}
                    projects={projects}
                    user_projects={this.state.user_projects}
                    // addBug={this.addBug}
                    handleChangeStatus={this.handleChangeStatus}
                    handleChangePriority={this.handleChangePriority}
                    handleChangeOpened={this.handleChangeOpened}
                    handleChangeClosed={this.handleChangeClosed}
                    handleChangeProject={this.handleChangeProject}
                    handleChangeDescription={this.handleChangeDescription}
                    handleChangeName={this.handleChangeName}
                    handleChangeSubmittedBy={this.handleChangeSubmittedBy}
                    handleChangeLocation={this.handleChangeLocation}
                    handleChangeAssignedTo={this.handleChangeAssignedTo}
                    handleProjectTitle={this.handleProjectTitle}
                    // handleDeleteBug={this.handleDeleteBug}
                /> 
                
            </div>
        )
    }
}

export default ProjectContainer