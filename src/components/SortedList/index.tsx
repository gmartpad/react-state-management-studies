import { useMemo } from 'react'

interface ISortedList {
  list: string[]
  sortFunc: (a: string, b: string) => number
}

function SortedList({ list, sortFunc }: ISortedList) {
  const sortedList = useMemo(() => {
    return [...list].sort(sortFunc)
  }, [list, sortFunc])
  return <div>Sorted List: {sortedList.join(', ')}</div>
}

export default SortedList