import React, { Component } from 'react'
import { Button, Form, Icon } from 'semantic-ui-react'
import { Context } from './Provider'

class NewProject extends Component{
    static contextType = Context
    state={
        title: ''
    }

    handleSubmit=()=>{
        // let projectTitles = []
        // this.context.projects.forEach(project=>{
        //     projectTitles.push(project.title)
        // })
        // if(this.state.title.length===0){alert("Enter project name")}
        // if(projectTitles.includes(this.state.title)===true){
        //     alert("Project with this name already exists")
        // } 
        // if(this.state.title.length!==0 && projectTitles.includes(this.state.title)===false){
            this.context.handleAddProject(
                this.state.title
                )
        // }
        return this.setState({title:""})        
    }
      
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render(){
        const { title } = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Input style={{marginTop:"10px"}} float="left" size="mini" name='title' value={title} onChange={this.handleChange} placeholder='Enter New Project Name' />
               
                <Button style={{float:"left"}} size="mini" type='submit'><Icon name="plus square outline"/></Button>
            </Form>
      )
  }

}





export default NewProject