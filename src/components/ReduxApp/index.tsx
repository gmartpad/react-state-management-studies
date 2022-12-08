import React from "react";
import { Provider } from "react-redux"
import { store } from "../../reduxStore";
import ReduxSearchBox from "../ReduxSearchBox";
import ReduxPokemonList from "../ReduxPokemonList";

export default function ReduxApp() {

  return (
    <Provider store={store}>
      <div className="mx-auto max-w-3xl">
        <ReduxSearchBox/>
        <ReduxPokemonList/>
      </div>
    </Provider>
  )
}