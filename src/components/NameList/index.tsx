import { useState } from "react"

export default function NameList() {
  const [list, setList] = useState(['Jack', 'Jill', 'John'])
  const [name, setName] = useState(() => 'Jeff')

  function addNameToList(newName: string) {
    setList(previousState => [...previousState, newName])
    setName('')
  }

  return (
    <div className="w-4/5 mx-auto">
      <span className="flex flex-col items-center my-6 text-center">
        <p>The Name list, the input and the button below are being handled using the React useState hook</p>
      </span>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <p className="font-bold">Name List:</p>
          <ul className="flex flex-col items-center">
            {list.map((n, i) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end items-center pl-8">
          <input 
            className="flex-1 my-2 shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => addNameToList(name)}
          >
            Add name
          </button>
        </div>
      </div>
    </div>
  )
}