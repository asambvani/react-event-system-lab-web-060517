// Code EyesOnMe Component Here
import React from 'react'
import ReactDOM from 'react-dom'

class EyesOnMe extends React.Component {
  constructor(props){
    super()
  }
  displayFocus =()=>{
    console.log('Good!')
  }
  displayBlur =()=>{
    console.log('Hey! Eyes on me!')
  }
  render(){
    return (
      <button onFocus={this.displayFocus} onBlur={this.displayBlur}></button>
    )
  }
}

export default EyesOnMe
