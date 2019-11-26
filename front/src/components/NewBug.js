import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Context } from './Provider'

class NewBug extends React.Component {

    static contextType=Context

    state={
        name:'',
        submitted_by:'',
        description:'',
        opened: `${new Date()}`,
        project_id: this.props.project.id,
        searchQuery: "",
        assign_to: []
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        console.log(this.state)
        this.context.handleAddBug(this.state)
        this.setState({
            name:"",
            submitted_by:"",
            description:"",
            assign_to: []
        })
    }
      
    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value }, ()=>console.log(this.state.assign_to))
        console.log(value)
        
    }
    handleSearchChange = (e, { searchQuery }) => {this.setState({ searchQuery })}

  render(){
      const { name, submitted_by, description, assign_to, searchQuery } = this.state
      const developerOptions = this.context.users.map((user)=>{
        return {key:user.id, text: user.username, value:user.id, image: user.image}
    })
      return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group style={{marginTop: "10px"}} widths={3}>
                <Form.Input size="mini" name='name' value={name} onChange={this.handleChange}  placeholder='Bug Name' />
                <Form.Input size="mini" name='description' value={description} onChange={this.handleChange}  placeholder='Description' />
                <Form.Input size="mini" name='submitted_by' value={submitted_by} onChange={this.handleChange}  placeholder='Submitted By' />
                <Form.Select 
                search 
                selection 
                searchQuery={searchQuery} 
                fluid 
                size="mini" 
                name='assign_to' 
                value={assign_to} 
                onChange={this.handleChange} 
                placeholder='....search Devs' 
                options={developerOptions} 
                multiple 
                closeOnChange
                closeOnBlur 
                onSearchChange={this.handleSearchChange}/>
                </Form.Group>
                <Button size="mini" type='submit'>Add Bug</Button>
            </Form>
      )
  }

}

export default NewBug