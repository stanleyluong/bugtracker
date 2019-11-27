import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Context } from './Provider'

const priorityOptions = [
    {
      key: 'Low',
      text: 'Low',
      value: 'Low',
      id: 'Low'
    },
    {
      key: 'Normal',
      text: 'Normal',
      value: 'Normal',
      id: 'Normal'
    },
  {
    key: "High",
    text: "High",
    value: "High",
    id: 'High'
  },
  {
    key: 'Critical',
    text: 'Critical',
    value: 'Critical',
    id: 'Critical'
  }
]

class PriorityDropdown extends Component{
  static contextType = Context

  handlePriorityColor=()=>{
    if (this.props.priority==='Low'){
      return {borderColor: "lightblue", borderWidth: "thick"}
    }
    if (this.props.priority==='Normal'){
        return {borderColor: "grey", borderWidth: "thick"}
    }
    if (this.props.priority==='High'){
        return {borderColor: "orange", borderWidth: "thick"}
    }
    if (this.props.priority==='Critical'){
        return {borderColor: "red", borderWidth: "thick"}
    }
  }

  render(){
    const { id, priority } = this.props
    return (
      <Dropdown
        style={this.handlePriorityColor(priority)}
        placeholder={priority}
        fluid
        selection
        options={priorityOptions}
        onChange={(e, data)=> {
          this.handlePriorityColor(priority)
          this.context.handleChangePriority(e, data, id)
        }}
      />
      )
    }
}

export default PriorityDropdown