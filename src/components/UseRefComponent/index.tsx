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
      <span className="flex flex-col items-center my-6 text-center">
        <p>The Names list, the input and the button below are being handled using the React useRef hook</p>
      </span>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <p className="font-bold">Names list</p>
          <div>
            {names!.map((nameObject, key) => (
              <div key={key}>{nameObject.id} - {nameObject.name}</div>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center pl-8">
          <input
            placeholder="Name"
            className="flex-1 my-2 shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            ref={inputRef}
          />
          <button
            className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={handleAddName}
          >
            Add name
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseRefComponent