import React, { Component } from 'react'
import Bug from './Bug'
import {Context} from './Provider'
class BugList extends Component {
  static contextType= Context
  
  sortById=(bugs)=>{
    console.log('sort', bugs)
    bugs.sort(function(a,b){return b-a})
  }
  
  render(){
    let bugs = this.props.bugs
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th onClick={this.sortById(bugs)} >
              <h3 className="ui center aligned header">
                ID & Name
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Priority
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Attachments
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Status
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Assigned To
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Description
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Opened
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Age
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Closed
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Submitted By
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Location
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header icon">
              Delete Bug
              </h3>
            </th>
          </tr>
          {this.props.bugs.map((bug,key) => {
            return <Bug
            bug={bug} 
            key={key}
              />
          })}
        </tbody>
      </table>
    )
  }
}
  
export default BugList