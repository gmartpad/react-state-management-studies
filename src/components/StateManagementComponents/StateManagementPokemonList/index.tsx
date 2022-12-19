import {
  Link,
} from "@tanstack/react-location"
import { Pokemon } from '../../../stores/reduxStore'
import PokemonImage from '../../PokemonImage'

interface IStateManagementPokemonList {
  pokemonList: Pokemon[]
}

export default function StateManagementPokemonList({ pokemonList }: IStateManagementPokemonList)  {
  if(pokemonList.length === 0) return (
    <div className="flex justify-center items-center w-full my-6">
      <p>There are no results for your search</p>
    </div>
  )

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {pokemonList.map((p) => (
        <Link
          key={p.id}
          to={`/pokemon/${p.id}`}
        >
          <li key={p.id} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="flex-1 flex flex-col p-8">
              <PokemonImage pokemon={p}/>
              <h3 className="mt-6 text-gray-900 text-sm font-medium">{p.name}</h3>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}