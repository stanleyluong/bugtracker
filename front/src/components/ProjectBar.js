import BugContainer from './BugContainer'
import React, {Component} from 'react'
import { Tab } from 'semantic-ui-react'
import '../css/TabBar.css'
import {Context} from './Provider'

class ProjectBar extends Component{
    static contextType=Context
    render(){
    const panes = []
    this.context.projects.map((project)=>{
        console.log(typeof(project.title))
        if(typeof(project.title!=="Object")){
            let bugs = this.context.bugs.filter(bug=>bug.project_id===project.id)
            return panes.push({menuItem: `${project.title}`, render: ()=> <Tab.Pane>
            <BugContainer
            key={project.id}
            project={project}
            bugs={bugs} 
            />
            </Tab.Pane>})
        } else {
            return
        }
    })
        return (            
            <div>
                <Tab  menu={{  pointing: true, className:"wrapped" }} panes={panes} 
                />            
            </div>
        )
    }
}
export default ProjectBar

