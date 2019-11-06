import React from 'react'
import StatusDropdown from './StatusDropdown'
import PriorityDropdown from './PriorityDropdown'
import Calendar from 'react-calendar'
import Moment from 'react-moment'
import EdiText from 'react-editext'


class Project extends React.Component {

    state = {
        selectStatus: false,
        showOpenedCalender: false,
        showClosedCalendar: false,
        showEditName: false,
        showEditProjectId: false,
        showEditDescription: false
    }
   
    findUserName(bug){
        let usernames = []
        let users = []
        this.props.user_bugs.forEach(user_bug=>{
            if (user_bug.bug_id===bug.id){
                usernames.push(user_bug.user_id)
            }
        })
        usernames.forEach(id=>{
            this.props.users.forEach(user =>{
                if (user.id === id){
                    users.push(user.username)
                }  
            })
        })
        return (
            users.map((item, key)=>{
                return (<li key={key}>{item}</li>)
            })
        )
    }
 
    findProjectId=(bug)=>{
        // console.log(bug)
        let id
        this.props.project_bugs.forEach(project_bug=>{
            // console.log(bug.id, project_bug.bug_id)
            if (project_bug.bug_id === bug.id){
                id = project_bug.project_id
            }
        }) 
        console.log(id)

        // id = id.toString()
        console.log(id)
        return id
        
    }

    handleOpenedClick=()=>{
        this.setState({
            showOpenedCalender: true
        })
    }

    handleClosedClick=()=>{
        this.setState({
            showClosedCalendar: true
        })
    }
    
    onChangeOpened=(date)=>{
        this.props.handleChangeOpened(date, this.props.bug)
        this.setState({
            showOpenedCalender: false
        })
    }

    onChangeClosed=(date)=>{
        this.props.handleChangeClosed(date, this.props.bug)
        this.setState({
            showClosedCalendar: false
        })
    }
    
    handleShowOpened=()=>{
        if (this.state.showOpenedCalender === false){
            return <Moment format="MM/DD/YYYY">{this.props.bug.opened}</Moment>
        } else {
            return <Calendar onChange={this.onChangeOpened}/>
        }
    }

    handleShowClosed=()=>{
        if (this.state.showClosedCalendar === false){
            return <Moment format="MM/DD/YYYY">{this.props.bug.closed}</Moment>
        } else {
            return <Calendar onChange={this.onChangeClosed}/>
        }
    }
    
    handleProjectId=(val)=>{
        // console.log(val)
        this.props.handleChangeProjectId(val, this.props.bug)
        this.setState({showEditProjectId: false})
    }
    handleShowProjectId=()=>{
        if (this.state.showEditProjectId===false){
            return this.findProjectId(this.props.bug)
        } else {
            return <EdiText 
            // showButtonsOnHover 
            value={`${this.findProjectId(this.props.bug)}`}
            type="text"
            hint="Assign bug to project"
            editOnViewClick={true}
            submitOnEnter
            // validationMessage="Please enter a valid Project ID"
            // validation={value => this.props.projects.some(project=> project.id === value)}
            viewProps={{
                style: { width: "85px" }
            }}
            onSave={this.handleProjectId}
            onCancel={this.cancelShowProjectId}
            />
        }      
    }
    cancelShowProjectId=()=>{
        this.setState({showEditProjectId: false})
    }
    handleProjectIdClick=()=>{
        this.setState({showEditProjectId: true})
    }
    handleDescription=(val)=>{
        this.props.handleChangeDescription(val, this.props.bug)
        this.setState({showEditDescription: false})
    }
    handleDescriptionClick=()=>{
        this.setState({showEditDescription: true})
    }
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
                // hideIcons={true}
                />
        }
    }
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
                onCancel={this.cancelShowName}
                />}
    }
    cancelShowName=()=>{
        this.setState({showEditName: false})
    }
    handleName=(val)=>{
        this.props.handleChangeName(val, this.props.bug)
        this.setState({showEditName: false})
    }
    handleNameClick=()=>{
        this.setState({showEditName: true})
    }
    handleSubmittedBy=(val)=>{
        this.props.handleSubmittedBy(val, this.props.bug)
        this.setState({showEditSubmittedBy: false})
    }
    render(){
        return(
            <tr>
                    <td style={{width: ".1em"}}>{this.props.bug.id}</td>
                    <td onClick={()=>this.handleProjectIdClick()}>{this.handleShowProjectId()}</td>
                    <td onClick={()=>this.handleNameClick()}>{this.handleShowName()}</td>
                    <td style={{width: "7em"}}><PriorityDropdown 
                    handleChangePriority={this.props.handleChangePriority} 
                    id={this.props.bug.id} 
                    priority={this.props.bug.priority}/></td>
                    <td><img src={this.props.bug.attachment} alt="oops"/></td>
                    <td><StatusDropdown handleChangeStatus={this.props.handleChangeStatus} id={this.props.bug.id} status={this.props.bug.status}/></td>
                    <td onClick={()=>this.handleDescriptionClick()} style={{width: "50px"}}>{this.handleShowDescription()}</td>
                    <td onClick={()=>this.handleOpenedClick(this.props.bug)}>{this.handleShowOpened()}</td>
                    <td><Moment fromNow>{this.props.bug.opened}</Moment></td>
                    <td onClick={()=>this.handleClosedClick(this.props.bug)}>{this.handleShowClosed()}</td>
                    <td>{this.props.bug.submitted_by}</td>
                    <td>{this.props.bug.location}</td>
                    <td><ol>{this.findUserName(this.props.bug)}</ol></td>
                </tr>
            )

    }
}

export default Project