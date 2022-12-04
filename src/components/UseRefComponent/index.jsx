import { useRef, useEffect, useState } from 'react'

function UseRefComponent() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const idRef = useRef(1);

  const [names, setNames] = useState([
    { id: idRef.current++, name: 'Jane' },
    { id: idRef.current++, name: 'John' }
  ])

  const handleAddName = () => {
    setNames([...names, 
      {
        id: idRef.current++,
        name: inputRef.current.value
      }
    ])
    inputRef.current.values = ''
  }

  return (
    <div>
      <div>
        {names.map((nameObject, key) => (
          <div key={key}>{nameObject.id} - {nameObject.name}</div>
        ))}
      </div>
      <input type="text" ref={inputRef}/>
      <button onClick={handleAddName}>
        Add name
      </button>
    </div>
  )
}

export default UseRefComponent