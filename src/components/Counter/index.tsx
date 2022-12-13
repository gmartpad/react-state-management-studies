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
    <div className="flex flex-col items-center w-4/5 mx-auto">
      <span className="flex flex-col items-center my-6 text-center">
        <p>The Button below, when clicked, will increase its count using a react state setter, provided by the useState hook</p>
        <p>The "count" initial state is set to 10</p>
      </span>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addOne}
      >
        Count = {count}
      </button>
    </div>
  )
}