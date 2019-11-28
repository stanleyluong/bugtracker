import React, { createContext, Component } from 'react'
import Moment from 'react-moment'
export const Context = createContext()

class Provider extends Component {
    state = {
        projects: [],
        bugs: [],
        users: [],
        user_bugs: [],
        user_projects: [],
        jwt: this.props.jwt,
        userData:this.props.userData,
        currentProject:""
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
            this.setState({
                projects: res1,
                bugs: res2,
                users: res3,
                user_bugs: res4,
                user_projects: res5
            })
        })
    }

    handleAddAttachment=(picture, id)=>{
        let currentbug = this.state.bugs.find(bug=>{return bug.id === id})
        let otherbugs = this.state.bugs.filter(bug=>{return bug.id !== id})
        // currentbug.attachments = [picture, ...currentbug.attachments]
        console.log(currentbug.attachments)
        console.log(picture)
        // console.log(currentbug[0].attachments[0])
        // console.log(pictures[0])
        // pictures.forEach(picture=>{
        //     currentbug[0].attachments.push(picture)
        // })
        // console.log(currentbug[0].attachments)
        // let formData = new FormData()
        // formData.append("link",JSON.stringify(pictures[0]))
        
        fetch(`http://localhost:3000/bugs/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${this.props.jwt}`
            },
            body: JSON.stringify({
                // "bug":{
                    // "attachments"
                    attachments:[picture, ...currentbug.attachments]
                // }
            })
            // mimeType: 'multipart/form-data',
            // body: {
            //     attachments:formData
            // }
        }).then(response=> response.json())
        .then(response=>this.setState({bugs:[response, ...otherbugs]}))
        // .then(response=>response.json()).then(response=>console.log(response))
    }
   
    handleAddProject=(title)=>{
        console.log()
            fetch('http://localhost:3000/projects',{
                method:'POST',
                body: JSON.stringify({
                    project:{
                      title: title
                    }
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json',
                    'Authorization':`Bearer ${this.props.jwt}`
                }
            }).then(response=>response.json())
            .then(response=>this.setState({
                projects: [response, ...this.state.projects]
            }))
    }
    
    handleAddBug=(bug)=>{
        console.log(bug)
         fetch('http://localhost:3000/bugs',{
             method:'POST',
             body: JSON.stringify({
                 bug:{
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
        //  .then(console.log)
         .then(response=>this.setState({
             bugs: [response, ...this.state.bugs]
         }
        //  ,()=>{
        //     let bugid = response.id
        //     bug.assign_to.forEach(user=>{
        //     console.log(user)
        //     fetch('http://localhost:3000/user_bugs',{
        //         method: 'POST',
        //         body: JSON.stringify({
        //             user_id: user,
        //             bug_id: bugid
        //         }),
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Accept':'application/json',
        //             'Authorization':`Bearer ${this.props.jwt}`
        //         }
        //     }).then(response=>response.json()).then(response=>this.setState({user_bugs:[response,...this.state.user_bugs]}))
        // })}
        ))
        
    }

    handleDeleteBug=(bug)=>{
        console.log("delete in provider")
        fetch(`http://localhost:3000/bugs/${bug.id}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${this.props.jwt}`
            }
        })
        .then(response=>{
            console.log(this.state.jwt)
            console.log(response.status)
        })
        .then(this.setState({
            bugs: this.state.bugs.filter(bog=>bog.id!==bug.id)
        }))
    }

    handleChangeStatus=(e, data, id)=>{
        // console.log('in project container finally wtf', e, data, id)
        let option = e.target.innerText
        let currentbug = this.state.bugs.filter(bug=>{return bug.id === id})
        // console.log(currentbug)
        currentbug.status = data.value
        // console.log(currentbug.status)
        // console.log(data.value)
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
        console.log(option)
        let currentbug = this.state.bugs.filter(bug=>{return bug.id === id})
        let otherbugs = this.state.bugs.filter(bug=>{return bug.id !== id})
        console.log(currentbug[0])
        currentbug[0].priority = option
        console.log(data)
        console.log(currentbug[0].priority)
        console.log(currentbug[0])
        
        // currentbug.status = data.value


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
        })
        .then(response=>response.json())
        .then(response=>this.setState({
            bugs: [response, ...otherbugs]
        }))
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
    handleChangeAssignedTo=(val, bug, findAssignedUsers)=>{
        console.log("foo2", val, bug, findAssignedUsers)
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
            // console.log("insideif")
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
            }).then(response=>response.json()).then(response=>this.setState({user_bugs: [response, ...this.state.user_bugs]}))
        }

        if(val.length < usersthatareassociatedwithbug.length){
            
            this.state.user_bugs.forEach(user_bug=>{
                if(user_bug.bug_id===bug.id && !val.includes(user_bug.user_id)){
                    //search through this.state.user_bugs. if user_bug.bug_id
                    // console.log(user_bug)
                    // console.log(this.state.user_bugs)
                    let otherUserBugs = this.state.user_bugs.filter(userbug=> {return userbug !== user_bug})
                    // console.log(otherUserBugs)
                    fetch (`http://localhost:3000/user_bugs/${user_bug.id}`,{
                                    method: 'DELETE',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Accept':'application/json',
                                        'Authorization':`Bearer ${this.props.jwt}`
                                    }
                    })
                    this.setState({user_bugs: otherUserBugs})
                }
            })
        }

        findAssignedUsers()

    }

    handleLogin=(user)=>{
        console.log(user)
        fetch('http://localhost:3000/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
          },
          body:JSON.stringify({ "user": {
            "username": user.username,
            "password": user.password
            }
            })
        })
        .then(response=>{if(response.status!==202){
          alert("Invalid username or password")
        }
        else {
          return response.json()
        }})
        .then(response=>{if (response!==undefined){this.loginUser(response)}})
      }
    
    updateUserData=(props)=>{
    console.log(props)
    let formattedProps = {
        user:{
        username: props.username,
        // password: null,
        firstname: props.firstname,
        lastname: props.lastname,
        email: props.email,
        image: props.avatar,
        job: props.job
        },
        jwt: this.state.jwt
    }
    console.log(formattedProps)
    // let updatedUser = {
    //   user:{
    //     username: props.username,
    //     password: props.password
    //   }
    // }
    let oldUser = this.state.users.filter(user=>{return user.id===this.state.userData.user.id})
    console.log(oldUser[0])
    let otherUsers = this.state.users.filter(user=>{return user.id!==this.state.userData.user.id})
    console.log(otherUsers)
    fetch(`http://localhost:3000/users/${this.state.userData.user.id}`,{
        method:'PATCH',
        headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization':`Bearer ${this.state.jwt}`
        },
        body: JSON.stringify({
        "user":{
            "username": props.username,
            "firstname": props.firstname,
            "lastname": props.lastname,
            "email": props.email,
            "image": props.avatar,
            "job": props.job,
        }
        })
    }
    )
    .then(response=>response.json())
    .then(response=>this.setState({
            activeItem: "Home",
            userData: formattedProps,
            users: [response, ...otherUsers]
        })
    )
    .then(alert("Updated successfully!"))
    }

    // setCurrentProject=(id)=>{
    //     console.log(id)
    //     this.setState({currentProject:id},()=>console.log('state after setstate',this.state.currentProject))
    // }
    render(){
        return(
            <Context.Provider value={{
                ...this.state,
                handleAddBug: this.handleAddBug,
                handleAddProject: this.handleAddProject,
                handleAddAttachment: this.handleAddAttachment,
                handleDeleteBug: this.handleDeleteBug,
                handleChangeStatus: this.handleChangeStatus,
                handleChangePriority: this.handleChangePriority,
                handleChangeOpened: this.handleChangeOpened,
                handleChangeClosed: this.handleChangeClosed,
                handleChangeDescription: this.handleChangeDescription,
                handleChangeName: this.handleChangeName,
                handleChangeSubmittedBy: this.handleChangeSubmittedBy,
                handleChangeLocation: this.handleChangeLocation,
                handleChangeAssignedTo: this.handleChangeAssignedTo,
                handleLogin: this.handleLogin,
                updateUserData: this.updateUserData,
                // setCurrentProject: this.setCurrentProject
                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Provider