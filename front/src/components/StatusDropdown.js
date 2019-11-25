import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Context } from './Provider'

const statusOptions = [
  {
    key: "Can't reproduce",
    text: "Can't reproduce",
    value: "Can't reproduce",
  },
  {
    key: 'In progress',
    text: 'In progress',
    value: 'In progress',
  },
  {
    key: 'Complete',
    text: 'Complete',
    value: 'Complete',
  },
  {
    key: 'Blocked',
    text: 'Blocked',
    value: 'Blocked',
  },
  {
    key: "Won't Fix",
    text: "Won't Fix",
    value: "Won't Fix",
  },
  {
    key: 'Duplicate',
    text: 'Duplicate',
    value: 'Duplicate',
  },
]

class StatusDropdown extends Component {
  static contextType = Context
  render(){
    const { id, status } = this.props
    return (
      <Dropdown
        placeholder={status}
        fluid
        selection
        options={statusOptions}
        onChange={(e, data)=> this.context.handleChangeStatus(e, data, id)}
      />
    )

  }
}


export default StatusDropdown