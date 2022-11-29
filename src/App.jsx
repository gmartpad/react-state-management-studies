import './App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Counter from './components/Counter'
import NameList from './components/NameList'
import ReducerNameList from './components/ReducerNameList';
import UserForm from './components/UserForm';

function App() {

  return (
    <Tabs
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <TabList>
        <Tab>useState</Tab>
        <Tab>useReducer</Tab>
      </TabList>

      {/* useState */}
      <TabPanel>
        <Counter/>
        <NameList/>
      </TabPanel>
      
      {/* useReducer */}
      <TabPanel>
        <ReducerNameList/>
        <UserForm/>
      </TabPanel>
    </Tabs>
  )
}

export default App
