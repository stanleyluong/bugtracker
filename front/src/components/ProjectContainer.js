import React from 'react'
import ProjectList from './ProjectList'
import Search from './Search'
import 'semantic-ui-css/semantic.min.css'

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
    handleChangeStatus=(e, data, id)=>{
        let option = e.target.innerText
        let currentbug = this.state.bugs.filter(bug=>{return bug.id === id})
        // console.log(currentbug)
        currentbug.status = data.value
        // console.log(id)
        // console.log(data.value)
        let url = `http://localhost:3000/bugs/${id}`
        fetch(url, {
            method: 'PATCH', 
            body: JSON.stringify({
            status: option
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        });
    }
    
    handleChangePriority=(e, data, id)=>{
        let option = e.target.innerText
        let currentbug = this.state.bugs.filter(bug=>{return bug.id === id})
        currentbug.status = data.value
        let url = `http://localhost:3000/bugs/${id}`
        fetch(url, {
            method: 'PATCH', 
            body: JSON.stringify({
            priority: option
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        });
    }

    handleChangeOpened=(date, bug)=>{
        console.log(date, bug)
        // return <Calendar />
        bug.opened = date
        fetch(`http://localhost:3000/bugs/${bug.id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                opened: date
            }),
            headers: {
                'Content-Type':'application/json'
            }
        })
    }

    handleChangeClosed=(date, bug)=>{
        bug.closed = date
        fetch(`http://localhost:3000/bugs/${bug.id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                closed: date
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    handleChangeProjectId=(val, bug)=>{
        let projectBug
        this.state.project_bugs.forEach(project_bug=>{
            if (project_bug.bug_id === bug.id){
                projectBug = project_bug
                project_bug.project_id = val
            }
        })
        val = parseInt(val)
        fetch(`http://localhost:3000/project_bugs/${projectBug.id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                project_id: val
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        } )
    }

    handleChangeDescription=(val, bug)=>{
        bug.description=val
        fetch(`http://localhost:3000/bugs/${bug.id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                description: val
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })  
    }

    handleChangeName=(val, bug)=>{
        bug.name=val
        fetch(`http://localhost:3000/bugs/${bug.id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                name: val
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    handleChangeSubmittedBy=(val, bug)=>{
        bug.submitted_by=val
        fetch(`http://localhost:3000/bugs/${bug.id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                submitted_by: val
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    handleChangeLocation=(val, bug)=>{
        bug.location=val
        fetch(`http://localhost:3000/bugs/${bug.id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                location: val
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    handleChangeAssignedTo=(val, bug)=>{
        console.log('val', val)
        console.log('bug',bug)
        let usersassignedtobug=[]
        this.state.users.forEach(user=>{
            if(val.includes(user.id)){
                
            }
        })

    }

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
                projects={this.state.projects}
                project_bugs={this.state.project_bugs}
                handleChangeStatus={this.handleChangeStatus}
                handleChangePriority={this.handleChangePriority}
                handleChangeOpened={this.handleChangeOpened}
                handleChangeClosed={this.handleChangeClosed}
                handleChangeProjectId={this.handleChangeProjectId}
                handleChangeDescription={this.handleChangeDescription}
                handleChangeName={this.handleChangeName}
                handleChangeSubmittedBy={this.handleChangeSubmittedBy}
                handleChangeLocation={this.handleChangeLocation}
                handleChangeAssignedTo={this.handleChangeAssignedTo}
                />
            </div>
        )
    }
}

export default ProjectContainer