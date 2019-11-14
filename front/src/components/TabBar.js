import BugContainer from './BugContainer'
import React from 'react'
import { Tab } from 'semantic-ui-react'

const TabExampleBasic = (props) => {

    const panes = []
    console.log(props.project)
    console.log(props.bugs)
     props.projects.forEach((project)=>{
        return panes.push({menuItem: `${project.title}`, render: ()=> <Tab.Pane>
            <BugContainer
            key={project.id}
            project={project}
             jwt={props.jwt}
             bugs={props.bugs.filter(bug=>{
                 if(bug.project_id===project.id){return bug}
             })} 
             user_bugs={props.user_bugs}
             users={props.users}
             projects={props.projects}
             user_projects={props.user_projects}
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
            </Tab.Pane>})
        // console.log(project)
    })

    console.log(props)
    return <Tab panes={panes} props={props}/>
    }
export default TabExampleBasic

