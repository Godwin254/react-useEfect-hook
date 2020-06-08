import React, {useState, useEfffect} from 'react';

function HookCounter(){

  const [count, setCount] = useState(0)
 
  return (
    <div>
      <h1>Count: {count}</h1>
      <button type='button' onclick={setCount(prevCount => prevCount + 1)}>Click count</button>
    </div>
  )
}

export default HookCounter

