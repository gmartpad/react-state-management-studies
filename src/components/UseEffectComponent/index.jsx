import { useState, useEffect } from 'react'
import Stopwatch from '../Stopwatch';

function UseEffectComponent() {

  const [names, setNames] = useState([])
  
  useEffect(() => {
    fetch("/names.json")
    .then((res) => res.json())
    .then((data) => setNames(data))
    .catch((e) => console.error('Error Message (catch): ', e))
  }, [])
  
  const [selectedName, setSelectedName] = useState(null)
  const [selectedNameDetails, setSelectedNameDetails] = useState(null)

  const handleSelectedNameChange = (name) => {
    fetch(`/${name}.json`)
      .then((res) => res.json())
      .then((data) => setSelectedNameDetails(data))
      .catch((e) => console.error('Error Message (catch): ', e))
  }
  return (
    <div>
      <Stopwatch/>
      <div>
        {names.map((name, key) => (
          <button 
            key={key}
            onClick={() => handleSelectedNameChange(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div>{JSON.stringify(selectedName)}</div>
      <div>Selected Name Details: {JSON.stringify(selectedNameDetails)}</div>
    </div>
  )
}

export default UseEffectComponent