import React, { Component } from 'react'
import './Input.css'
class Input extends Component {
    render() {
        return (
            <div>
                <input className={this.props.class} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}/>
            </div>
        )
    }
}

export default Input
