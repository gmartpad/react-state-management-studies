import { useMemo } from 'react'

function SortedList({ list, sortFunc }) {
  const sortedList = useMemo(() => {
    return [...list].sort(sortFunc)
  }, [list, sortFunc])
  return <div>Sorted List: {sortedList.join(', ')}</div>
}

export default SortedList