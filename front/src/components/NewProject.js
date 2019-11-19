import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class NewProject extends React.Component{
  
    state={
        title: ''
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.projects.forEach(project=>{
            if(project.title === this.state.title){alert("Project name unavailable, please try again.")}
        })
        if(this.state.title.length===0){alert("Enter project name")}
        else {this.props.addProject(this.state)}
        
        console.log(this.state)
    }
      
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render(){
        const { title } = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Input style={{marginTop:"10px"}} size="mini" name='title' value={title} onChange={this.handleChange} placeholder='Project Title' />
               
                <Button style={{marginBottom:"10px"}} size="mini" type='submit'>Add Project</Button>
            </Form>
      )
  }

}





export default NewProject