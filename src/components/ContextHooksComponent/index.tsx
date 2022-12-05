import React from "react";
import SearchBox from "../SearchBox";
import PokemonList from "../PokemonList";
import { PokemonProvider } from "../../store";

export default function ContextHooksComponent() {
  return (
    <PokemonProvider>
      <div className="mx-auto max-w-3xl">
        <SearchBox/>
        <PokemonList/>
      </div>
    </PokemonProvider>
  )
}