import './App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Counter from './components/Counter'
import NameList from './components/NameList'
import ReducerNameList from './components/ReducerNameList';
import UserForm from './components/UserForm';
import { useState, useMemo } from 'react'

function UseMemoComponent() {
  const [numbers] = useState([10, 20, 30])

  const total = useMemo(() => {
    numbers.reduce((acc, number) => acc + number, 0)
  }, [numbers])

  // 

  const [names] = useState(['John', 'Paul', 'Ringo', 'George'])

  const sortedNames = useMemo(() => {
    return [...names].sort()
  }, [names])

  // 

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const countTotal = count1 + count2

  return (
    <div>
      Total: {total}
      <p>Names</p>
      <ul>
        <li>Names: {names.join(', ')}</li>
        <li>Sorted Names: {sortedNames.join(', ')}</li>
      </ul>
      <p>Counts</p>
      <ul>
        <li>count1: {count1}</li>
        <li>count2: {count2}</li>
        <li>countTotal: {countTotal}</li>
      </ul>
      <p>Count1:</p>
      <button onClick={() => setCount1(oldValue => oldValue + 1)}>Increase count1: {count1}</button>
      <button onClick={() => setCount1(oldValue => oldValue - 1)}>Decrease count1: {count1}</button>
      <p>Count2:</p>
      <button onClick={() => setCount2(oldValue => oldValue + 1)}>Increase count2: {count2}</button>
      <button onClick={() => setCount2(oldValue => oldValue - 1)}>Decrease count2: {count2}</button>
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
        <UseMemoComponent/>
      </TabPanel>
    </Tabs>
  )
}

export default App
