import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Context } from './Provider'

class NewProject extends Component{
    static contextType = Context
    state={
        title: ''
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        if(this.state.title.length===0){alert("Enter project name")}
        let projectNames = []
        this.context.projects.forEach(project=>{
            projectNames.push(project.name)
        })
        if(projectNames.includes(this.state.title)){
            alert("Project with this name already exists")
        } else {
            this.context.handleAddProject(this.state)
            this.setState({title:""})
        }        
        console.log(this.state)
    }
      
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render(){
        const { title } = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Input style={{marginTop:"10px"}} size="mini" name='title' value={title} onChange={this.handleChange} placeholder='Enter New Project Name' />
               
                <Button style={{marginBottom:"10px"}} size="mini" type='submit'>Add Project</Button>
            </Form>
      )
  }

}





export default NewProject