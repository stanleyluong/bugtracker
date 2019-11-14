import React from 'react'
import BugList from './BugList'
import Search from './Search'
import 'semantic-ui-css/semantic.min.css'
import '../css/BugContainer.css'
import NewBug from './NewBug'
class BugContainer extends React.Component{
    state = {
        // projects: [],
        // bugs: [],
        // users: [],
        // user_bugs: [],
        // user_projects: [],
        searchText: ""
      }

    // componentDidMount(){
    //     // debugger
    //     Promise.all([
    //         fetch("http://localhost:3000/projects",{
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type':'application/json',
    //                 'Accept':'application/json',
    //                 'Authorization':`Bearer ${this.props.jwt}`
    //             }
    //         }),
    //         fetch("http://localhost:3000/bugs",{
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type':'application/json',
    //                 'Accept':'application/json',
    //                 'Authorization':`Bearer ${this.props.jwt}`
    //             }
    //         }),
    //         fetch("http://localhost:3000/users",{
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type':'application/json',
    //                 'Accept':'application/json',
    //                 'Authorization':`Bearer ${this.props.jwt}`
    //             }
    //         }),
    //         fetch("http://localhost:3000/user_bugs",{
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type':'application/json',
    //                 'Accept':'application/json',
    //                 'Authorization':`Bearer ${this.props.jwt}`
    //             }
    //         }),
    //         fetch("http://localhost:3000/user_projects",{
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type':'application/json',
    //                 'Accept':'application/json',
    //                 'Authorization':`Bearer ${this.props.jwt}`
    //             }
    //         })
    //     ])
    //     .then(([res1,res2,res3,res4,res5])=>
    //     Promise.all([res1.json(),res2.json(),res3.json(),res4.json(),res5.json()])
    //     ).then(([res1,res2,res3,res4,res5])=>{
    //         console.log(res1)
    //         this.setState({
    //             projects: res1,
    //             bugs: res2,
    //             users: res3,
    //             user_bugs: res4,
    //             user_projects: res5
    //         }, ()=>console.log(this.props))
    //     })
    // }

    handleChange = (searchText) => {
        this.setState({
            searchText
        })
    }
    
    // handleClick=(project)=>{
    //     this.setState({
    //         showOneProjectInfo: [...this.props.showOneProjectInfo, project]
    //     })
        
    // }
    // handleChangeStatus=(e, data, id)=>{
    //     let option = e.target.innerText
    //     let currentbug = this.props.bugs.filter(bug=>{return bug.id === id})
    //     // console.log(currentbug)
    //     currentbug.status = data.value
    //     // console.log(id)
    //     // console.log(data.value)
    //     let url = `http://localhost:3000/bugs/${id}`
    //     fetch(url, {
    //         method: 'PATCH', 
    //         body: JSON.stringify({
    //             status: option
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept':'application/json',
    //             'Authorization':`Bearer ${this.props.jwt}`
    //         }
    //     });
    // }
    
    // handleChangePriority=(e, data, id)=>{
    //     let option = e.target.innerText
    //     let currentbug = this.props.bugs.filter(bug=>{return bug.id === id})
    //     currentbug.status = data.value
    //     let url = `http://localhost:3000/bugs/${id}`
    //     fetch(url, {
    //         method: 'PATCH', 
    //         body: JSON.stringify({
    //             priority: option
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept':'application/json',
    //             'Authorization':`Bearer ${this.props.jwt}`
    //         }
    //     });
    //     // console.log(this.props.bugs)
    // }
    
    // handleChangeOpened=(date, bug)=>{
    //     console.log(date, bug)
    //     // return <Calendar />
    //     bug.opened = date
    //     fetch(`http://localhost:3000/bugs/${bug.id}`,{
    //         method: 'PATCH',
    //         body: JSON.stringify({
    //             opened: date
    //         }),
    //         headers: {
    //             'Content-Type':'application/json',
    //             'Accept':'application/json',
    //             'Authorization':`Bearer ${this.props.jwt}`
    //         }
    //     })
    // }

    // handleChangeClosed=(date, bug)=>{
    //     bug.closed = date
    //     fetch(`http://localhost:3000/bugs/${bug.id}`,{
    //         method: 'PATCH',
    //         body: JSON.stringify({
    //             closed: date
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept':'application/json',
    //             'Authorization':`Bearer ${this.props.jwt}`
    //         }
    //     })
    // }

    // handleChangeProject=(val, bug)=>{
    //     // let projectBug
    //     // this.props.project_bugs.forEach(project_bug=>{
    //     //     if (project_bug.bug_id === bug.id){
    //     //         projectBug = project_bug
    //     //         project_bug.project_id = val
    //     //     }
    //     // })
    //     // val = parseInt(val)
    //     bug.project = val
    //     fetch(`http://localhost:3000/bugs/${bug.id}`,{
    //         method: 'PATCH',
    //         body: JSON.stringify({
    //             project: val
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept':'application/json',
    //             'Authorization':`Bearer ${this.props.jwt}`
    //         }
    //     } )
    // }

    // handleChangeDescription=(val, bug)=>{
    //     bug.description=val
    //     fetch(`http://localhost:3000/bugs/${bug.id}`,{
    //         method: 'PATCH',
    //         body: JSON.stringify({
    //             description: val
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept':'application/json',
    //             'Authorization':`Bearer ${this.props.jwt}`
    //         }
    //     })  
    // }

    // handleChangeName=(val, bug)=>{
    //     bug.name=val
    //     fetch(`http://localhost:3000/bugs/${bug.id}`,{
    //         method: 'PATCH',
    //         body: JSON.stringify({
    //             name: val
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept':'application/json',
    //             'Authorization':`Bearer ${this.props.jwt}`
    //         }
    //     })
    // }

    // handleChangeSubmittedBy=(val, bug)=>{
    //     bug.submitted_by=val
    //     fetch(`http://localhost:3000/bugs/${bug.id}`,{
    //         method: 'PATCH',
    //         body: JSON.stringify({
    //             submitted_by: val
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept':'application/json',
    //             'Authorization':`Bearer ${this.props.jwt}`
    //         }
    //     })
    // }

    // handleChangeLocation=(val, bug)=>{
    //     bug.location=val
    //     fetch(`http://localhost:3000/bugs/${bug.id}`,{
    //         method: 'PATCH',
    //         body: JSON.stringify({
    //             location: val
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept':'application/json',
    //             'Authorization':`Bearer ${this.props.jwt}`
    //         }
    //     })
    // }
    //sending back an array of userids as val and associated bug. must assign users to this bug. must find userbugs with same bug id.adding an assignedto will create a userbug. deleting an assignedto will delete a userbug.
    // handleChangeAssignedTo=(val, bug)=>{
    //     console.log('val', val)
    //     console.log('bug',bug)
    //     this.props.user_bugs.forEach(user_bug=>{
    //         if(val.includes(user_bug.user_id)===false){

    //         }
//     handleChangeAssignedTo=(val, bug)=>{
        
//         //for all userbugs that have same bug id as bug. gather all their user_ids. if that userid is not in value post a new userbug with bug_id=bug.id and user_id=val
//         let userbugbugidsthatarethesameasbugbugid = []
//         let usersthatareassociatedwithbug = []
//         this.props.user_bugs.forEach(user_bug=>{
//             if (user_bug.bug_id === bug.id){
//                 userbugbugidsthatarethesameasbugbugid.push(user_bug.user_id)
//                 usersthatareassociatedwithbug.push(user_bug)
//             }
//         })
//         console.log(val.length)
//         console.log(val[val.length-1])
//         console.log(usersthatareassociatedwithbug)
//         // debugger
//         // console.log(val.last())
//         // console.log(val[usersthatar])
//         console.log(bug.id)
//         if (val.length > usersthatareassociatedwithbug.length){
//             console.log("insideif")
//             fetch (`http://localhost:3000/user_bugs`,{
//                 method: 'POST',
//                 body: JSON.stringify({
//                     user_id: val[val.length-1],
//                     bug_id: bug.id
//                 }),
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept':'application/json',
//                     'Authorization':`Bearer ${this.props.jwt}`
//                 }
//             })
//         }

//         if(val.length < usersthatareassociatedwithbug.length){
//             this.props.user_bugs.forEach(user_bug=>{
//                 if(user_bug.bug_id===bug.id && !val.includes(user_bug.user_id)){
//                      fetch (`http://localhost:3000/user_bugs/${user_bug.id}`,{
//                                     method: 'DELETE',
//                                     headers: {
//                                         'Content-Type': 'application/json',
//                                         'Accept':'application/json',
//                                         'Authorization':`Bearer ${this.props.jwt}`
//                                     }
//                                 }).then(res=>console.log(res))
//                 }
//             })
//         }

//     }

//    addBug=(bug)=>{
//        console.log(bug)

//     fetch('http://localhost:3000/bugs',{
//         method:'POST',
//         body: JSON.stringify({
//             bug:
//             {

//             name: bug.name,
//             submitted_by: bug.submitted_by,
//             description: bug.description,
//             project_id: 1,
//             opened: bug.opened
//         }
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept':'application/json',
//             'Authorization':`Bearer ${this.props.jwt}`
//         }
//     }).then(response=>response.json())
//     .then(response=>this.setState({
//         bugs: [response, ...this.props.bugs]
//     }))
//     // .then(console.log(this.props.bugs))
//     // this.setState({
//     //     bugs: [bug, ...this.props.bugs]
//     // })
//    }
    
    render(){
        const re = new RegExp(this.state.searchText, "i");
        const bugs = this.props.bugs.filter((bug) => {
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
      
        
        return(
            <div className="project-container-div">
                {/* <h1>{this.props.project.title}</h1> */}
                <Search onChange={this.handleChange}/>
                <NewBug addBug={this.props.addBug} jwt={this.props.jwt} project={this.props.project}/>
                <BugList 
                // setAssignedUsers={this.setAssignedUsers}
                // assignedUsersToBug={this.props.assignedUsersToBug}
                bugs={bugs} 
                users={this.props.users}
                projects={this.props.projects}
                user_bugs={this.props.user_bugs}
                handleChangeStatus={this.props.handleChangeStatus}
                handleChangePriority={this.props.handleChangePriority}
                handleChangeOpened={this.props.handleChangeOpened}
                handleChangeClosed={this.props.handleChangeClosed}
                handleChangeProject={this.props.handleChangeProject}
                handleChangeDescription={this.props.handleChangeDescription}
                handleChangeName={this.props.handleChangeName}
                handleChangeSubmittedBy={this.props.handleChangeSubmittedBy}
                handleChangeLocation={this.props.handleChangeLocation}
                handleChangeAssignedTo={this.props.handleChangeAssignedTo}
                />
            </div>
        )
    }
}

export default BugContainer