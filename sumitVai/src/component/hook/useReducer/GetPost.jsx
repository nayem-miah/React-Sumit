

// with useState........................
import React from 'react'

export default function GetPost() {

const  [loading, setLoading] = React.useState(true)  
const  [error, setError] = React.useState('')  
const  [post, setPost] = React.useState({})  

React.useEffect(() =>{
 
     fetch('http://jsonplaceholder.typicode.com/posts/5')
        .then((response) => response.json())
        .then((data) => {
           setLoading(false);
           setPost(data);
           setError('');
        })
        .catch(() => { 
            setLoading(false);
            setPost({});
            setError('There was an error fetching');


        })
  
},[]);

  return (
    <div>
  
        <h1>{post.id}</h1>
        <h1>{post.title}</h1>
        <h1>{post.body}</h1>
        {error || null }
    </div>
  )
}




