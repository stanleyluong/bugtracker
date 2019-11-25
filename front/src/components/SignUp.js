import React from 'react'
import { Segment, Checkbox, Form, Grid, Header, Image , Message, Button} from 'semantic-ui-react'

class SignUp extends React.Component {

  state = { 
    username: '', 
    password: '', 
    firstname: '', 
    lastname: '', 
    email: ''
    // , 
    // submittedUsername: '', 
    // submittedPassword: '', 
    // submittedFirstname:'',
    // submittedLastname:'',
    // submittedEmail: '' 
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    // const { username, password, firstname, lastname, email } = this.state

    // this.setState({ 
    //   submittedUsername: username, 
    //   submittedPassword: password,
    //   submittedFirstname: firstname,
    //   submittedLastname: lastname,
    //   submittedEmail: email
    // },()=>
    this.props.handleSignedUpandLoggedin(this.state)
    
    // )
    
    //need to refactor this move code up to app and fetch login automatically to get jwt after signing up/posting new user
   
  }

  render(){
    const { username, password, firstname, lastname,  email } = this.state

    return(
       <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 1000 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://previews.123rf.com/images/dzm1try/dzm1try1806/dzm1try180600232/103506531-bug-tracking-icon.jpg' /> Create an account
          </Header>
          
          <Segment>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths={5}>
                <Form.Input
                  placeholder='Username'
                  name='username'
                  value={username}
                  onChange={this.handleChange}
                  icon='user'
                />
                <Form.Input
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={this.handleChange}
                  icon='lock'
                  type="password"
                />
                <Form.Input
                  placeholder='First Name'
                  name='firstname'
                  value={firstname}
                  onChange={this.handleChange}
                  icon='user'
                />
                <Form.Input
                  placeholder='Last Name'
                  name='lastname'
                  value={lastname}
                  onChange={this.handleChange}
                  icon='user'
                />
                <Form.Input
                  placeholder='E-mail'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  icon='envelope'
                />
          </Form.Group>
          <Form.Button 
            disabled={!this.state.username 
              || !this.state.firstname 
              || !this.state.lastname 
              || !this.state.password 
              || !this.state.email
            } 
            color='black' fluid size='large' type='submit'
            >Submit</Form.Button>
        </Form>


          {/* <Form.Field> */}
            {/* <Checkbox label='I agree to the Terms and Conditions' error={{
        content: 'You must agree to the terms and conditions',
        pointing: 'left'
      }} /> */}
          {/* </Form.Field> */}

        </Segment>
      {/* </Form> */}
      {/* <strong>for testing: onChange:</strong>
        <pre>{JSON.stringify({ username, password, firstname, lastname, email }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedUsername, submittedPassword, submittedFirstname, submittedLastname, submittedEmail }, null, 2)}</pre> */}
      <Message>
        Have an existing account? <Button onClick={()=>this.props.handleRenderLogin()}>Sign In</Button>
      </Message>

    </Grid.Column>

    </Grid>
    )
  }
 

}
 
  


export default SignUp