// Code Keypad Component Here
import React from 'react'
import ReactDOM from 'react-dom'

class Keypad extends React.Component {
  constructor(props){
    super()
  }
  displayMessage =()=>{
    console.log('Entering password...')
  }
  render(){
    return (
      <input type="password" onKeyUp={this.displayMessage}></input>
    )
  }
}

export default Keypad
