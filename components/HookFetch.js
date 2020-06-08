//fetching data with UseEffect
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function HookFetch(){

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <ul>
        {
          posts.map(post => {
            return(
             <h4>
             {post.body}
             </h4>
            )
          })
        }
      </ul>
    </div>
  )
}

export default HookFetch