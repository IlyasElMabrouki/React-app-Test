import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [postId,setPostId] = useState('');
    const [post,setPost] = useState({});

    useEffect(()=> {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res=>{
                setPost(res.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[postId])

    return (
        <div>
            <input type='text' value={postId} onChange={e => setPostId(e.target.value)}/>
            <h2>{post.title}</h2>
        </div>
        
    )
}

export default DataFetching