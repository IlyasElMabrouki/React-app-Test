import React, { Component } from 'react'
import ComponentB from './ComponentB'

export class ConponentA extends Component {
  render() {
    return (
      <ComponentB></ComponentB>
    )
  }
}

export default ConponentA