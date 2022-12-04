import { useState, useEffect } from 'react'

function Stopwatch() {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(oldTime => oldTime + 1)
    }, 1000)
    
    return () => clearInterval(intervalID)
  }, [])

  return (
    <div>
      <p>Time: {time}</p>
    </div>
  )
}

export default Stopwatch