import React from 'react'
import { useSnapshot } from 'valtio';

import { search } from '../../../stores/valtioStore'

export default function ValtioSearchBox() {
  const snap = useSnapshot(search)
  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      value={snap.query}
      onChange={(e) => {
        search.query = e.target.value
      }}
    />
  );
}