//Run effect only once

import React, {useState, useEffect} from 'react'

function HookMouse() {
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)

  const logMousePosition = e =>{
    console.log('-useEffect- called')
    setX(e.clientX);
    setY(e.clientY);
  }
  return (
    <div>
      HOOK-MOUSE-POSITION X -{X} Y-{Y}
    </div>
  )
}