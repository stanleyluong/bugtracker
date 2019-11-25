import BugContainer from './BugContainer'
import React, {Component} from 'react'
import { Tab } from 'semantic-ui-react'
import '../css/TabBar.css'
import {Context} from './Provider'

class ProjectBar extends Component{
    static contextType=Context
    render(){
    const panes = []
    this.props.projects.map((project)=>{
        console.log(this.context.bugs)
        let bugs = this.context.bugs.filter(bug=>bug.project_id===project.id)
        return panes.push({menuItem: `${project.title}`, render: ()=> <Tab.Pane>
            <BugContainer
            key={project.id}
            project={project}
            bugs={bugs} 
            />
            </Tab.Pane>})
    })

        return (            
            <div>
                <Tab  menu={{  tabular: true ,pointing: true, className:"wrapped" }} panes={panes} props={this.props}/>            
            </div>
        )
    }
}
export default ProjectBar

