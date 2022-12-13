import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Counter from "../Counter";
import MemoCallbackComponent from "../MemoCallbackComponent";
import NameList from "../NameList";
import ReducerNameList from "../ReducerNameList";
import UseEffectComponent from "../UseEffectComponent";
import UseRefComponent from "../UseRefComponent";
import UserForm from "../UserForm";
import Divider from '../Divider';

export default function NativeReactStateManagement() {
  
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
        <Tab>useMemo & useCallback</Tab>
        <Tab>useEffect</Tab>
        <Tab>useRef</Tab>
      </TabList>

      {/* useState */}
      <TabPanel>
        <Counter/>
        <Divider/>
        <NameList/>
      </TabPanel>
      
      {/* useReducer */}
      <TabPanel>
        <ReducerNameList/>
        <Divider/>
        <UserForm/> 
      </TabPanel>

      {/* useMemo & useCallback */}
      <TabPanel>
        <MemoCallbackComponent/>
      </TabPanel>

      {/* useEffect */}
      <TabPanel>
        <UseEffectComponent/>
      </TabPanel>

      {/* useRef */}
      <TabPanel>
        <UseRefComponent/>
      </TabPanel>
    </Tabs>
  )
}