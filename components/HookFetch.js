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

        }
      </ul>
    </div>
  )
}