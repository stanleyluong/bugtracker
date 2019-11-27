import React, { Component } from 'react'
import BugList from './BugList'
import {Context} from './Provider'

class AssignedBugs extends Component{
    
    static contextType=Context
    
    render(){
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
        console.log("myBugs", myBugs)
        return(<div>
                <BugList 
                bugs={myBugs}
                jwt={this.props.jwt}
                />
        </div>
        )
    }
}

export default AssignedBugs