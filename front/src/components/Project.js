import React from 'react'
import StatusDropdown from './StatusDropdown'
import PriorityDropdown from './PriorityDropdown'
import Calendar from 'react-calendar'
import Moment from 'react-moment'
import EdiText from 'react-editext'
import AssignedToDropdown from './AssignedToDropdown'
import 'semantic-ui-css/semantic.min.css'


class Project extends React.Component {

    state = {
        selectStatus: false,
        showOpenedCalender: false,
        showClosedCalendar: false,
        showEditName: false,
        showEditProjectId: false,
        showEditDescription: false,
        showEditSubmittedBy: false,
        showEditLocation: false,
        showEditAssignedTo: false
    }
   
    // findUserName=(bug)=>{
    //     let usernames = []
    //     let users = []
    //     this.props.user_bugs.forEach(user_bug=>{
    //         if (user_bug.bug_id===bug.id){
    //             usernames.push(user_bug.user_id)
    //         }
    //     })
    //     usernames.forEach(id=>{
    //         this.props.users.forEach(user =>{
    //             if (user.id === id){
    //                 users.push(user.username)
    //             }  
    //         })
    //     })
    //     return (
    //         users.map((item, key)=>{
    //             return (<div key={key}>{item}</div>)
    //         })
    //     )
    // }
    
 
    findProjectId=(bug)=>{
        // console.log(bug)
        let id
        this.props.project_bugs.forEach(project_bug=>{
            // console.log(bug.id, project_bug.bug_id)
            if (project_bug.bug_id === bug.id){
                id = project_bug.project_id
            }
        }) 
        // console.log(id)

        // id = id.toString()
        // console.log(id)
        return id
        
    }

    handleOpenedClick=()=>{this.setState({showOpenedCalender: true})}
    onChangeOpened=(date)=>{
        this.props.handleChangeOpened(date, this.props.bug)
        this.setState({showOpenedCalender: false})
    }
    handleShowOpened=()=>{
        if (this.state.showOpenedCalender === false){
            return <Moment format="MM/DD/YYYY">{this.props.bug.opened}</Moment>
        } else {
            return <Calendar onChange={this.onChangeOpened}/>
        }
    }
    handleClosedClick=()=>{this.setState({showClosedCalendar: true})}
    onChangeClosed=(date)=>{
        this.props.handleChangeClosed(date, this.props.bug)
        this.setState({showClosedCalendar: false })
    }
    handleShowClosed=()=>{
        if (this.state.showClosedCalendar === false){
            return <Moment format="MM/DD/YYYY">{this.props.bug.closed}</Moment>
        } else {
            return <Calendar onChange={this.onChangeClosed}/>
        }
    }
    
    handleProjectId=(val)=>{
        this.props.handleChangeProjectId(val, this.props.bug)
        this.setState({showEditProjectId: false})
    }
    handleShowProjectId=()=>{
        if (this.state.showEditProjectId===false){
            return this.findProjectId(this.props.bug)
        } else {
            return <EdiText 
            value={`${this.findProjectId(this.props.bug)}`}
            type="text"
            hint="Assign bug to project"
            editOnViewClick={true}
            submitOnEnter
            // validationMessage="Please enter a valid Project ID"
            // validation={value => this.props.projects.some(project=> project.id === value)}
            onSave={this.handleProjectId}
            onCancel={this.cancelShowProjectId}
            />
        }      
    }
    cancelShowProjectId=()=>{this.setState({showEditProjectId: false})}
    handleProjectIdClick=()=>{this.setState({showEditProjectId: true})}
    
    
    
    handleDescription=(val)=>{
        this.props.handleChangeDescription(val, this.props.bug)
        this.setState({showEditDescription: false})
    }
    handleDescriptionClick=()=>{this.setState({showEditDescription: true})}
    handleShowDescription=()=>{
        if (this.state.showEditDescription===false){
            return this.props.bug.description
        } else{
            return <EdiText
                value={this.props.bug.description}
                type="textarea"
                inputProps={{placeholder: "Type your content here"}}
                hint="Write a bug description"
                editOnViewClick={true}
                submitOnEnter
                onSave={this.handleDescription}
                viewProps={{style:{width:"200px"}}}
                onCancel={this.handleCancelShowDescription}
                />
        }
    }
    handleCancelShowDescription=()=>{this.setState({showEditDescription:false})}
    

    handleShowName=()=>{
        if (this.state.showEditName===false){
            return this.props.bug.name
        } else { 
            return <EdiText 
                value={this.props.bug.name}
                type="text"
                hint="Enter bug name"
                editOnViewClick={true}
                submitOnEnter
                onSave={this.handleName}
                onCancel={this.handleCancelShowName}
                />}
    }
    handleCancelShowName=()=>{
        this.setState({showEditName: false})
    }
    handleName=(val)=>{
        this.props.handleChangeName(val, this.props.bug)
        this.setState({showEditName: false})
    }
    handleNameClick=()=>{this.setState({showEditName: true})}
    
    
    
    handleSubmittedBy=(val)=>{
        this.props.handleChangeSubmittedBy(val, this.props.bug)
        this.setState({showEditSubmittedBy: false})
    }
    handleSubmittedByClick=()=>{this.setState({showEditSubmittedBy:true})}
    handleShowSubmittedBy=()=>{
        if(this.state.showEditSubmittedBy===false){
            return this.props.bug.submitted_by
        } else {
            return <EdiText 
            value={this.props.bug.submitted_by}
            type="text"
            hint="Enter bug submitter"
            editOnViewClick={true}
            submitOnEnter
            onSave={this.handleSubmittedBy}
            onCancel={this.handleCancelSubmittedBy}
            />
        }
    }
    handleCancelSubmittedBy=()=>{this.setState({showEditSubmittedBy:false})}
    
    
    
    handleLocation=(val)=>{
        this.props.handleChangeLocation(val, this.props.bug)
        this.setState({showEditLocation: false})
    }
    handleLocationClick=()=>{
        this.setState({showEditLocation:true})
    }
    handleShowLocation=()=>{
        if(this.state.showEditLocation===false){
            return this.props.bug.location
        } else {
            return <EdiText 
            value={this.props.bug.location}
            type="text"
            hint="Enter bug submitter"
            editOnViewClick={true}
            submitOnEnter
            onSave={this.handleLocation}
            onCancel={this.handleCancelLocation}
            />
        }
    }
    handleCancelLocation=()=>{this.setState({showEditLocation:false})}
    

    handleAssignedToClick=()=>{this.setState({showEditAssignedTo:true})}
    handleShowAssignedTo=()=>{
        if (this.state.showEditAssignedTo===false){
            return this.findUserName(this.props.bug)
        } else {
            // console.log(this.props.users)
            return <AssignedToDropdown findUserName={this.findUserName} users={this.props.users} bug={this.props.bug}/>
        }
    }
    render(){
        return(
            <tr>
                <td style={{width: ".1em"}}>{this.props.bug.id}</td>
                <td onClick={()=>this.handleProjectIdClick()}>{this.handleShowProjectId()}</td>
                <td onClick={()=>this.handleNameClick()}>{this.handleShowName()}</td>
                <td style={{width: "7em"}}><PriorityDropdown handleChangePriority={this.props.handleChangePriority} id={this.props.bug.id} priority={this.props.bug.priority}/></td>
                <td><img src={this.props.bug.attachment} alt="oops"/></td>
                <td><StatusDropdown handleChangeStatus={this.props.handleChangeStatus} id={this.props.bug.id} status={this.props.bug.status}/></td>
                <td onClick={()=>this.handleDescriptionClick()} >{this.handleShowDescription()}</td>
                <td onClick={()=>this.handleOpenedClick()}>{this.handleShowOpened()}</td>
                <td><Moment fromNow>{this.props.bug.opened}</Moment></td>
                <td onClick={()=>this.handleClosedClick()}>{this.handleShowClosed()}</td>
                <td onClick={()=>this.handleSubmittedByClick()}>{this.handleShowSubmittedBy()}</td>
                <td onClick={()=>this.handleLocationClick()}>{this.handleShowLocation()}</td>
                <td width="300px"><AssignedToDropdown handleChangeAssignedTo={this.props.handleChangeAssignedTo} users={this.props.users} bug={this.props.bug}/></td>
            </tr>
            )

    }
}

export default Project