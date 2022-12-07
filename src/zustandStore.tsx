import React, { useContext, useEffect, useState, createContext, useReducer, useCallback, useMemo } from 'react'
import create from 'zustand'

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

const searchAndSort = (pokemon: Pokemon[], search: string) =>
  pokemon
    .filter((p: Pokemon) => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    .slice(0, 10)
    .sort((a: Pokemon, b: Pokemon) => a.name.localeCompare(b.name))

export const usePokemon = create<{
  pokemon: Pokemon[]
  allPokemon: Pokemon[]
  setAllPokemon: (pokemon: Pokemon[]) => void
  search: string
  setSearch: (search: string) => void
}>((set, get) => ({
  pokemon: [],
  allPokemon: [],
  setAllPokemon: (pokemon) => 
    set({ 
      allPokemon: pokemon, 
      pokemon: searchAndSort(pokemon, get().search) 
    }),
  search: "",
  setSearch: (search) => 
    set({ 
      search: search,
      pokemon: searchAndSort(get().allPokemon, search)
    })
}))

fetch("/pokemon.json")
  .then((res) => res.json())
  .then((pokemon) => {
    usePokemon.getState().setAllPokemon(pokemon)
  })