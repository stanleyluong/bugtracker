import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'

class NewBug extends React.Component{
  
    state={
        name:'',
        submitted_by:'',
        description:'',
        opened: `${new Date()}`,
        project_id: this.props.project.id
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.addBug(this.state)
    }
      
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render(){
      const { name, submitted_by, description } = this.state
      return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group unstackable widths={2}>
                <Form.Input name='name' value={name} onChange={this.handleChange} label='Bug Name' placeholder='Bug Name' />
                <Form.Input name='description' value={description} onChange={this.handleChange} label='Description' placeholder='Description' />
                <Form.Input name='submitted_by' value={submitted_by} onChange={this.handleChange} label='Submitted By' placeholder='Submitted By' />
                </Form.Group>
                <Button type='submit'>Add Bug</Button>
            </Form>
      )
  }

}





export default NewBug