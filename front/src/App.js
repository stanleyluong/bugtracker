import React from 'react'
// import Table from './components/Table'
import './css/App.css'
// import Project from './components/Project'
import ProjectContainer from './components/ProjectContainer'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component{

  

  render(){
    return(
      <div className="ui raised segment">
        <div className="ui segment green inverted">
          <h2>Bug Manager</h2>
        </div>
        
        <ProjectContainer />

      </div>
      
        /* <Table x={10} y={10} id={'1'}/> */
        // <ProjectContainer />

     
    )
  }
}
export default App