import React,{Component} from 'react';
import {Context} from './Provider'
import User from './User'
class TeamMembers extends Component{
    
    static contextType=Context
    
    render(){
        // let myBugs=[]
        // this.context.user_bugs.forEach(user_bug=>{
        //     if(user_bug.user_id === this.context.userData.user.id){
        //         this.context.bugs.forEach(bug=>{
        //             if(user_bug.bug_id === bug.id){
        //                 myBugs.push(bug)
        //             }
        //         })
        //     }
        // }) 
        // console.log("myBugs", myBugs)
        return(
            <table className="ui celled striped padded table">
        <tbody>
          <tr>
          <th>
              <h3 className="ui center aligned header">
                ID
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Username
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Firstname
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Lastname
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                E-Mail
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Job
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Image
              </h3>
            </th>
            
            
          </tr>
          {this.context.users.map((user,key) => {
            return <User
            user={user} 
            key={key}
              />
          })}
        </tbody>
      </table>
        // <div>
        //         <BugList 
        //         bugs={myBugs}
        //         jwt={this.props.jwt}
        //         />
        // </div>
        )
    }
}

export default TeamMembers