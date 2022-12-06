import React, { useRef, useEffect, useState } from 'react'

interface IName {
  id: number
  name: string
}

function UseRefComponent() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  const idRef = useRef(1);

  const [names, setNames] = useState<IName[]>([
    { id: idRef.current++, name: 'Jane' },
    { id: idRef.current++, name: 'John' }
  ])

  const handleAddName = () => {
    setNames([...names, 
      {
        id: idRef.current++,
        name: inputRef?.current?.value!
      }
    ])
    inputRef.current!.value = ''
  }

  return (
    <div>
      <div>
        {names!.map((nameObject, key) => (
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