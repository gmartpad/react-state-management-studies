import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import StateManagementApp from '../StateManagementComponents/StateManagementApp';
import { useAtom, useAtomValue } from 'jotai';
import { searchAtom, sortedPokemonAtom } from '../../stores/jotaiStore';
import { usePokemon as usePokemonReactQuery } from '../../stores/reactQueryStore';
import { usePokemon as usePokemonZustand } from '../../stores/zustandStore'
import { useSnapshot } from 'valtio';
import { pokemon, search } from '../../stores/valtioStore';
import { useSelector } from 'react-redux';
import { RootState, selectPokemon, selectSearch, setSearch as setReduxSearch } from '../../stores/reduxStore';
import { Link } from '@tanstack/react-location';

export default function LibStateManagement() {

  // Jotai
  const jotaiPokemonList = useAtomValue(sortedPokemonAtom);
  const [jotaiSearch, jotaiSetSearch] = useAtom(searchAtom);
  
  // React Query
  const { 
    pokemon: reactQueryPokemonList,
    search: reactQuerySearch,
    setSearch: setReactQuerySearch
  } = usePokemonReactQuery()

  // Zustand
  const { 
    pokemon: zustandPokemonList, 
    search: zustandSearch,
    setSearch: setZustandSearch 
  } = usePokemonZustand((state) => state)

  // Valtio
  const snapPokemon = useSnapshot(pokemon) as typeof pokemon
  const snapSearch = useSnapshot(search) as typeof search
  const setValtioSearch = (searchString: string) => {
    search.query = searchString
  }

  // Redux
  const reduxPokemonList = useSelector(selectPokemon)
  const reduxSearch = useSelector((state: RootState) => selectSearch(state))

  function dispatch(arg0: { payload: string; type: "search/setSearch"; }): (search: string) => void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <div className="absolute flex justify-center items-center h-10 bg-blue-500 inset-0">
        <Link to="/" className="text-base font-medium text-white hover:text-gray-300 mx-6">
          <p>Home</p>
        </Link>
        <Link to="/pokemon" className="text-base font-medium text-white hover:text-gray-300 mx-6">
          <p>Pokemon</p>
        </Link>
      </div>
      <Tabs
        style={{
          position: 'absolute',
          top: 40,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <TabList>
          <Tab>Jotai</Tab>
          <Tab>React Query</Tab>
          <Tab>Zustand</Tab>
          <Tab>Valtio</Tab>
          <Tab>Redux</Tab>
        </TabList>

        {/* Jotai */}
        <TabPanel>
          <StateManagementApp
            pokemonList={jotaiPokemonList}
            search={jotaiSearch}
            setSearch={jotaiSetSearch}
          />
        </TabPanel>

        {/* React Query */}
        <TabPanel>
          <StateManagementApp
            pokemonList={reactQueryPokemonList}
            search={reactQuerySearch}
            setSearch={setReactQuerySearch}
          />
        </TabPanel>
        
        {/* Zustand */}
        <TabPanel>
          <StateManagementApp
            pokemonList={zustandPokemonList}
            search={zustandSearch}
            setSearch={setZustandSearch}
          />
        </TabPanel>

        {/* Valtio */}
        <TabPanel>
          <StateManagementApp
            pokemonList={snapPokemon.list}
            search={snapSearch.query}
            setSearch={setValtioSearch}
          />
        </TabPanel>

        {/* Redux */}
        <TabPanel>
          <StateManagementApp
            pokemonList={reduxPokemonList}
            search={reduxSearch}
            setSearch={setReduxSearch}
            isRedux={true}
          />
        </TabPanel>
      </Tabs>
    </>
  )
}