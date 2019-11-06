import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// const { id } = props

const statusOptions = [
  {
    key: "Can't reproduce",
    text: "Can't reproduce",
    value: "Can't reproduce",
    // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'In progress',
    text: 'In progress',
    value: 'In progress',
    // image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Complete',
    text: 'Complete',
    value: 'Complete',
    // image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'Blocked',
    text: 'Blocked',
    value: 'Blocked',
    // image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
  },
  {
    key: "Won't Fix",
    text: "Won't Fix",
    value: "Won't Fix",
    // image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
  },
  {
    key: 'Duplicate',
    text: 'Duplicate',
    value: 'Duplicate',
    // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
]

const StatusDropdown = (props) => {
  const { id } = props
  return (
    // console.log(props)
    <Dropdown
      placeholder={props.status}
      fluid
      selection
      // compact
      options={statusOptions}
      onChange={(e, data)=> props.handleChangeStatus(e, data, id)}
    />
  )
}


export default StatusDropdown