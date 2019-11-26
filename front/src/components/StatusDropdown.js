import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Context } from './Provider'

const statusOptions = [
  {
    key: "Can't reproduce",
    text: "Can't reproduce",
    value: "Can't reproduce",
    image: "https://cdn.vox-cdn.com/thumbor/baiAt8Qc4nWGs2JJywpPpkpssdo=/0x0:700x353/1400x1400/filters:focal(294x121:406x233):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/51616429/ios-10-shrug-emoji.0.png"
  },
  {
    key: 'In progress',
    text: 'In progress',
    value: 'In progress',
    image: "https://www.jing.fm/clipimg/detail/113-1134882_work-in-progress-emoji.png"
  },
  {
    image: "https://emojis.wiki/emoji-pics/messenger/white-heavy-check-mark-messenger.png",
    key: 'Complete',
    text: 'Complete',
    value: 'Complete',
  },
  {
    key: 'Blocked',
    text: 'Blocked',
    value: 'Blocked',
    image: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/mozilla/36/no-entry-sign_1f6ab.png"
  },
  {
    key: "Won't Fix",
    text: "Won't Fix",
    value: "Won't Fix",
    image: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/weary-face.png"
  },
  {
    key: 'Duplicate',
    text: 'Duplicate',
    value: 'Duplicate',
    image: "https://s3.amazonaws.com/inc-column/Exclamations+and+Emoticons/emoji3.png"
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