import React from 'react'

class TabItem extends React.Component {
    render(){
        return(
        <button className="wrapped">{this.props.project.title}</button>
        )
    }
}

export default TabItem