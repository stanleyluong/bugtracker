import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class NewProject extends React.Component{
  
    state={
        title: ''
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        if(this.state.title.length===0){alert("Enter project name")}
        else {this.props.addProject(this.state)}
        
        console.log(this.state)
    }
      
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render(){
        const { title } = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group unstackable widths={1}>
                <Form.Input name='title' value={title} onChange={this.handleChange} label='Project Title' placeholder='Project Title' />
                {/* <Form.Input name='project' value={project} onChange={this.handleChange} label='Project Name' placeholder='Project Name' />
                <Form.Input name='submitted_by' value={submitted_by} onChange={this.handleChange} label='Submitted By' placeholder='Submitted By' />
                <Form.Input name='description' value={description} onChange={this.handleChange} label='Description' placeholder='Description' /> */}
                </Form.Group>
                <Button floated="left" type='submit'>Add Project</Button>
            </Form>
      )
  }

}





export default NewProject