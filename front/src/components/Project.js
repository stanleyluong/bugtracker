import React from 'react'
import StatusDropdown from './StatusDropdown'

class Project extends React.Component {

    // const { bug, project_bugs } = props
    state = {
        selectStatus: false
    }
    findUserName(bug){
        let usernames = []
        let users = []
        // console.log(bug)
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
        // console.log(usernames)
        // console.log(users.toString)
        return (
            users.map((item, key)=>{
                return (<ol>{key+1}. {item}</ol>)
            })
        )
    }
 
    findProjectId=(bug)=>{
        // console.log(bug)
        let id = []
        this.props.project_bugs.forEach(project_bug=>{
            // console.log(bug.id, project_bug.bug_id)
            if (project_bug.bug_id === bug.id){
                id.push(project_bug.project_id)
            }
        }) 
        return id
        
    }

    handleClick=()=>{
        console.log("clicked")
        this.setState({
            selectStatus: !this.state.selectStatus
        })
    }

    showStatus=(status)=>{
        if (this.state.selectStatus === false){
            return status
        } else {
            return <StatusDropdown />
        }

    }

    render(){
        return(
            <tr>
                    <td>{this.props.bug.id}</td>
                    <td>{this.findProjectId(this.props.bug)}</td>
                    <td>{this.props.bug.name}</td>
                    <td>{this.props.bug.priority}</td>
                    <td><img src={this.props.bug.attachment} alt="oops"/></td>
                    <td onClick={()=>this.handleClick()}>{this.showStatus(this.props.bug.status)}</td>
                    <td>{this.props.bug.description}</td>
                    <td>{this.props.bug.opened}</td>
                    <td>{this.props.bug.closed}</td>
                    <td>{this.props.bug.age}</td>
                    <td>{this.props.bug.submitted_by}</td>
                    <td>{this.props.bug.location}</td>
                    <td>{this.findUserName(this.props.bug)}</td>
                </tr>
            )

    }
}

export default Project