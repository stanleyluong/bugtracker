import React from 'react'
import { Form } from 'semantic-ui-react'
import { Context } from './Provider'
class Profile extends React.Component{
    static contextType = Context
    state={
        // user:{
            username:'',
            firstname:'',
            lastname:'',
            // password:'',
            // passwordconfirmation:"",
            email:'',
            avatar: '',
            job: '',
        // }

    }

    componentDidMount(){
        this.setState({
            // user:{
                username: this.context.userData.user.username,
                firstname:this.context.userData.user.firstname,
                lastname:this.context.userData.user.lastname,
                // password:this.props.userData.user.password,
                // passwordconfirmation:this.props.userData.user.password,
                email:this.context.userData.user.email,
                avatar: this.context.userData.user.image,
                job: this.context.userData.user.job
            // }
        })
    }

    handleSubmit=()=>{
        // event.preventDefault()
        // if(this.state.password!==this.state.passwordconfirmation){
        //     alert("Password does not match")
        // } else {
            this.context.updateUserData(this.state)
        // }
        console.log(this.state)
    }
      
    handleChange = (e, { name, value }) => this.setState({ [name]: value },
        console.log(value))

    render(){
        return(
            // <Form widths='equal' onSubmit={this.handleSubmit}>
            //     <Form.Input style={{marginTop:"10px"}} size="mini" name='title' value={avatar} onChange={this.handleChange} placeholder='Enter avatar URL' />
               
            //     <Button style={{marginBottom:"10px"}} size="mini" type='submit'>Add Avatar</Button>
            // </Form>
             <Form onSubmit={this.handleSubmit}>
                <Form.Group unstackable widths={3}>
                    <Form.Input onChange={this.handleChange} name="username" label='Username' placeholder='Enter username' value={this.state.username}/>
                    <Form.Input onChange={this.handleChange} name="firstname" label='First name' placeholder='Enter first name' value={this.state.firstname} />
                    <Form.Input onChange={this.handleChange} name="lastname" label='Last name' placeholder='Enter last name' value={this.state.lastname}/>
                    <Form.Input onChange={this.handleChange} name="email" label='E-mail' placeholder='Enter e-mail' value={this.state.email} />
                    <Form.Input onChange={this.handleChange} name="avatar" label='Avatar' placeholder='Enter avatar URL' value={this.state.avatar}/>
                    <Form.Input onChange={this.handleChange} name="job" label='Job' placeholder='Enter job' value={this.state.job} />
                    {/* <Form.Input onChange={this.handleChange} name="password" label='Password' placeholder='Enter password' type='password' value={this.state.password} />
                    <Form.Input onChange={this.handleChange} name="passwordconfirmation" label='Confirm Password' placeholder='Confirm password' type='password' value={this.state.passwordconfirmation}/> */}
                {/* </Form.Group> */}

                {/* <Form.Group widths={2}> */}
                {/* </Form.Group> */}

                {/* <Form.Group widths={2}> */}
                {/* </Form.Group> */}

                {/* <Form.Group widths={2}> */}
                </Form.Group>

                <Form.Button type='submit'>Update Info</Form.Button>

            </Form>
      )
  }
}

export default Profile