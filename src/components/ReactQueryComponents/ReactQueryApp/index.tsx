import React from "react";
import ReactQuerySearchBox from "../ReactQuerySearchBox";
import PokemonList from "../ReactQueryPokemonList";

export default function ReactQueryApp() {

  return (
    <div className="mx-auto max-w-3xl">
      <ReactQuerySearchBox/>
      <PokemonList/>
    </div>
  )
}