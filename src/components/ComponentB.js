import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentB extends Component {
  render() {
    return (
        <UserConsumer>
        {
            (username) => {
                return <h2> Hello {username} </h2>
            }
        }
        </UserConsumer>
    )
  }
}

export default ComponentB