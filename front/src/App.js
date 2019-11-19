import React from 'react'
import './css/App.css'
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import NewBug from './components/NewBug'
import ButtonBar from './components/ButtonBar'
import ProjectContainer from './components/ProjectContainer'
import AssignedBugs from './components/AssignedBugs'
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
          activeItem:'Assigned Bugs',
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
    if(this.state.activeItem==='Assigned Bugs'){return <AssignedBugs userData={this.state.userData} jwt={this.state.jwt}/>}
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
      
      <h2><img style={{width: "40px"}}src="https://previews.123rf.com/images/dzm1try/dzm1try1806/dzm1try180600232/103506531-bug-tracking-icon.jpg" alt="oops" />Bug Tracker 9000</h2>

        {this.handleRender()}
      </div>
    )
  }
}
export default App