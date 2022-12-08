import React from "react";
import ZustandSearchBox from "../ZustandSearchBox";
import ZustandPokemonList from "../ZustandPokemonList";

export default function ZustandApp() {

  return (
    <div className="mx-auto max-w-3xl">
      <ZustandSearchBox/>
      <ZustandPokemonList/>
    </div>
  )
}