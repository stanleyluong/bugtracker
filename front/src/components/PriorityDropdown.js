import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// const { id } = props

const priorityOptions = [
    {
      key: 'Low',
      text: 'Low',
      value: 'Low',
      // image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
      key: 'Normal',
      text: 'Normal',
      value: 'Normal',
      // image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
  {
    key: "High",
    text: "High",
    value: "High",
    // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Critical',
    text: 'Critical',
    value: 'Critical',
    // image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
  }
]

const PriorityDropdown = (props) => {
  const { id, priority } = props
  return (
    // console.log(props)
    <Dropdown
      placeholder={priority}
      fluid
      selection
      // compact
      options={priorityOptions}
      onChange={(e, data)=> props.handleChangePriority(e, data, id)}
    />
  )
}


export default PriorityDropdown