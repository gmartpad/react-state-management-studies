import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { RootState, selectSearch, setSearch } from '../../../stores/reduxStore';

export default function ReduxSearchBox() {

  const search = useSelector((state: RootState) => selectSearch(state))
  const dispatch = useDispatch()

  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      value={search}
      onChange={(e) => dispatch(setSearch(e.target.value))}
    />
  );
}