import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetch(){

  const [post, setPost] = useState({})
  const [count, setCount] = useState(1)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com1/posts/${count}`)
      .then(res => {
        console.log(res.data)
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
        setError(error='unable to fetch data')

      })

  }, [count])

  return (
    <div>
      <button type='button' onClick={() => setCount(count - 1)}>prev post</button>
      <button type='button' onClick={() => setCount(count + 1)}>next post</button>
      <div>
        <p>{post.body}</p>
        <h1 className ="error">{error}</h1>
      </div>
    </div>
  )
}

export default DataFetch;