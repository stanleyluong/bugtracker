import BugContainer from './BugContainer'
import React, {Component} from 'react'
import { Tab } from 'semantic-ui-react'
import '../css/TabBar.css'
import {Context} from './Provider'

class ProjectBar extends Component{
    static contextType=Context
    state = {}

    handleChange = (e, data) => {
        this.setState(data)
        console.log(data.activeIndex)
    }

    render(){
    const panes = []
    this.context.projects.map((project, key)=>{
        // console.log(typeof(project.title))
        // if(typeof(project.title!=="Object")){
            let bugs = this.context.bugs.filter(bug=>bug.project_id===project.id)
            return panes.push({menuItem: `${project.title}`, render: ()=> <Tab.Pane>
            <BugContainer
            project={project}
            bugs={bugs} 
            />
            
            </Tab.Pane>})
        // } else {
            // return
        // }
    })
        return (            
            <div>
                <Tab  menu={{ secondary: true, className:"wrapped" }} grid={{ paneWidth: 14, tabWidth: 2 }} panes={panes} onTabChange={this.handleChange} 
                />            
            </div>
        )
    }
}
export default ProjectBar

