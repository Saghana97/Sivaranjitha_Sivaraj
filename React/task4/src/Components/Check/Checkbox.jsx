import React, { Component } from 'react'
import './Checkbox.css'
 class Checkbox extends Component {
  render() {
    return (
      <div>
        <input type="text" className={this.props.classname} onchange={this.handle}/>
      </div>
    )
  }
}

export default Checkbox
