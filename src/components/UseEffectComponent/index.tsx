import { useState, useEffect } from 'react'
import Divider from '../Divider';
import Stopwatch from '../Stopwatch';

interface IName {
  id: number
  name: string
}

function UseEffectComponent() {

  const [names, setNames] = useState<string[]>([])
  
  useEffect(() => {
    fetch("/names.json")
    .then((res) => res.json())
    .then((data) => setNames(data))
    .catch((e) => console.error('Error Message (catch): ', e))
  }, [])
  
  const [selectedName, setSelectedName] = useState<string|null>(null)
  const [selectedNameDetails, setSelectedNameDetails] = useState<IName|null>(null)

  const handleSelectedNameChange = (name: string) => {
    fetch(`/${name}.json`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedName(data.name)
        setSelectedNameDetails(data)
      })
      .catch((e) => console.error('Error Message (catch): ', e))
  }
  return (
    <div className="w-4/5 mx-auto">
      <span className="flex flex-col items-center my-6 text-center">
        <p>The stopwatch below is being handled using the React useState and useEffect hooks, and fetch method</p>
      </span>
      <div className="flex justify-center">
        <Stopwatch/>
      </div>
      <Divider/>
      <span className="flex flex-col items-center my-6 text-center">
        <p>The Name buttons below are being handled using the React useState and useEffect hooks, and useInterval and clearInterval methods</p>
      </span>
      <div className="flex justify-around items-center mb-6">
        {names.map((name, key) => (
          <button
            style={{
              backgroundColor: name === selectedName?.split(' ')[0].toLowerCase() ? 'green' : 'blue'
            }}
            className="text-white font-bold py-2 px-4 rounded"
            key={key}
            onClick={() => handleSelectedNameChange(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <div>Selected Name: {JSON.stringify(selectedName)}</div>
        <div>Selected Name Details: {JSON.stringify(selectedNameDetails)}</div>
      </div>
    </div>
  )
}

export default UseEffectComponent