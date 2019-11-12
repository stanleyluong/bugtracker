import React from 'react'
// import Table from './components/Table'
import './css/App.css'
// import Project from './components/Project'
import ProjectContainer from './components/ProjectContainer'
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'


class App extends React.Component{
  state = {
    currentUser: null,
    loggedIn:false
  }

  handleLogin=(user)=>{
    console.log(user)
  }

  handleSignUp=(data)=>{
    console.log(data)
  }

  handleSignOut=()=>{

  }
  render(){
    return(
      <div className="ui raised segment">
        <div className="ui segment teal inverted">
          <h2>Bug Tracker 9000</h2>
        </div>
        <SignUp handleSignUp={this.handleSignUp}/>
        <LoginForm />
        {/* <ProjectContainer /> */}
      </div>
      
        /* <Table x={10} y={10} id={'1'}/> */
        // <ProjectContainer />

     
    )
  }
}
export default App