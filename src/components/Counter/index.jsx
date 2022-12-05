import React, { useState } from "react"

export default function Counter() {
  // The first value of the array that useState returns
  // is the actual value of the state.
  // The second value of the array is the setter function.
  // The argument that the 'useState' function itself receives
  // (in this case the int 10) is the initial value of the state
  const [count, setCount] = useState(10)

  function addOne() {
    setCount(previousState => previousState + 1)
  }

  return (
    <div className="App">
      <button
        onClick={addOne}
      >Count = {count}</button>
    </div>
  )
}