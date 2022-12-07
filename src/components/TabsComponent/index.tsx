import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Counter from "../Counter";
import MemoCallbackComponent from "../MemoCallbackComponent";
import NameList from "../NameList";
import ReducerNameList from "../ReducerNameList";
import UseEffectComponent from "../UseEffectComponent";
import UseRefComponent from "../UseRefComponent";
import UserForm from "../UserForm";

export default function TabsComponent() {
  
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
        <NameList/>
      </TabPanel>
      
      {/* useReducer */}
      <TabPanel>
        <ReducerNameList/>
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