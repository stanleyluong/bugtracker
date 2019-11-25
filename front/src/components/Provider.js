import React, { createContext, Component } from 'react'

export const Context = createContext()

class Provider extends Component {
    state = {
        projects: [],
        bugs: [],
        users: [],
        user_bugs: [],
        user_projects: [],
        jwt: this.props.jwt,
        userData:this.props.userData
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
   
    handleAddProject=(project)=>{
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
         },()=>{
            let bugid = response.id
            bug.assign_to.forEach(user=>{
            console.log(user)
            fetch('http://localhost:3000/user_bugs',{
                method: 'POST',
                body: JSON.stringify({
                    user_id: user,
                    bug_id: bugid
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json',
                    'Authorization':`Bearer ${this.props.jwt}`
                }
            }).then(response=>response.json()).then(response=>this.setState({user_bugs:[response,...this.state.user_bugs]}))
        })}))
        
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

    render(){
        return(
            <Context.Provider value={{
                ...this.state,
                handleAddBug: this.handleAddBug,
                handleAddProject: this.handleAddProject,
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
                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Provider