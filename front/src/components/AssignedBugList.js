import React, { Component } from 'react'
import Bug from './Bug'
import {Context} from './Provider'
class AssignedBugList extends Component {
  static contextType= Context
  constructor(props){
    super(props)
    this.state = { bugs: [] }
    this.onSort = this.onSort.bind(this)
  }

  componentDidMount(){
      console.log(this.context.myBugs)
    this.setState({
      bugs: this.context.myBugs
    })
  }

  onSort=(event, sortKey)=>{
    // console.log(this.context.myBugs)
   let bugs = this.context.myBugs
   bugs.sort((a,b)=> {
    // if(a[sortKey]===null){return a[sortKey]=-1}
    // if(b[sortKey]===null){return a[sortKey]=-1} 
     return a[sortKey].localeCompare(b[sortKey])
    })
//    this.setState({bugs})
    this.context.handleSetMyBugs(bugs)
  }
  
  render(){
    let newbugs = this.state.bugs
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th style={{cursor:"pointer"}} onClick={e=>this.onSort(e, 'name')} >
              <h3 className="ui center aligned header">
                ID# Name
              </h3>
            </th>
            <th style={{cursor:"pointer"}} onClick={e=>this.onSort(e, 'priority')}>
              <h3 className="ui center aligned header">
                Priority
              </h3>
            </th>
            <th >
              <h3 className="ui center aligned header">
                Attachments
              </h3>
            </th>
            <th style={{cursor:"pointer"}} onClick={e=>this.onSort(e, 'status')}> 
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
              <h3 style={{cursor:"pointer"}} onClick={e=>this.onSort(e, 'description')} className="ui center aligned header">
                Description
              </h3>
            </th>
            <th>
              <h3 style={{cursor:"pointer"}} onClick={e=>this.onSort(e, 'opened')} className="ui center aligned header">
                Opened
              </h3>
            </th>
            <th>
              <h3 style={{cursor:"pointer"}} onClick={e=>this.onSort(e, 'age')} className="ui center aligned header">
                Age
              </h3>
            </th>
            <th>
              <h3 style={{cursor:"pointer"}} onClick={e=>this.onSort(e, 'closed')} className="ui center aligned header">
                Closed
              </h3>
            </th>
            <th>
              <h3 style={{cursor:"pointer"}} onClick={e=>this.onSort(e, 'submitted_by')} className="ui center aligned header">
                Submitted By
              </h3>
            </th>
            <th>
              <h3 style={{cursor:"pointer"}} onClick={e=>this.onSort(e, 'location')} className="ui center aligned header">
                Location
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header icon">
              Delete Bug
              </h3>
            </th>
          </tr>
          {newbugs.map((bug,index) => {
            return <Bug
            bug={bug} 
            key={index}
              />
          })}
        </tbody>
      </table>
    )
  }
}
  
export default AssignedBugList