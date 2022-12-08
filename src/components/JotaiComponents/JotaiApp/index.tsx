import JotaiSearchBox from "../JotaiSearchBox";
import JotaiPokemonList from "../JotaiPokemonList";

export default function JotaiApp() {

  return (
    <div className="mx-auto max-w-3xl">
      <JotaiSearchBox/>
      <JotaiPokemonList/>
    </div>
  )
}