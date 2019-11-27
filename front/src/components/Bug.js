import React, { Component } from 'react'
import StatusDropdown from './StatusDropdown'
import PriorityDropdown from './PriorityDropdown'
import Calendar from 'react-calendar'
import Moment from 'react-moment'
import EdiText from 'react-editext'
import AssignedToDropdown from './AssignedToDropdown'
import ImageUploader from 'react-images-upload';
import '../css/Project.css'
import ReadMoreReact from 'read-more-react'
import { Context } from './Provider'
import { Icon } from 'semantic-ui-react'
class Bug extends Component {
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
    handleName=(val)=>{
        this.context.handleChangeName(val, this.props.bug)
        this.setState({showEditName: false})
    }
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
    handleNameClick=()=>{this.setState({showEditName: true})}
    handleCancelShowName=()=>{this.setState({showEditName: false})}
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
            if(this.props.bug.closed===null){return ""}
            else{ return <Moment format="MM/DD/YYYY">{this.props.bug.closed}</Moment>}
           
        } else {
            return <Calendar onChange={this.onChangeClosed}/>
        }
    }
    handleDescription=(val)=>{
        this.context.handleChangeDescription(val, this.props.bug)
        this.setState({showEditDescription: false})
    }
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
    handleDescriptionClick=()=>{this.setState({showEditDescription: true})}
    handleCancelShowDescription=()=>{this.setState({showEditDescription:false})}
    
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
    onDrop=(picture)=>{
        console.log(picture[0])
        // this.setState({
        //     pictures: this.state.pictures.concat(picture[0]),
        // });
        let formData = new FormData()
        let clientId = '21b623c50654eda'
        let link
        formData.append("image", picture[0])
        fetch(`https://api.imgur.com/3/image`,{
            method: 'POST',
            headers:{
                'Authorization': 'Client-ID '+ clientId,
                'Accept':'application/json'
            },
            mimeType: 'multipart/form-data',
            body: formData
        }).then(response=>response.json())
        // .then(success=>console.log(success.data.link))
        .then(success=> this.context.handleAddAttachment(this.state.pictures.concat(success.data.link),this.props.bug.id))
        // console.log(link)
    }
    render(){
        return(
            <tr>
                <td style={{cursor:"pointer"}}onClick={()=>this.handleNameClick()}>{this.handleShowName()}</td>
                <td ><PriorityDropdown id={this.props.bug.id} priority={this.props.bug.priority}/></td>
                <td ><div className="grandparent"><ImageUploader withLabel={false} withPreview={true} withIcon={false} buttonText='Upload' onChange={this.onDrop} imgExtension={['.jpg', '.jpeg', '.gif', '.png']} maxFileSize={20000000}/></div></td>
                <td ><StatusDropdown handleChangeStatus={this.props.handleChangeStatus} id={this.props.bug.id} status={this.props.bug.status}/></td>
                <td width="200px" ><AssignedToDropdown bug={this.props.bug} /></td>
                <td style={{minWidth:"100px", cursor:"pointer"}} onClick={()=>this.handleDescriptionClick()} >{this.handleShowDescription()}</td>
                <td style={{cursor:"pointer"}} onClick={()=>this.handleOpenedClick()}>{this.handleShowOpened()}</td>
                <td ><Moment fromNow>{this.props.bug.opened}</Moment></td>
                <td style={{cursor:"pointer"}} onClick={()=>this.handleClosedClick()}>{this.handleShowClosed()}</td>
                <td style={{cursor:"pointer"}} onClick={()=>this.handleSubmittedByClick()}>{this.handleShowSubmittedBy()}</td>
                <td style={{cursor:"pointer"}} onClick={()=>this.handleLocationClick()}>{this.handleShowLocation()}</td>
                <td style={{cursor:"pointer"}}><Icon onClick={()=>this.context.handleDeleteBug(this.props.bug)} style={{transform: "scale(2)"}} name="trash alternate"/></td>
            </tr>
        )
    }
}
export default Bug