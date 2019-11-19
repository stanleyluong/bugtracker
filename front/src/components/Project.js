import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../css/Project.css'
import BugContainer from './BugContainer'
class Project extends React.Component {

    state = {
        // selectStatus: false,
        // showOpenedCalender: false,
        // showClosedCalendar: false,
        // showEditName: false,
        // showEditProject: false,
        // showEditDescription: false,
        // showEditSubmittedBy: false,
        showProjectTitle: false
        // pictures: []
    }

    // handleOpenedClick=()=>{this.setState({showOpenedCalender: true})}
    // onChangeOpened=(date)=>{
    //     this.props.handleChangeOpened(date, this.props.bug)
    //     this.setState({showOpenedCalender: false})
    // }
    // handleShowOpened=()=>{
    //     if (this.state.showOpenedCalender === false){
    //         return <Moment format="MM/DD/YYYY">{this.props.bug.opened}</Moment>
    //     } else {
    //         return <Calendar onChange={this.onChangeOpened}/>
    //     }
    // }
    // handleClosedClick=()=>{this.setState({showClosedCalendar: true})}
    // onChangeClosed=(date)=>{
    //     this.props.handleChangeClosed(date, this.props.bug)
    //     this.setState({showClosedCalendar: false })
    // }
    // handleShowClosed=()=>{
    //     if (this.state.showClosedCalendar === false){
    //         return <Moment format="MM/DD/YYYY">{this.props.bug.closed}</Moment>
    //     } else {
    //         return <Calendar onChange={this.onChangeClosed}/>
    //     }
    // }
   
    handleShowProject=()=>{
        let projectTitle
            this.props.projects.forEach(project=>{
                if (project.id === this.props.bug.project_id){
                    projectTitle = project.title
                }
            })
            return projectTitle     
    }
    
    // handleDescription=(val)=>{
    //     this.props.handleChangeDescription(val, this.props.bug)
    //     this.setState({showEditDescription: false})
    // }
    // handleDescriptionClick=()=>{this.setState({showEditDescription: true})}
    // handleShowDescription=()=>{
    //     if (this.state.showEditDescription===false){
    //         return this.props.bug.description
    //     } else{
    //         return <EdiText
    //             value={this.props.bug.description}
    //             type="textarea"
    //             hint="Enter description"
    //             editOnViewClick={true}
    //             submitOnEnter
    //             onSave={this.handleDescription}
    //             onCancel={this.handleCancelShowDescription}
    //             />
    //     }
    // }
    // handleCancelShowDescription=()=>{this.setState({showEditDescription:false})}

    // handleShowName=()=>{
    //     if (this.state.showEditName===false){
    //         return this.props.bug.name
    //     } else { 
    //         return <EdiText 
    //             value={this.props.bug.name}
    //             type="textarea"
    //             hint="Enter name"
    //             editOnViewClick={true}
    //             submitOnEnter
    //             onSave={this.handleName}
    //             onCancel={this.handleCancelShowName}
    //             />}
    // }
    // handleCancelShowName=()=>{
    //     this.setState({showEditName: false})
    // }
   
    // handleName=(val)=>{
    //     this.props.handleChangeName(val, this.props.bug)
    //     this.setState({showEditName: false})
    // }
   
    // handleNameClick=()=>{this.setState({showEditName: true})}
     
    // handleSubmittedBy=(val)=>{
    //     this.props.handleChangeSubmittedBy(val, this.props.bug)
    //     this.setState({showEditSubmittedBy: false})
    // }
    // handleSubmittedByClick=()=>{this.setState({showEditSubmittedBy:true})}
    
    // handleShowSubmittedBy=()=>{
    //     if(this.state.showEditSubmittedBy===false){
    //         return this.props.bug.submitted_by
    //     } else {
    //         return <EdiText 
    //         value={this.props.bug.submitted_by}
    //         type="textarea"
    //         hint="Enter submitter"
    //         editOnViewClick={true}
    //         submitOnEnter
    //         onSave={this.handleSubmittedBy}
    //         onCancel={this.handleCancelSubmittedBy}
    //         />
    //     }
    // }
    // handleCancelSubmittedBy=()=>{this.setState({showEditSubmittedBy:false})}
    
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
                        handleChangeStatus={this.props.handleChangeStatus}
                        handleChangePriority={this.props.handleChangePriority}
                        handleChangeOpened={this.props.handleChangeOpened}
                        handleChangeClosed={this.props.handleChangeClosed}
                        handleChangeProject={this.props.handleChangeProject}
                        handleChangeDescription={this.props.handleChangeDescription}
                        handleChangeName={this.props.handleChangeName}
                        handleChangeSubmittedBy={this.props.handleChangeSubmittedBy}
                        handleChangeLocation={this.props.handleChangeLocation}
                        handleChangeAssignedTo={this.props.handleChangeAssignedTo}
                        addBug={this.props.addBug}
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

    // handleShowProjectBugs=()=>{
    //     console.log(this.props.bugs)
    //     console.log(this.props.project)
    //     let project_bugs=[]
    //     this.props.bugs.forEach(bug=>{
    //         if(bug.project_id===this.props.project.id){
    //             project_bugs.push(bug.name)
    //         }
    //     })
    //      project_bugs.forEach(bug=>{
    //         return <li>{bug}</li>
    //     })
    // }


    // findUsers=()=>{
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
    //     console.log(assignedUsers)
    //     return assignedUsers
    // }
    
    
    render(){
        // console.log(this.props)
        return(
            <tr>
                {/* <td className="td" style={{width: ".05em"}}>{this.props.bug.id}</td>
                <td className="td" style={{width:".1em"}}>{this.handleShowProject()}</td>
                <td className="td" onClick={()=>this.handleNameClick()}>{this.handleShowName()}</td>
                <td className="td" style={{width: "1em"}}><PriorityDropdown handleChangePriority={this.props.handleChangePriority} id={this.props.bug.id} priority={this.props.bug.priority}/></td>
                <td className="td" ><div className="grandparent"><ImageUploader  withLabel={false} withPreview={true} withIcon={false} buttonText='Upload' onChange={this.onDrop} imgExtension={['.jpg', '.gif', '.png']} maxFileSize={5242880}/></div></td>
                <td className="td" ><StatusDropdown handleChangeStatus={this.props.handleChangeStatus} id={this.props.bug.id} status={this.props.bug.status}/></td>
                <td className="td" onClick={()=>this.handleDescriptionClick()} >{this.handleShowDescription()}</td>
                <td className="td" onClick={()=>this.handleOpenedClick()}>{this.handleShowOpened()}</td>
                <td className="td" ><Moment fromNow>{this.props.bug.opened}</Moment></td>
                <td className="td" onClick={()=>this.handleClosedClick()}>{this.handleShowClosed()}</td>
                <td className="td" onClick={()=>this.handleSubmittedByClick()}>{this.handleShowSubmittedBy()}</td>
                <td className="td" onClick={()=>this.handleLocationClick()}>{this.handleShowLocation()}</td>
                <td className="td" width="300px"><AssignedToDropdown handleChangeAssignedTo={this.props.handleChangeAssignedTo} users={this.props.users} bug={this.props.bug} user_bugs={this.props.user_bugs}/></td> */}
                <td>{this.props.project.id}</td>
                <td onClick={()=>this.handleProjectTitleClick()}>{this.handleShowProjectTitle()}</td>
                {/* <td>{this.handleShowProjectBugs()}</td> */}
                {/* <td>project users</td> */}
            </tr>
        )
    }
}
export default Project