import React, { Component } from 'react'

export default class PersonClass extends Component {
  render() {
    return (
    <>
      <div>PersonClass</div>
      <span>{this.props.name}</span>
      <span>{this.props.surname}</span>
      <span>{this.props.age}</span>
    </>
    )
  }
}
