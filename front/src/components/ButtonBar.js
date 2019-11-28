import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Context } from './Provider'

export default class ButtonBar extends Component {
  static contextType = Context
  state = { activeItem: 'Assigned Bugs' }
  handleItemClick = (e, { id }) => this.setState({ activeItem: id },()=>{console.log(this.state)
    console.log(id)
    this.props.loggedInNavBarState(this.state.activeItem)})
  render() {
    let myBugs=[]
    this.context.user_bugs.forEach(user_bug=>{
        if(user_bug.user_id === this.context.userData.user.id){
            this.context.bugs.forEach(bug=>{
                if(user_bug.bug_id === bug.id){
                    myBugs.push(bug)
                }
            })
        }
    }) 
    const { activeItem } = this.state
    return (
      <div>
        <h2>Bug Tracker</h2>
        <Menu color='black' inverted widths={7}>
          <Menu.Item
            icon="home"
            name={`Hello ${this.context.userData.user.username}`}
            id="Home"
            active={activeItem === `Hello ${this.context.userData.user.username}`}
            onClick={this.handleItemClick}
            />
          <Menu.Item
            icon="bug"
            name={`${myBugs.length} Assigned bugs`}
            id="Bugs"
            active={activeItem === "Bugs"}
            onClick={this.handleItemClick}
            />
          <Menu.Item
            icon="tasks"
            name={`${this.context.projects.length} Projects ${this.context.bugs.length} Bugs`}
            id="Projects"
            active={activeItem ==="Projects"}
            onClick={this.handleItemClick}
            />
          <Menu.Item
            icon='users'
            name={`${this.context.users.length} Team Members`}
            id="Team Members"
            active={activeItem === 'Team Members'}
            onClick={this.handleItemClick}
            />
          <Menu.Item
            icon='info'
            name='Info'
            id="Info"
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
            />
          <Menu.Item
            icon='id badge'
            name='Profile'
            id="Profile"
            active={activeItem === 'Profile'}
            onClick={this.handleItemClick}
            />
          <Menu.Item
            icon='sign out alternate'
            name='Sign Out'
            id="Sign Out"
            active={activeItem === 'Sign Out'}
            onClick={this.handleItemClick}
            />
        </Menu>
            </div>
    )
  }
}
