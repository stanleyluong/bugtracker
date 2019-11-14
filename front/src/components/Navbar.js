import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name },()=>{
    console.log(this.state)
    console.log(name
        )  
    this.props.homeAboutContact(this.state.activeItem)})

  render() {
    const { activeItem } = this.state

    return (
       

      <Menu inverted>

        
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        />

        
      </Menu>
       
    )
  }
}
