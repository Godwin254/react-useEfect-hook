import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetch(){

  const [post, setPost] = useState({})
  const [count, setCount] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${count}`)
      .then(res => {
        console.log(res.data)
        setPost(res.data)
      })
      .catch(err => console.log(err))
  }, [post])

  return (
    <div>
      <button type='button' onClick={() => setCount(count - 1)}>prev post</button>
      <button type='button' onClick={() => setCount(count + 1)}>next post</button>
      <div>
        {post.body}
      </div>
    </div>
  )
}

export default DataFetch;