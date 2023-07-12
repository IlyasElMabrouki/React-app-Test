import React, { Component } from 'react'
import withCounter from './withCounter'

class Counter extends Component {
    render() {
        const {increment, count, name} = this.props;
        return (
        <>
            <h1>{name}</h1>
            <button onClick={increment}>Clicked {count} times </button>
        </>
        )
    }
}

export default withCounter(Counter,5)

