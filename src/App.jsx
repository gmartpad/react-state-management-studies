import { useState } from 'react'
import './App.css'

function NameList() {
  const [list, setList] = useState(['Jack', 'Jill', 'John'])
  const [name, setName] = useState(() => 'Jeff')

  function addNameToList(newName) {
    setList(previousState => [...previousState, newName])
    setName('')
  }

  return (
    <div>
      <ul>
        {list.map((n, i) => (
          <li key={n}>{n}</li>
        ))}
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => addNameToList(name)}
        >Add name</button>
      </ul>
    </div>
  )
}

function Counter() {
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

function App() {
  return (
    <div>
      <Counter/>
      <NameList/>
    </div>
  )
}

export default App
