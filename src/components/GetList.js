import React, { Component } from 'react'
import axios from 'axios'

class GetList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         error : ''
      }
    }
    render() {
        const {posts, error} = this.state
        return (
            <div>
            List of Posts
            {
                posts.length ? 
                posts.map(post => <div key={post.id}>{post.title}</div>) : null
            }
            {
                error ?
                <div>{error}</div> : null
            }
            </div>
        )
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                console.log(response);
                this.setState({posts: response.data})
            })
            .catch(err=>{
                console.log(err);
                this.setState({error: 'Error Retreving data'})
            })
    }
}

export default GetList