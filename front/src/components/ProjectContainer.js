import React from 'react'
import ProjectList from './ProjectList'
import Search from './Search'
class ProjectContainer extends React.Component{

    state = {
        projects: [],
        bugs: [],
        users: [],
        user_bugs: [],
        user_projects: [],
        project_bugs: [],
        searchText: ""
      }
    
    componentDidMount(){
        let dataArray = ['projects', 'bugs', 'users', 'user_bugs','user_projects', 'project_bugs']
        dataArray.forEach(data=>{
            let URL = "http://localhost:3000/"+data
            fetch(URL)
            .then(response=>response.json())
            .then(response=>this.setState({
            [data]: response
            }))
        })
    }

    handleChange = (searchText) => {
        this.setState({
          searchText
        })
      }

    handleClick=(project)=>{
        this.setState({
            showOneProjectInfo: [...this.state.showOneProjectInfo, project]
        })
 
    }

    // showProjects=()=>{
    //     return this.props.projects.map((project,index)=>{
    //      return   <button onClick={()=>this.handleClick(project)}>{project.title}</button>
    //     })
    // }

    // showProject=()=>{
    //     return this.state.showOneProjectInfo.map((project,index)=>{
    //         return <Project project={project} key={index}/>        
    //     })
    // }   

    render(){
        const re = new RegExp(this.state.searchText, "i");
        const bugs = this.state.bugs.filter((bug) => {
            return re.test(bug.id) 
            || re.test(bug.project_id)
            || re.test(bug.name)
            || re.test(bug.priority)
            || re.test(bug.status)
            || re.test(bug.description)
            || re.test(bug.opened)
            || re.test(bug.closed)
            || re.test(bug.age)
            || re.test(bug.submitted_by)
            || re.test(bug.location)
            || re.test(bug.assigned_to)
        })
        const users = this.state.users.filter((user)=>{
            return re.test(user.username) || re.test(user.role)
        })
        
        return(
            <div>
                <Search onChange={this.handleChange}/>
                <ProjectList 
                bugs={bugs} 
                user_bugs={this.state.user_bugs}
                users={users}
                project_bugs={this.state.project_bugs}
                />
            </div>
        )
    }
}

export default ProjectContainer