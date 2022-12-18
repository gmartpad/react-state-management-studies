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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PokemonProvider>
          <Router location={location} routes={routes}>
            <div className="mx-auto max-w-3xl">
              <div className="absolute flex justify-center items-center h-10 bg-blue-500 inset-0">
                <Link to="/" className="text-base font-medium text-white hover:text-gray-300 mx-6">Home</Link>
                <Link to="/pokemon"className="text-base font-medium text-white hover:text-gray-300 mx-6">Pokemon</Link>
              </div>
              <Outlet/>
            </div>
          </Router>
        </PokemonProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
