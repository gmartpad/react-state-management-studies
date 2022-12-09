import React, { SetStateAction } from 'react'
import { useDispatch } from "react-redux"
import { AnyAction } from 'redux';

interface IStateManagementSearchBox {
  search: string
  setSearch: (search: string) => void
  isRedux?: boolean
}

export default function StateManagementSearchBox({search, setSearch, isRedux = false}: IStateManagementSearchBox) {

  const dispatch = useDispatch<any>()

  const searchFunction = isRedux 
    ? (value: string) => dispatch(setSearch(value))
    : (value: string) => setSearch(value)

  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      value={search}
      onChange={(e) => searchFunction(e.target.value)}
    />
  );
}