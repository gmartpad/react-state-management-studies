import SortedList from '../SortedList';
import { useState, useMemo, useCallback } from 'react'

function MemoCallbackComponent() {
  const [numbers] = useState([10, 20, 30])

  const total = useMemo(() => {
    numbers.reduce((acc, number) => acc + number, 0)
  }, [numbers])

  // 

  const [names] = useState(['John', 'Paul', 'Ringo', 'George'])

  // 

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const countTotal = count1 + count2

  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, [])

  return (
    <div>
      Total: {total}
      <p>Names</p>
      <p>Name List: {names.join(', ')}</p>
      <SortedList list={names} sortFunc={sortFunc} />
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

export default MemoCallbackComponent