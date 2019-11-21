import React, { createContext, Component } from 'react'

export const Context = createContext()

class Provider extends Component{
    state = {
        users:[1,2,3],
        bugs:[4,5,6]
    }

    render(){
        return(
        <Context.Provider value={{...this.state}}>
            {this.props.children}
        </Context.Provider>

        )
    }
}

export default Provider