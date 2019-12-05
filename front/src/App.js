import React from 'react'
import './css/App.css'
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

class App extends React.Component{
  state = {
    userData: {},
    loggedIn: false,
    jwt: "",
    activeItem: 'Login'
   }

  loginUser = (response) => {
    console.log(response)
        this.setState({
          activeItem:'Home',
          userData: response, 
          loggedIn: true, 
          jwt: response.jwt,
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
    if(this.state.activeItem==='Login'){return <LoginForm handleLogin={this.handleLogin} handleRenderSignUp={this.handleRenderSignUp}/>}
    if(this.state.activeItem==='SignUp'){return <SignUp handleRenderLogin={this.handleRenderLogin} handleSignedUpandLoggedin={this.handleSignedUpandLoggedin}/>}
    if(this.state.activeItem==='Home'){return <Home handleSignOut={this.handleSignOut} jwt={this.state.jwt} userData={this.state.userData} handleLogin={this.handleLogin}/> }
    if(this.state.activeItem==='About'){return <About/> }
    if(this.state.activeItem==='Contact'){return <Contact/>}
  }

  handleSignOut=()=>{
    this.setState({
      activeItem: 'Login',
      loggedIn: false,
      jwt: "",
      userData: {}
    })
  
  }
  

  handleRenderSignUp=()=>{
    this.setState({activeItem: 'SignUp'})
  }
  handleRenderLogin=()=>{
    this.setState({activeItem: 'Login'})
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
    } 
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
      {/* // <div className="ui segment  "> */}
        {/* </div>  */}
        {this.handleNavBar()}
      {/* <h2><img style={{width: "40px"}}src="https://previews.123rf.com/images/dzm1try/dzm1try1806/dzm1try180600232/103506531-bug-tracking-icon.jpg" alt="oops" />Bug Tracker 9000</h2> */}
      

        {this.handleRender()}
      </div>
    )
  }
}
export default App