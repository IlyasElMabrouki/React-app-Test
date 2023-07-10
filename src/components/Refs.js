import React, { Component } from 'react'

export class Ref extends Component {

    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    clickHandler = ()=>{
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <>
                <input type='text' ref={this.inputRef}></input>
                <button onClick={this.clickHandler}>CLICK</button>
            </>
        )
    }
}

export default Ref