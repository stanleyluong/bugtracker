import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Context } from './Provider'
// const { id } = props

const priorityOptions = [
    {
      key: 'Low',
      text: 'Low',
      value: 'Low',
    },
    {
      key: 'Normal',
      text: 'Normal',
      value: 'Normal',
    },
  {
    key: "High",
    text: "High",
    value: "High",
  },
  {
    key: 'Critical',
    text: 'Critical',
    value: 'Critical',
  }
]

function handlePriorityColor(priority){
  if (priority==='Low'){
      return {backgroundColor:"#80e5ff"}
  }
  if (priority==='Normal'){
      return {backgroundColor:"#c2c2d6"}
  }
  if(priority==='High'){
      return {backgroundColor:"yellow"}
  }
  if(priority==='Critical'){
      return {backgroundColor:"red"}
  }
}

class PriorityDropdown extends Component{
  static contextType = Context
  render(){
    const { id, priority } = this.props
    return (
      <Dropdown
        style={handlePriorityColor(priority)}
        placeholder={priority}
        fluid
        selection
        options={priorityOptions}
        onChange={(e, data)=> this.context.handleChangePriority(e, data, id)}
      />

      )
    }
}


export default PriorityDropdown