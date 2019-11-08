import React from 'react'
import ProjectList from './ProjectList'
import Search from './Search'
import 'semantic-ui-css/semantic.min.css'
import '../css/ProjectContainer.css'

class ProjectContainer extends React.Component{

    state = {
        projects: [],
        bugs: [],
        users: [],
        user_bugs: [],
        user_projects: [],
        searchText: ""
      }
    
    // componentDidMount(){
    //     let dataArray = ['projects', 'bugs', 'users', 'user_bugs','user_projects']
    //     Promise.all([
    //         dataArray.forEach(data=>{
    //         let URL = "http://localhost:3000/"+data
    //         fetch(URL)
    //         .then(response=>response.json())
    //         .then(response=>this.setState({
    //         [data]: response
    //         }))
            
    //     }
    //     )])
        
    // }
    
    componentDidMount(){
        Promise.all([
            fetch("http://localhost:3000/projects"),
            fetch("http://localhost:3000/bugs"),
            fetch("http://localhost:3000/users"),
            fetch("http://localhost:3000/user_bugs"),
            fetch("http://localhost:3000/user_projects")
        ]).then(([res1,res2,res3,res4,res5])=>
        Promise.all([res1.json(),res2.json(),res3.json(),res4.json(),res5.json()])
        ).then(([res1,res2,res3,res4,res5])=>{
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

    handleChangeProject=(val, bug)=>{
        // let projectBug
        // this.state.project_bugs.forEach(project_bug=>{
        //     if (project_bug.bug_id === bug.id){
        //         projectBug = project_bug
        //         project_bug.project_id = val
        //     }
        // })
        // val = parseInt(val)
        bug.project = val
        fetch(`http://localhost:3000/bugs/${bug.id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                project: val
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
    //sending back an array of userids as val and associated bug. must assign users to this bug. must find userbugs with same bug id.adding an assignedto will create a userbug. deleting an assignedto will delete a userbug.
    // handleChangeAssignedTo=(val, bug)=>{
    //     console.log('val', val)
    //     console.log('bug',bug)
    //     this.props.user_bugs.forEach(user_bug=>{
    //         if(val.includes(user_bug.user_id)===false){

    //         }
    handleChangeAssignedTo=(val, bug)=>{
        
        //for all userbugs that have same bug id as bug. gather all their user_ids. if that userid is not in value post a new userbug with bug_id=bug.id and user_id=val
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
        // debugger
        // console.log(val.last())
        // console.log(val[usersthatar])
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
                    'Content-Type': 'application/json'
                }
            })
        }

        if(val.length < usersthatareassociatedwithbug.length){
            this.state.user_bugs.forEach(user_bug=>{
                if(user_bug.bug_id===bug.id && !val.includes(user_bug.user_id)){
                     fetch (`http://localhost:3000/user_bugs/${user_bug.id}`,{
                                    method: 'DELETE',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                }).then(res=>console.log(res))
                }
            })
        }

    }
        // if(val.length < usersthatareassociatedwithbug.length){
            // find missing value from array and delete from backend
            // this.state.user_bugs.forEach(user_bug=> {
            //             if(user_bug.bug_id===bug.id){
            //                 if(!val.includes(user_bug.user_id)){
                                // fetch (`http://localhost:3000/user_bug/${user_bug.id}`,{
                                //     method: 'DELETE',
                                //     headers: {
                                //         'Content-Type': 'application/json'
                                //     }
                                // }).then(res=>console.log(res))
            //                     }
        
            //             }
            //         })
        // }
        
        // console.log(userbugbugidsthatarethesameasbugbugid)
        // console.log(usersthatareassociatedwithbug)
        // // val.forEach(val=>{this.state.user_bugs.forEach(user_bug=>{if(user_bug)})})
        // if (val.length > usersthatareassociatedwithbug){
        //     val.forEach(val=>{
        //         console.log("value within handleChange", val)
        //         console.log("boolean for the conditional", !userbugbugidsthatarethesameasbugbugid.includes(val))
        //         if(!userbugbugidsthatarethesameasbugbugid.includes(val)){
                //     fetch (`http://localhost:3000/user_bugs`,{
                //         method: 'POST',
                //         body: JSON.stringify({
                //             user_id: val,
                //             bug_id: bug.id
                //         }),
                //         headers: {
                //             'Content-Type': 'application/json'
                //         }
                // }
                // )}
        //     })
        // } else if (val.length < this.state.user_bugs) {
        //     this.state.user_bugs.forEach(user_bug=> {
        //         if(user_bug.bug_id===bug.id){
        //             if(!val.includes(user_bug.user_id)){
        //                 fetch (`http://localhost:3000/user_bug/${user_bug.id}`,{
        //                     method: 'DELETE',
        //                     headers: {
        //                         'Content-Type': 'application/json'
        //                     }
        //                 }).then(res=>console.log(res))
        //             }
                    
        //         }
        //     })
        // }
        //if userbug is not included in  new set then deletedestroy it. how does it know if its in new set? how do i get the value of the userbug to be destroyed? this is so fucking hard. fuck my life. fuck my brain hurts. this is fun but so fucking hard. god dammit. i dontk now what to do. i am frustrated. i wish i had help. but i want to solve this by myself. fuck fuck fuck fuck fuck.
        
        //DIF... when val comes back with less than before. look through all userbugs that have that bug id. 
        // userbugsthathavesamebugidasbug.forEach(user_bug=>{
        //     if(!val.includes(user_bug.id)){
        //         fetch(`http://localhost:3000/user_bugs/${user_bug.id}`,{
        //             method: 'DELETE',
        //             body: JSON.stringify({
                        
        //             })
        //         })
        //     }
        // })
        // this.state.user_bugs.forEach(user_bug=>{
        //     if(val.includes(user_bug.user_id)){
        //         console.log(user_bug)
        //     }
        // })
        // val.forEach(val=>{
        //     this.state.user_bugs.forEach(user_bug=>{
        //         if (user_bug.user_id === val && bug.i)
        //     })
        // })
    // }
    // setAssignedUsers=(userIDs)=>{
    //     this.setState({assignedUsersToBug:userIDs})
    // }

    //     val.forEach(v=>{fetch(`http://localhost:3000/user_bugs/`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             user_id: 
    //         })
    //     })
    // })
    

    // console.log(this.state.bugs)
    render(){
        const re = new RegExp(this.state.searchText, "i");
        const bugs = this.state.bugs.filter((bug) => {
            return re.test(bug.id) 
            || re.test(bug.name)
            || re.test(bug.priority)
            || re.test(bug.project)
            || re.test(bug.status)
            || re.test(bug.description)
            || re.test(bug.opened)
            || re.test(bug.closed)
            || re.test(bug.age)
            || re.test(bug.submitted_by)
            || re.test(bug.location)
        })
        const projects = this.state.projects.filter((project)=>{
            return re.test(project.title)
        })

        const users = this.state.users.filter((user)=>{
            return re.test(user.username) 
        })
        
        return(
            <div className="project-container-div">
                <Search onChange={this.handleChange}/>
                <ProjectList 
                // setAssignedUsers={this.setAssignedUsers}
                // assignedUsersToBug={this.state.assignedUsersToBug}
                bugs={bugs} 
                user_bugs={this.state.user_bugs}
                users={users}
                projects={projects}
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
                />
            </div>
        )
    }
}

export default ProjectContainer