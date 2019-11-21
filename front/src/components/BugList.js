import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Bugs from './Bug'
import {Context} from './Provider'
class BugList extends React.Component {
  static contextType= Context
  render(){
    console.log(this.context)
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">
                Bug Name
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Priority
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Attachment
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Status
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
              <h3 className="ui center aligned header">
                Assigned To
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header icon">
              Delete Bug
              </h3>
            </th>
          </tr>
  
          {/* {data.map((data) => {
            return <Project data={data} />
          })} */}
          {/* {console.log('bugs' , this.this.props.bugs)} */}
          {this.props.bugs.map((bug,key) => {
            return <Bugs 
            bug={bug} 
            key={key}
            bugs={this.props.bugs}
            // setAssignedUsers={this.props.setAssignedUsers}
            // assignedUsersToBugs={this.props.assignedUsersToBugs}
            user_bugs={this.props.user_bugs}
            users={this.props.users}
            projects={this.props.projects}
            handleChangeStatus={this.props.handleChangeStatus}
              handleChangePriority={this.props.handleChangePriority}
              handleChangeOpened={this.props.handleChangeOpened}
              handleChangeClosed={this.props.handleChangeClosed}
              handleChangeProject={this.props.handleChangeProject}
              handleChangeDescription={this.props.handleChangeDescription}
              handleChangeName={this.props.handleChangeName}
              handleChangeSubmittedBy={this.props.handleChangeSubmittedBy}
              handleChangeLocation={this.props.handleChangeLocation}
              handleChangeAssignedTo={this.props.handleChangeAssignedTo}
              handleDeleteBug={this.props.handleDeleteBug}
              />
          })}
  
        </tbody>
      </table>
    )
  }
}
  
export default BugList