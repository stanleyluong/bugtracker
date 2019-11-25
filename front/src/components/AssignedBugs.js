import React, { Component } from 'react'
import BugList from './BugList'
import {Context} from './Provider'

class AssignedBugs extends Component{
    static contextType=Context
    state={theBugs: []}

    componentDidMount(){this.setState({theBugs: this.listBugs()})}

    handleGreeting=()=>{
        if(this.listBugs().length===0){
            return <h1>Hello {`${this.context.userData.user.username}`}. You have no assigned bugs!</h1>
        } else if(this.listBugs().length===1){
        return <h1>Hello {`${this.context.userData.user.username}`}. You have {`${this.listBugs().length}`} assigned bug!</h1>
        } else {
            return <h1>Hello {`${this.context.userData.user.username}`}. You have {`${this.listBugs().length}`} assigned bugs!</h1>
        }
    }

    listBugs=()=>{
        let myBugs=[]
        this.context.user_bugs.forEach(user_bug=>{
            if(user_bug.user_id === this.context.userData.user.id){
                this.context.bugs.forEach(bug=>{
                    if(user_bug.bug_id === bug.id){
                    myBugs.push(bug)
                    }
                })
            }
        }) 
        return myBugs
    }

    render(){
        return(<div>
                {this.handleGreeting()}
                <BugList 
                bugs={this.listBugs()}
                jwt={this.props.jwt}
                />
        </div>
        )
    }
}

export default AssignedBugs