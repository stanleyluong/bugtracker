import React, { Component } from 'react'
import AssignedBugList from './AssignedBugList'
import {Context} from './Provider'

class AssignedBugs extends Component{
    
    static contextType=Context
    
    render(){
       
        // this.context.handleSetMyBugs(myBugs)
        // console.log("myBugs", this.context.myBugs) 
        return(<div>
                <AssignedBugList />
        </div>
        )
    }
}

export default AssignedBugs