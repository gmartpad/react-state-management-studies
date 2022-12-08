import React from 'react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  createSlice,
  configureStore,
  type PayloadAction,
  createSelector
} from "@reduxjs/toolkit"

export interface Pokemon {
  id: number
  name: string
  type: string[]
  hp: number
  attack: number
  defense: number
  special_attack: number
  special_defense: number
  speed: number
}

const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getPokemon: builder.query<Pokemon[], undefined>({
      query: () => "pokemon.json"
    })
  })
})

export const usePokemonQuery = pokemonApi.endpoints.getPokemon.useQuery

interface SearchState {
  search: string
}

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: ""
  },
  reducers: {
    setSearch: (state: SearchState, action: PayloadAction<string>) => {
      state.search = action.payload;
    }
  }
})

export const { setSearch } = searchSlice.actions

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    pokemonApi: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([pokemonApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>

export const selectSearch = (state: RootState) => state.search.search

store.dispatch(pokemonApi.endpoints.getPokemon.initiate(undefined))

export const selectPokemon = createSelector(
  (state: RootState) => 
    pokemonApi.endpoints.getPokemon.select(undefined)(state)?.data,
  (state: RootState) => state.search.search,
  (pokemon, search) => (pokemon || []).filter((p) => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    .slice(0, 10)
    .sort((a, b) => a.name.localeCompare(b.name))
)