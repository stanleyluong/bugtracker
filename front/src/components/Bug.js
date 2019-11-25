import React from 'react'
import StatusDropdown from './StatusDropdown'
import PriorityDropdown from './PriorityDropdown'
import Calendar from 'react-calendar'
import Moment from 'react-moment'
import EdiText from 'react-editext'
import AssignedToDropdown from './AssignedToDropdown'
import 'semantic-ui-css/semantic.min.css'
import ImageUploader from 'react-images-upload';
import '../css/Project.css'
import ReadMoreReact from 'read-more-react'
import { Context } from './Provider'
class Bug extends React.Component {

    static contextType = Context

    state = {
        selectStatus: false,
        showOpenedCalender: false,
        showClosedCalendar: false,
        showEditName: false,
        showEditProject: false,
        showEditDescription: false,
        showEditSubmittedBy: false,
        showLocation: false,
        pictures: []
    }

    handleOpenedClick=()=>{this.setState({showOpenedCalender: true})}
    onChangeOpened=(date)=>{
        this.context.handleChangeOpened(date, this.props.bug)
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
        this.context.handleChangeClosed(date, this.props.bug)
        this.setState({showClosedCalendar: false })
    }
    handleShowClosed=()=>{
        if (this.state.showClosedCalendar === false){
            if(this.props.bug.closed===""){return ""}
            else{ return <Moment format="MM/DD/YYYY">{this.props.bug.closed}</Moment>}
           
        } else {
            return <Calendar onChange={this.onChangeClosed}/>
        }
    }
    
    handleDescription=(val)=>{
        this.context.handleChangeDescription(val, this.props.bug)
        this.setState({showEditDescription: false})
    }
    handleDescriptionClick=()=>{this.setState({showEditDescription: true})}
    handleShowDescription=()=>{
        if (this.state.showEditDescription===false){
            return <ReadMoreReact text={this.props.bug.description} readMoreText={"See More"}/>
        } else{
            return <EdiText
                value={this.props.bug.description}
                type="textarea"
                hint="Enter description"
                editOnViewClick={true}
                submitOnEnter
                onSave={this.handleDescription}
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
                type="textarea"
                hint="Enter name"
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
        this.context.handleChangeName(val, this.props.bug)
        this.setState({showEditName: false})
    }
    handleNameClick=()=>{this.setState({showEditName: true})}
    
    handleSubmittedBy=(val)=>{
        this.context.handleChangeSubmittedBy(val, this.props.bug)
        this.setState({showEditSubmittedBy: false})
    }
    handleSubmittedByClick=()=>{this.setState({showEditSubmittedBy:true})}
    handleShowSubmittedBy=()=>{
        if(this.state.showEditSubmittedBy===false){
            return this.props.bug.submitted_by
        } else {
            return <EdiText 
            value={this.props.bug.submitted_by}
            type="textarea"
            hint="Enter submitter"
            editOnViewClick={true}
            submitOnEnter
            onSave={this.handleSubmittedBy}
            onCancel={this.handleCancelSubmittedBy}
            />
        }
    }
    handleCancelSubmittedBy=()=>{this.setState({showEditSubmittedBy:false})}
    
    handleLocation=(val)=>{
        this.context.handleChangeLocation(val, this.props.bug)
        this.setState({showLocation: false})
    }
    handleLocationClick=()=>{
        this.setState({showLocation:true})
    }
    handleShowLocation=()=>{
        if(this.state.showLocation===false){
            return this.props.bug.location
        } else {
            return <EdiText 
            value={this.props.bug.location}
            type="textarea"
            hint="Enter location"
            editOnViewClick={true}
            submitOnEnter
            onSave={this.handleLocation}
            onCancel={this.handleCanceLocation}
            />
            
        }
    }
    handleCancelLocation=()=>{this.setState({showLocation:false})}

    findUsers=()=>{
        let assignedUsers = []
        this.props.user_bugs.forEach(user_bug=>{
            if (user_bug.bug_id === this.props.bug.id){
                this.props.users.forEach(user=>{
                    if (user.id === user_bug.user_id){
                        assignedUsers.push(user.id)
                    }
                })
            }
        })
        return assignedUsers
    }

    render(){
        return(
            <tr>
                <td style={{cursor:"pointer"}}onClick={()=>this.handleNameClick()}>{this.handleShowName()}</td>
                <td ><PriorityDropdown handleChangePriority={this.props.handleChangePriority} id={this.props.bug.id} priority={this.props.bug.priority}/></td>
                <td ><div className="grandparent"><ImageUploader  withLabel={false} withPreview={true} withIcon={false} buttonText='Upload' onChange={this.onDrop} imgExtension={['.jpg', '.gif', '.png']} maxFileSize={5242880}/></div></td>
                <td ><StatusDropdown handleChangeStatus={this.props.handleChangeStatus} id={this.props.bug.id} status={this.props.bug.status}/></td>
                <td style={{minWidth:"100px"}} onClick={()=>this.handleDescriptionClick()} >{this.handleShowDescription()}</td>
                <td style={{cursor:"pointer"}} onClick={()=>this.handleOpenedClick()}>{this.handleShowOpened()}</td>
                <td ><Moment fromNow>{this.props.bug.opened}</Moment></td>
                <td style={{cursor:"pointer"}} onClick={()=>this.handleClosedClick()}>{this.handleShowClosed()}</td>
                <td style={{cursor:"pointer"}} onClick={()=>this.handleSubmittedByClick()}>{this.handleShowSubmittedBy()}</td>
                <td style={{cursor:"pointer"}} onClick={()=>this.handleLocationClick()}>{this.handleShowLocation()}</td>
                <td width="200px" ><AssignedToDropdown bug={this.props.bug} /></td>
                <td style={{cursor:"pointer"}}><img onClick={()=>this.context.handleDeleteBug(this.props.bug)} style={{width: "30px"}}src="https://image.flaticon.com/icons/svg/54/54195.svg" alt="oops"/></td>
            </tr>
        )
    }
}
export default Bug