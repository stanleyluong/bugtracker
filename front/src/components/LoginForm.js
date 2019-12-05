import React, { Component } from 'react'
import { Image, Form, Grid, Header, Message, Segment, Button, Icon } from 'semantic-ui-react'

class LoginForm extends Component{

  state={ 
      username:'',
      password:'',
      submittedUsername:'',
      submittedPassword:'',
      renderSignUp: false
    
  }

  handleChange=(e, {name, value})=> this.setState({[name]:value})

  handleSubmit=()=>{
    const { username, password } = this.state

    this.setState({
      submittedUsername: username,
      submittedPassword: password
    },()=>{this.props.handleLogin(this.state)})
  }

  handleSignUp=()=>{
    this.setState({renderSignUp: !this.state.renderSignUp})
  }

  render(){
    const { username, password } = this.state

    return(
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 500 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='1_BB7rhYkn_Nk1DRMICcC-Qw.jpeg' /> 
                Log-in to your account
              </Header>
              
                <Segment>
                  <Form onSubmit={this.handleSubmit} >
                    <Form.Group widths={2}>
                      <Form.Input  icon='user' iconPosition='left' placeholder='Username' onChange={this.handleChange} value={username} name='username'/>
                      <Form.Input 
                         
                        name='password'
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Button color='black' fluid size='large' type='submit'  >
                      <Icon name='sign in'/>Login
                    </Form.Button>
                  </Form>
                </Segment>
          
              <Message>
                New to us? <Button onClick={()=>this.props.handleRenderSignUp()}>Sign Up</Button>
              </Message>
            </Grid.Column>
          </Grid>
    )
  }
}


export default LoginForm