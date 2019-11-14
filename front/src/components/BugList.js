import React from 'react'
import Project from './Project'
import 'semantic-ui-css/semantic.min.css'
import Bugs from './Bugs'
const BugList = (props) => {

    return (
        <table className="ui celled striped padded table">
        <tbody>
          <tr>
          <th>
              <h3 className="ui center aligned header">
                Bug ID
              </h3>
            </th>
            {/* <th>
              <h3 className="ui center aligned header">
                Project Name
              </h3>
            </th> */}
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
          </tr>
  
          {/* {data.map((data) => {
            return <Project data={data} />
          })} */}
          
          {props.bugs.map((bug,key) => {
              return <Bugs 
              bug={bug} 
              key={key}
              bugs={props.bugs}
              // setAssignedUsers={props.setAssignedUsers}
              // assignedUsersToBugs={props.assignedUsersToBugs}
              user_bugs={props.user_bugs}
              users={props.users}
              projects={props.projects}
              handleChangeStatus={props.handleChangeStatus}
              handleChangePriority={props.handleChangePriority}
              handleChangeOpened={props.handleChangeOpened}
              handleChangeClosed={props.handleChangeClosed}
              handleChangeProject={props.handleChangeProject}
              handleChangeDescription={props.handleChangeDescription}
              handleChangeName={props.handleChangeName}
              handleChangeSubmittedBy={props.handleChangeSubmittedBy}
              handleChangeLocation={props.handleChangeLocation}
              handleChangeAssignedTo={props.handleChangeAssignedTo}
              />
          })}
  
        </tbody>
      </table>
    )
}

export default BugList