import React from 'react'
// import Table from './components/Table'
import './css/App.css'
// import Project from './components/Project'
import BugContainer from './components/BugContainer'
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import NewBug from './components/NewBug'
import BugTracker from './components/BugTracker'
import ButtonBar from './components/ButtonBar'
import NewProject from './components/NewProject'
import ProjectContainer from './components/ProjectContainer'
class App extends React.Component{
  state = {
    userData: {},
    loggedIn: false,
    renderSignUp:false,
    jwt: "",
    showAbout: false,
    showLogin: true,
    showing: '',
    activeItem: 'Home'
   }

  loginUser = (response) => {
        this.setState({
          activeItem:'Projects',
          userData: response, 
          loggedIn: true, 
          jwt: response.jwt,
          renderSignUp: false
        },
        ()=>console.log('state after loginUser', this.state, 'response',response))
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

  

  handleRender=()=>{
    // if(this.state.loggedIn===false){return <Navbar homeAboutContact={this.homeAboutContact}/>}
    if(this.state.activeItem==='Home'){return <LoginForm handleLogin={this.handleLogin} handleRenderSignUp={this.handleRenderSignUp}/>}
    if(this.state.activeItem==='SignUp'){return <SignUp handleRenderLogin={this.handleRenderLogin} handleSignedUpandLoggedin={this.handleSignedUpandLoggedin}/>}
    if(this.state.activeItem==='About'){return <About/> }
    if(this.state.activeItem==='Contact'){return <Contact/>}
    // if(this.state.activeItem==='BugTracker'){return <BugTracker jwt={this.state.jwt}/>}
    if(this.state.activeItem==='Add Bug'){return <NewBug jwt={this.state.jwt}/>}
    if(this.state.activeItem==='Projects'){return <div><ProjectContainer jwt={this.state.jwt}/></div>}
    if(this.state.activeItem==='Sign Out'){this.setState({activeItem:'Home',loggedIn: false})}
  }

  

  handleRenderSignUp=()=>{
    this.setState({activeItem: 'SignUp'})
  }
  handleRenderLogin=()=>{
    this.setState({activeItem: 'Home'})
  }
  handleSignedUpandLoggedin=(props)=>{
    fetch("http://localhost:3000/users",{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify({
        user:{
          username: props.username,
          password: props.password,
          firstname: props.firstname,
          lastname: props.lastname,
          email: props.email
        }
      })
    })
    .then(fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
      },body:JSON.stringify({"user":{
        "username":props.username,
        "password":props.password
      }})
    }))
    .then(response=>response.json())
    .then(response => this.loginUser(response)) 
  }

  homeAboutContact=(item)=>{
    this.setState({activeItem: item})
  }
  handleNavBar=()=>{
    if(this.state.loggedIn===false){
      return <Navbar homeAboutContact={this.homeAboutContact}/>
    } else {return <ButtonBar loggedInNavBarState={this.loggedInNavBarState}/>}
  } 
  loggedInNavBarState=(item)=>{
    this.setState({
      activeItem: item
    },()=>{console.log(this.state.activeItem)})
    console.log(item)
    
  }
  render(){
    return(
      <div className="ui raised segment">
        {/* <div className="ui segment  ">
        </div> */}
        {this.handleNavBar()}
      
      <h2>Bug Tracker 9000</h2>

        {this.handleRender()}
      </div>
    )
  }
}
export default App