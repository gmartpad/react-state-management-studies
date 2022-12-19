import { PokemonProvider } from "./stores/reactQueryStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  Outlet,
  ReactLocation,
  Router,
} from "@tanstack/react-location"
import NativeReactStateManagement from './components/NativeReactStateManagement';
import PokemonDetails from './components/PokemonDetails';
import LibStateManagement from "./components/LibStateManagement";
import { Provider } from "react-redux";
import { store } from "./stores/reduxStore";
import { Suspense } from "react";

const routes = [
  {
    path: '/',
    element: (
      <NativeReactStateManagement/>
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
      <LibStateManagement/>
    )
  },
]

const queryClient = new QueryClient()
const location = new ReactLocation();

function App() {

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Router location={location} routes={routes}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <PokemonProvider>
                <div className="mx-auto max-w-3xl">
                  <Outlet/>
                </div>
            </PokemonProvider>
          </QueryClientProvider>
        </Provider>
      </Router>
    </Suspense>
  )
}

export default App
