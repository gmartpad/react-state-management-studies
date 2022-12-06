import React from "react";
import SearchBox from "../SearchBox";
import PokemonList from "../PokemonList";

export default function ContextHooksComponent() {

  return (
    <div className="mx-auto max-w-3xl">
      <SearchBox/>
      <PokemonList/>
    </div>
  )
}