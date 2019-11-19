import React from 'react'
import { Button, Form } from 'semantic-ui-react'

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
        console.log(this.state)
        this.props.addBug(this.state)
    }
      
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render(){
      const { name, submitted_by, description } = this.state
      return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group style={{marginTop: "10px"}} widths={3}>
                <Form.Input size="mini" name='name' value={name} onChange={this.handleChange}  placeholder='Bug Name' />
                <Form.Input size="mini" name='description' value={description} onChange={this.handleChange}  placeholder='Description' />
                <Form.Input size="mini" name='submitted_by' value={submitted_by} onChange={this.handleChange}  placeholder='Submitted By' />
                </Form.Group>
                <Button size="mini" type='submit'>Add Bug</Button>
            </Form>
      )
  }

}





export default NewBug