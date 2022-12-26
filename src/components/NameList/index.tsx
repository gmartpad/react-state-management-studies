import { useState } from "react"
import useWindowSize from "../../hooks/useWindowSize"

export default function NameList() {
  const [list, setList] = useState(['Jack', 'Jill', 'John'])
  const [name, setName] = useState(() => '')

  const { windowSize } = useWindowSize()

  function addNameToList(newName: string) {
    setList(previousState => [...previousState, newName])
    setName('')
  }

  return (
    <div className="w-4/5 mx-auto">
      <span className="flex flex-col items-center my-6 text-center">
        <p>The Name list, the input and the button below are being handled using the React useState hook</p>
      </span>
      <div className={windowSize.innerWidth <= 768 ?`flex flex-col-reverse`:`flex justify-center`}>
        <div className="flex flex-col items-center">
          <p className="font-bold">Name List:</p>
          <ul className="flex flex-col items-center">
            {list.map((n, i) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
        <div className={windowSize.innerWidth <= 768 ?`flex flex-col justify-end items-center`:`flex justify-end items-center pl-8`}>
          <input 
            className={[`flex-1 my-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`, windowSize.innerWidth <= 768 ? `w-full` : `w-1/3`].join(' ')}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className={[`my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`, windowSize.innerWidth <= 768 ? `mx-2 w-full` : `ml-2`].join(' ')}
            onClick={() => addNameToList(name)}
          >
            Add name
          </button>
        </div>
      </div>
    </div>
  )
}