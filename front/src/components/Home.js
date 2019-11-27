import React, { Component }from 'react'
import Provider from './Provider'
import About from './About'
import Contact from './Contact'
import ProjectContainer from './ProjectContainer'
import AssignedBugs from './AssignedBugs'
import Profile from './Profile'
import ButtonBar from './ButtonBar'
import {Context} from './Provider'
import Statistics from './Statistics'
class Home extends Component {
  static contextType=Context
  state={activeItem:"Assigned Bugs"}

  handleRender=()=>{
    if(this.state.activeItem==='Assigned Bugs'){return <AssignedBugs userData={this.state.userData} jwt={this.state.jwt}/>}
    if(this.state.activeItem==='Projects'){return <div><ProjectContainer jwt={this.state.jwt}/></div>}
    if(this.state.activeItem==='About'){return <About/> }
    if(this.state.activeItem==='Contact'){return <Contact/>}
    if(this.state.activeItem==='Profile'){return <Profile updateUserData={this.updateUserData} userData={this.state.userData}/>}
    if(this.state.activeItem==='Sign Out'){this.props.handleSignOut()}
  }

  loggedInNavBarState=(item)=>{
    this.setState({activeItem: item},()=>{console.log(this.state.activeItem)})
    console.log(item)
  }

  render(){
    return(
      <div>
        <Provider jwt={this.props.jwt} userData={this.props.userData}>
        <ButtonBar loggedInNavBarState={this.loggedInNavBarState}/>
        <Statistics />
        {this.handleRender()}
        </Provider>
      </div>
    )
  }
    
}

export default Home