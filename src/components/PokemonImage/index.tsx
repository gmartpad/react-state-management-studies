import { useEffect, useState } from "react"
import { Pokemon } from "../../stores/reduxStore"
import LoadingIndicator from "../LoadingIndicator"

interface IPokemonImage {
  pokemon: Pokemon
}

export default function PokemonImage({ pokemon }: IPokemonImage) {

  const [pokemonImageLoaded, setPokemonImageLoaded] = useState(false)
  
  return (
    <div className="relative flex justify-center items-center">
      {!pokemonImageLoaded && (
        <div
          className={`w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full`}
        >
          <LoadingIndicator/>
        </div>
      )}
      <img
        className={`w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full ${!pokemonImageLoaded && 'hidden'}`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={`${pokemon.name}`}
        onLoad={() => setPokemonImageLoaded(true)}
      />
    </div>
  )
}