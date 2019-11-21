import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class ButtonBar extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name },()=>{
    console.log(this.state)
    console.log(name)

    this.props.loggedInNavBarState(this.state.activeItem)})

  render() {
    const { activeItem } = this.state

    return (
       

      <Menu color='black' inverted>

        <Menu.Item
        name='Assigned Bugs'
        active={activeItem === 'Assigned Bugs'}
        onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Projects'
          active={activeItem === 'Projects'}
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
        <Menu.Item
          name='Profile'
          active={activeItem === 'Profile'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Sign Out'
          active={activeItem === 'Sign Out'}
          onClick={this.handleItemClick}
        />
      </Menu>
       
    )
  }
}
