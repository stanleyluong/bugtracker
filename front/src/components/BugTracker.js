import React from 'react'
import NewBug from './NewBug'
import NewProject from './NewProject'

class BugTracker extends React.Component{


    renderBugTracker=()=>{
        if (this.props.activeItem==='Add Bugs'){return <NewBug />}
        if (this.props.activeItem==='Projects'){return <NewProject/>}
 }
    
    render(){
        return(
            <div>
                Welcome. Click Projects tab to add a new project.
            {this.renderBugTracker()}
            </div>

        )
    }

}

export default BugTracker
