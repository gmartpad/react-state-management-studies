import SortedList from '../SortedList';
import React, { useState, useMemo, useCallback } from 'react'
import Divider from '../Divider';

function MemoCallbackComponent() {
  const [numbers] = useState([10, 20, 30])

  const total = useMemo(() => {
    return numbers.reduce((acc, number) => acc + number, 0)
  }, [numbers])

  // 

  const [names] = useState(['John', 'Paul', 'Ringo', 'George'])

  // 

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const countTotal = count1 + count2

  const sortFunc = useCallback((a: string, b: string) => a.localeCompare(b) * 1, [])

  return (
    <div className="w-4/5 mx-auto">
      <span className="flex flex-col items-center my-6 text-center">
        <p>The Number list is being handled using the React useMemo hook and the reduce method</p>
      </span>
      <div className="flex items-center flex-col">
        <p>Numbers list: {JSON.stringify(numbers)}</p>
        <p>Total sum of numbers in the numbers list: {JSON.stringify(total)}</p>
      </div>
      <Divider/>
      <span className="flex flex-col items-center my-6 text-center">
        <p>The Name list is being handled using the React useMemo and useCallback hook and the sort method</p>
      </span>
      <div className="flex items-center flex-col">
        <p className="font-bold">Names:</p>
        <p>Name List: {names.join(', ')}</p>
        <SortedList list={names} sortFunc={sortFunc} />
      </div>
      <Divider/>
      <span className="flex flex-col items-center my-6 text-center">
        <p>The Count below is being handled using the React useState hook</p>
      </span>
      <div className="flex items-center flex-col">
        <div className="flex flex-col items-center mb-4">
          <p className="font-bold">Counts</p>
          <ul className="flex items-center flex-col">
            <li>count1: {count1}</li>
            <li>count2: {count2}</li>
            <li>countTotal: {countTotal}</li>
          </ul>
        </div>
        <div className="flex flex-col items-center mb-4">
          <p>Count1:</p>
          <div>
            <button
              className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => setCount1(oldValue => oldValue + 1)}
            >
              Increase count1: {count1}
            </button>
            <button 
              className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => setCount1(oldValue => oldValue - 1)}
            >
              Decrease count1: {count1}
            </button>
          </div>
          <p>Count2:</p>
          <div>
            <button 
              className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => setCount2(oldValue => oldValue + 1)}
            >
              Increase count2: {count2}
            </button>
            <button
              className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => setCount2(oldValue => oldValue - 1)}
            >
              Decrease count2: {count2}
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default MemoCallbackComponent