import React, { useEffect } from 'react'
import { usePokemon } from "../../zustandStore";

export default function ZustandSearchBox() {
  const search = usePokemon((state) => state.search)
  const setSearch = usePokemon((state) => state.setSearch)
  
  useEffect(() => {
    console.log(search)
  }, [search])

  useEffect(() => {
    console.log(setSearch)
  }, [setSearch])

  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
 }