//Run effect only once

import React, {useState, useEffect} from 'react'

function HookMouse() {
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)
  return (
    <div>
      HOOK-MOUSE-POSITION X -{X} Y-{Y}
    </div>
  )
}