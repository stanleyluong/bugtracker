import 'semantic-ui-css/semantic.min.css'
import React, { Component }from 'react'
import Provider from './Provider'
import LoginForm from './LoginForm'
import SignUp from './SignUp'
import About from './About'
import Contact from './Contact'
import NewBug from './NewBug'
import ProjectContainer from './ProjectContainer'
import AssignedBugs from './AssignedBugs'
import Profile from './Profile'
import ButtonBar from './ButtonBar'
import {Context} from './Provider'
class Home extends Component {
  static contextType=Context
  state={activeItem:"Home"}

  handleRender=()=>{
    if(this.state.activeItem==='Login'){return <LoginForm handleLogin={this.handleLogin} 
    handleRenderSignUp={this.handleRenderSignUp}
    />}
    if(this.state.activeItem==='SignUp'){return <SignUp handleRenderLogin={this.handleRenderLogin} handleSignedUpandLoggedin={this.handleSignedUpandLoggedin}/>}
    // if(this.state.activeItem==='Home'){return <Home/> }
    if(this.state.activeItem==='About'){return <About/> }
    if(this.state.activeItem==='Contact'){return <Contact/>}
    // if(this.state.activeItem==='BugTracker'){return <BugTracker jwt={this.state.jwt}/>}
    if(this.state.activeItem==='Add Bug'){return <NewBug jwt={this.state.jwt}/>}
    if(this.state.activeItem==='Projects'){return <div><ProjectContainer jwt={this.state.jwt}/></div>}
    if(this.state.activeItem==='Sign Out'){this.setState({activeItem:'Login',loggedIn: false})}
    if(this.state.activeItem==='Assigned Bugs'){return <AssignedBugs userData={this.state.userData} jwt={this.state.jwt}/>}
    if(this.state.activeItem==='Profile'){return <Profile updateUserData={this.updateUserData} userData={this.state.userData}/>}
  }

  loggedInNavBarState=(item)=>{
    this.setState({
      activeItem: item
    },()=>{console.log(this.state.activeItem)})
    console.log(item)
  }

  render(){
    return(
      <div>
        <Provider jwt={this.props.jwt} userData={this.props.userData}>
        <ButtonBar loggedInNavBarState={this.loggedInNavBarState}/>
        <h4>{`Hello ${this.props.userData.user.username}`}</h4>
        {this.handleRender()}
        </Provider>
      </div>
    )
  }
    
}

export default Home