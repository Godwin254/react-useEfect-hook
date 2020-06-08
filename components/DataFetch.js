import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetch(){

  const [post, setPost] = useState({})
  const [count, setCount] = useState(1)

  useEffect(() => {
    
  })

  return (
    <div>
      <button type='button'>next post</button>
      <button type='button'>prev post</button>
      <div>
      
      </div>
    </div>
  )
}