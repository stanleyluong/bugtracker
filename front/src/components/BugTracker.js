import React from 'react'
import NewBug from './NewBug'
import NewProject from './NewProject'
import ButtonBar from './ButtonBar'
import { Button } from 'semantic-ui-react'

class BugTracker extends React.Component{

    // state={
    //     activeItem: 'home'
    // }

    renderBugTracker=()=>{
        // if (props.activeItem==='Tracker'){return />}
        if (this.props.activeItem==='Add Bugs'){return <NewBug />}
        if (this.props.activeItem==='Projects'){return <NewProject/>}
        console.log(this.props.activeItem)

        // if (this.state.view==='home'){return <div><NewBug/><NewProject/></div>}
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
