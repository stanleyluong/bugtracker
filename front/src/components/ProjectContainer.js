import ProjectList from './ProjectList'
import React from 'react'
import BugList from './BugList'
import ProjectSearch from './ProjectSearch'
import 'semantic-ui-css/semantic.min.css'
import '../css/BugContainer.css'
import NewProject from './NewProject'
import TabBar from './TabBar'
import { Tab } from 'semantic-ui-react'
class BugContainer extends React.Component{
    state = {
        projects: [],
        bugs: [],
        users: [],
        user_bugs: [],
        user_projects: [],
        searchText: ""
      }
    
    componentDidMount(){
        Promise.all([
            fetch("http://localhost:3000/projects",{
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json',
                    'Authorization':`Bearer ${this.props.jwt}`
                }
            }),
            fetch("http://localhost:3000/bugs",{
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json',
                    'Authorization':`Bearer ${this.props.jwt}`
                }
            }),
            fetch("http://localhost:3000/users",{
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json',
                    'Authorization':`Bearer ${this.props.jwt}`
                }
            }),
            fetch("http://localhost:3000/user_bugs",{
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json',
                    'Authorization':`Bearer ${this.props.jwt}`
                }
            }),
            fetch("http://localhost:3000/user_projects",{
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json',
                    'Authorization':`Bearer ${this.props.jwt}`
                }
            })
        ])
        .then(([res1,res2,res3,res4,res5])=>
        Promise.all([res1.json(),res2.json(),res3.json(),res4.json(),res5.json()])
        ).then(([res1,res2,res3,res4,res5])=>{
            console.log(res1)
            this.setState({
                projects: res1,
                bugs: res2,
                users: res3,
                user_bugs: res4,
                user_projects: res5
            }, ()=>console.log(this.state))
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
        console.log('in project container finally wtf', e, data, id)
        let option = e.target.innerText
        let currentbug = this.state.bugs.filter(bug=>{return bug.id === id})
        currentbug.status = data.value
        let url = `http://localhost:3000/bugs/${id}`
        fetch(url, {
            method: 'PATCH', 
            body: JSON.stringify({
                status: option
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${this.props.jwt}`
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
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${this.props.jwt}`
            }
        });
        // console.log(this.state.bugs)
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
                'Content-Type':'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${this.props.jwt}`
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
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${this.props.jwt}`
            }
        })
    }

    handleChangeProject=(val, bug)=>{
        bug.project = val
        fetch(`http://localhost:3000/bugs/${bug.id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                project: val
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${this.props.jwt}`
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
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${this.props.jwt}`
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
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${this.props.jwt}`
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
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${this.props.jwt}`
            }
        })
    }

    handleChangeLocation=(val, bug)=>{
        console.log(bug)
        bug.location=val
        fetch(`http://localhost:3000/bugs/${bug.id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                location: val
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${this.props.jwt}`
            }
        })
    }
    handleChangeAssignedTo=(val, bug)=>{
        let userbugbugidsthatarethesameasbugbugid = []
        let usersthatareassociatedwithbug = []
        this.state.user_bugs.forEach(user_bug=>{
            if (user_bug.bug_id === bug.id){
                userbugbugidsthatarethesameasbugbugid.push(user_bug.user_id)
                usersthatareassociatedwithbug.push(user_bug)
            }
        })
        console.log(val.length)
        console.log(val[val.length-1])
        console.log(usersthatareassociatedwithbug)
        console.log(bug.id)
        if (val.length > usersthatareassociatedwithbug.length){
            console.log("insideif")
            fetch (`http://localhost:3000/user_bugs`,{
                method: 'POST',
                body: JSON.stringify({
                    user_id: val[val.length-1],
                    bug_id: bug.id
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json',
                    'Authorization':`Bearer ${this.props.jwt}`
                }
            })
        }

        if(val.length < usersthatareassociatedwithbug.length){
            this.state.user_bugs.forEach(user_bug=>{
                if(user_bug.bug_id===bug.id && !val.includes(user_bug.user_id)){
                     fetch (`http://localhost:3000/user_bugs/${user_bug.id}`,{
                                    method: 'DELETE',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Accept':'application/json',
                                        'Authorization':`Bearer ${this.props.jwt}`
                                    }
                                }).then(res=>console.log(res))
                }
            })
        }

    }

    addBug=(bug)=>{
       console.log(bug)
        fetch('http://localhost:3000/bugs',{
            method:'POST',
            body: JSON.stringify({
                bug:
                {

                name: bug.name,
                submitted_by: bug.submitted_by,
                description: bug.description,
                project_id: bug.project_id,
                opened: bug.opened
            }
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${this.props.jwt}`
            }
        }).then(response=>response.json())
        .then(response=>this.setState({
            bugs: [response, ...this.state.bugs]
        }),()=>{console.log(this.state.bugs)})
    }

    addProject=(project)=>{
        console.log(project)
            fetch('http://localhost:3000/projects',{
                method:'POST',
                body: JSON.stringify({
                    project:{
                      title: project.title
                    }
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json',
                    'Authorization':`Bearer ${this.state.jwt}`
                }
            }).then(response=>response.json())
            .then(response=>this.setState({
                projects: [response, ...this.state.projects]
            }))
      }

    

    render(){
        const re = new RegExp(this.state.searchText, "i");
        // const bugs = this.state.bugs.filter((bug) => {
        //     return re.test(bug.id) 
        //     || re.test(bug.name)
        //     || re.test(bug.priority)
        //     || re.test(bug.project)
        //     || re.test(bug.status)
        //     || re.test(bug.description)
        //     || re.test(bug.opened)
        //     || re.test(bug.closed)
        //     || re.test(bug.age)
        //     || re.test(bug.submitted_by)
        //     || re.test(bug.location)
        // })
        const projects = this.state.projects.filter((project)=>{
            return re.test(project.title)
        })

        // const users = this.state.users.filter((user)=>{
        //     return re.test(user.username) 
        // })
        
        return(
            <div className="project-container-div">
                <ProjectSearch onChange={this.handleChange}/>
                {/* <NewBug addBug={this.addBug} jwt={this.props.jwt}/> */}
                <NewProject jwt={this.state.jwt} addProject={this.addProject}/> 
                {/* <TabBar projects={this.state.projects}/> */}
                <TabBar
                jwt={this.state.jwt}
                bugs={this.state.bugs} 
                user_bugs={this.state.user_bugs}
                users={this.state.users}
                projects={projects}
                user_projects={this.state.user_projects}
                addBug={this.addBug}
                handleChangeStatus={this.handleChangeStatus}
                handleChangePriority={this.handleChangePriority}
                handleChangeOpened={this.handleChangeOpened}
                handleChangeClosed={this.handleChangeClosed}
                handleChangeProject={this.handleChangeProject}
                handleChangeDescription={this.handleChangeDescription}
                handleChangeName={this.handleChangeName}
                handleChangeSubmittedBy={this.handleChangeSubmittedBy}
                handleChangeLocation={this.handleChangeLocation}
                handleChangeAssignedTo={this.handleChangeAssignedTo}
                handleProjectTitle={this.handleProjectTitle}
                />
            </div>
        )
    }
}

export default BugContainer