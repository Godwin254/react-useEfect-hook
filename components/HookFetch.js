//fetching data with UseEffect
import React, {UseEffect, useState} from 'react'
import axios from 'axios'

function HookFetch(){

  const [posts, setPost] = useState([]);

  UseEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <ul>
        {
          posts.map(post => {
            return(
              <React.fragment>
                <h4>{post.title}</h4>
                <h6>{post.body}</h6>
              </React.fragment>
            )
          })
        }
      </ul>
    </div>
  )
}