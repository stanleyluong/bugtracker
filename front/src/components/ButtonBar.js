import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class ButtonBar extends Component {
  state = { activeItem: 'Assigned Bugs' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name },()=>{console.log(this.state)
    console.log(name)
    this.props.loggedInNavBarState(this.state.activeItem)})
  render() {
    const { activeItem } = this.state
    return (
      <Menu color='black' inverted widths={7}>
        <Menu.Item
        icon="home"
        name='Home'
        active={activeItem === 'Home'}
        onClick={this.handleItemClick}
        />
        <Menu.Item
        icon="thumbtack"
        name='Assigned Bugs'
        active={activeItem === 'Assigned Bugs'}
        onClick={this.handleItemClick}
        />
        <Menu.Item
          icon="tasks"
          name='Projects'
          active={activeItem === 'Projects'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
        icon='info'
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
        icon='address card'
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          icon='id badge'
          name='Profile'
          active={activeItem === 'Profile'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
        icon='sign out alternate'
          name='Sign Out'
          active={activeItem === 'Sign Out'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
