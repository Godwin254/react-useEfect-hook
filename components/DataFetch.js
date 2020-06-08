import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetch(){

  const [post, setPost] = useState({})
  const [count, setCount] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${count}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => console.log(err))
  })

  return (
    <div>
      <button type='button' onClick={() => setCount(count + 1)}>next post</button>
      <button type='button' onClick={() => setCount(count - 1)}>prev post</button>
      <div>
      
      </div>
    </div>
  )
}