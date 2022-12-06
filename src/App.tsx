import React from 'react'
import './App.css'
import ContextHooksComponent from './components/ContextHooksComponent';
import { PokemonProvider } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  ReactLocation,
  Router,
} from "@tanstack/react-location"
import TabsComponent from './components/TabsComponent';
import PokemonDetails from './components/PokemonDetails';

const routes = [
  {
    path: '/',
    element: (
      <TabsComponent/>
    )
  },
  {
    path: '/pokemon/:id',
    element: (
      <PokemonDetails/>  
    )
  },
  {
    path: '/pokemon',
    element: (
      <ContextHooksComponent/>
    )
  },
]

const queryClient = new QueryClient()
const location = new ReactLocation();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>
        <Router location={location} routes={routes}>
          <div className="mx-auto max-w-3xl">
            <Outlet/>
          </div>
        </Router>
      </PokemonProvider>
    </QueryClientProvider>
  )
}

export default App
