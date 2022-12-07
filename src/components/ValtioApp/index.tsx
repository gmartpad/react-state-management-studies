import React from "react";
import ValtioSearchBox from "../ValtioSearchBox";
import ValtioPokemonList from "../ValtioPokemonList";

export default function ValtioApp() {

  return (
    <div className="mx-auto max-w-3xl">
      <ValtioSearchBox/>
      <ValtioPokemonList/>
    </div>
  )
}