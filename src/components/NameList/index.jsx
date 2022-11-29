import { useState } from "react"

export default function NameList() {
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