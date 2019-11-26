import React, { Component } from 'react'
import BugList from './BugList'
import {Context} from './Provider'

class AssignedBugs extends Component{
    static contextType=Context
    
    // state={theBugs: []}

    // componentDidMount(){this.setState({theBugs: this.listBugs()})}

    
    // listBugs=()=>{
        //     let myBugs=[]
        //     this.context.user_bugs.forEach(user_bug=>{
            //         if(user_bug.user_id === this.context.userData.user.id){
                //             this.context.bugs.forEach(bug=>{
    //                 if(user_bug.bug_id === bug.id){
    //                 myBugs.push(bug)
    //                 }
    //             })
    //         }
    //     }) 
    //     return myBugs
    // }
    
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
        let handleGreeting=()=>{
            if(myBugs.length===0){
                return <h1>Hello {`${this.context.userData.user.username}`}. You have no assigned bugs!</h1>
            } else if(myBugs.length===1){
            return <h1>Hello {`${this.context.userData.user.username}`}. You have {`${myBugs.length}`} assigned bug!</h1>
            } else {
                return <h1>Hello {`${this.context.userData.user.username}`}. You have {`${myBugs.length}`} assigned bugs!</h1>
            }
        }
        return(<div>
                {handleGreeting()}
                <BugList 
                bugs={myBugs}
                jwt={this.props.jwt}
                />
        </div>
        )
    }
}

export default AssignedBugs