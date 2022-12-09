import React, { SetStateAction } from "react";
import { Provider } from "react-redux"
import { AnyAction } from 'redux';
import { store } from "../../../stores/reduxStore";
import StateManagementSearchBox from "../StateManagementSearchBox";
import StateManagementPokemonList from "../StateManagementPokemonList";
import { Pokemon } from "../../../stores/reduxStore";

interface IStateManagementApp {
  pokemonList: Pokemon[]
  search: string
  setSearch: (search: string) => void
  isRedux?: boolean
}

export default function StateManagementApp({ pokemonList, search, setSearch, isRedux = false }: IStateManagementApp) {

  return (
    <div className="mx-auto max-w-3xl">
      <StateManagementSearchBox
        search={search}
        setSearch={setSearch}
        isRedux={isRedux}
      />
      <StateManagementPokemonList
        pokemonList={pokemonList}
      />
    </div>
  )
}