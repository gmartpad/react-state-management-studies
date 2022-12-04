import './App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Counter from './components/Counter'
import NameList from './components/NameList'
import ReducerNameList from './components/ReducerNameList';
import UserForm from './components/UserForm';
import MemoCallbackComponent from './components/MemoCallbackComponent';
import { useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(oldTime => oldTime + 1)
    }, 1000)
    
    return () => clearInterval(intervalID)
  }, [])

  return (
    <div>
      <p>Time: {time}</p>
    </div>
  )
}

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

function App() {

  return (
    <Tabs
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <TabList>
        <Tab>useState</Tab>
        <Tab>useReducer</Tab>
        <Tab>useMemo & useCallback</Tab>
        <Tab>useEffect</Tab>
      </TabList>

      {/* useState */}
      <TabPanel>
        <Counter/>
        <NameList/>
      </TabPanel>
      
      {/* useReducer */}
      <TabPanel>
        <ReducerNameList/>
        <UserForm/>
      </TabPanel>

      {/* useMemo & useCallback */}
      <TabPanel>
        <MemoCallbackComponent/>
      </TabPanel>

      {/* useEffect */}
      <TabPanel>
        <UseEffectComponent/>
      </TabPanel>
    </Tabs>
  )
}

export default App
