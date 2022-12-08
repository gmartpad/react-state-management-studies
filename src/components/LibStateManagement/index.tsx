import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ReduxApp from '../ReduxComponents/ReduxApp';
import ReactQueryApp from '../ReactQueryComponents/ReactQueryApp';
import ZustandApp from '../ZustandComponents/ZustandApp';
import ValtioApp from '../ValtioComponents/ValtioApp';
import JotaiApp from '../JotaiComponents/JotaiApp';

export default function LibStateManagement() {
  
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
        <Tab>Jotai</Tab>
        <Tab>React Query</Tab>
        <Tab>Zustand</Tab>
        <Tab>Valtio</Tab>
        <Tab>Redux</Tab>
      </TabList>

      {/* Jotai */}
      <TabPanel>
        <JotaiApp/>
      </TabPanel>

      {/* React Query */}
      <TabPanel>
        <ReactQueryApp/>
      </TabPanel>
      
      {/* Zustand */}
      <TabPanel>
        <ZustandApp/>
      </TabPanel>

      {/* Valtio */}
      <TabPanel>
        <ValtioApp/>
      </TabPanel>

      {/* Redux */}
      <TabPanel>
        <ReduxApp/>
      </TabPanel>
    </Tabs>
  )
}