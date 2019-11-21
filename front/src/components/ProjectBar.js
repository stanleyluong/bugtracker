import BugContainer from './BugContainer'
import React from 'react'
import { Tab } from 'semantic-ui-react'
import '../css/TabBar.css'
const TabExampleBasic = (props) => {
    const panes = []
    props.projects.map((project)=>{
        let bugs = props.bugs.filter(bug=>bug.project_id===project.id)
        return panes.push({menuItem: `${project.title}`, render: ()=> <Tab.Pane>
            <BugContainer
            // key={project.id}
            project={project}
            jwt={props.jwt}
            bugs={bugs} 
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
            handleDeleteBug={props.handleDeleteBug}
            />
            </Tab.Pane>})
    })
    return (
        <div>
            <Tab  menu={{  tabular: true ,pointing: true, className:"wrapped" }} panes={panes} props={props}/>
            
        </div>
    )
    }
export default TabExampleBasic

