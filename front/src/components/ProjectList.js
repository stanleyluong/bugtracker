import React from 'react'
import Project from './Project'
import 'semantic-ui-css/semantic.min.css'

const ProjectList = (props) => {
    const { bugs, user_bugs, users, project_bugs } = props

    return (
        <table className="ui celled striped padded table">
        <tbody>
          <tr>
          <th>
              <h3 className="ui center aligned header">
                Bug ID
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Project Name
              </h3>
            </th>
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
          
          {bugs.map((bug,key) => {
              return <Project 
              bug={bug} 
              key={key} 
              user_bugs={user_bugs}
              users={users}
              project_bugs={project_bugs}
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

export default ProjectList