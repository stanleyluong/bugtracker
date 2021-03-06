import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleInverted extends Component {
  state = { activeItem: 'Login' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name },()=>{
    console.log(this.state)
    console.log(name
        )  
    this.props.homeAboutContact(this.state.activeItem)})

  render() {
    const { activeItem } = this.state

    return (
       
      <Menu color='black' inverted widths={2}>
        <Menu.Item
        icon='sign in alternate'
        name='Login'
          active={activeItem === 'Login'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
        icon='info'
          name='Info'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        />
        {/* <Menu.Item
        icon='address card'
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        />   */}
      </Menu>
    )
  }
}
