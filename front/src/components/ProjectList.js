import React from 'react'
import Project from './Project'
import 'semantic-ui-css/semantic.min.css'

const ProjectList = (props) => {

    return (
        <table className="ui celled striped padded table">
        <tbody>
          <tr>
          <th>
              <h3 className="ui center aligned header">
                Project ID
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Project Name
              </h3>
            </th>
            {/* <th>
              <h3 className="ui center aligned header">
                Bugs
              </h3>
            </th> */}
            {/* <th>
              <h3 className="ui center aligned header">
                Assigned To
              </h3>
            </th> */}
          </tr>
          
          {props.projects.map((project) => {
              return <Project 
              project={project}
              key={project.id}
              bugs={props.bugs}
              user_bugs={props.user_bugs}
              users={props.users}
              user_projects={props.user_projects}
              projects={props.projects}
              jwt={props.jwt}
              addBug={props.addBug}
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
              handleProjectTitle={props.handleProjectTitle}
              />
          })}
  
        </tbody>
      </table>
    )
}

export default ProjectList