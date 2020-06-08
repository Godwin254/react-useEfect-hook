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
      <input 
        type='text'
        value={name}
        onChange={(e) =>setName(e.target.value)}
      />

      <button type='button' onClick = {() => setCounter(count + 1)}>Click {count} times</button>
    
    </div>
  )
}