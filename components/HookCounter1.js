//conditionally run effects

import React, {useEffect, useState} from 'react'

function HookCounter1(){

  const [count, setCounter] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('-useEffect-updating document title')
    document.title = `You clicked ${count} times`
  }, [count])

  return (

    <div>
    
    </div>
  )
}