import { Provider } from 'react-redux';

import CustomHook from './components/demoCustomHook/CustomHook';
import Mounting from './components/demoLifeMounting/Mounting';
import UnMounting from './components/demoLifeUnmounting/UnMounting';
import Updating from './components/demoLifeUpdating/Updating';
import Props from './components/demoProps/Props';
import StateClass from './components/demoStateClassComponent/StateClass';
import ParentComponent from './components/demoUseCallback/ParentComponent';
import UseContext from './components/demoUseContext/UseContext';
import UseEffect from './components/demoUseEffect/UseEffect';
import UseMemo from './components/demoUseMemo/UseMemo';
import UseReducer from './components/demoUseReducer/UseReducer';
import UseRef from './components/demoUseRef/UseRef';
import UseState from './components/demoUseState/UseState';
import store from './components/demoRedux/store';
import Counter from './components/demoRedux/Counter';

import Test from './components/demoUseCallback/Test';
import { storeToolkit } from './components/demoReduxToolkit/storeToolkit';
import CounterToolkit from './components/demoReduxToolkit/CounterToolkit';
import UserList from './components/demoReduxSaga/UserList';
import storeSata from './components/demoReduxSaga/storeSaga';

function App() {
  return (
    <>
      <h1>DEMO</h1>
      {/* demo state trong class components */}
      {/* <StateClass /> */}

      {/* demo mounting trong vòng đời */}
      {/* <Mounting /> */}

      {/* demo updating trong vòng dời */}
      {/* <Updating /> */}

      {/* demo unmounting trong vòng đời */}
      {/* <UnMounting /> */}

      {/* demo props trong class components */}
      {/* <Props /> */}

      {/* demo useState */}
      {/* <UseState /> */}

      {/* demo useReducer */}
      {/* <UseReducer /> */}

      {/* demo useEffect */}
      {/* <UseEffect /> */}

      {/* demo useContext  */}
      {/* <UseContext /> */}

      {/* demo useRef */}
      {/* <UseRef /> */}

      {/* demo useCallBack */}
      {/* <ParentComponent /> */}
      {/* <Test /> */}

      {/* demo useMemo */}
      {/* <UseMemo /> */}

      {/* demo custom hook */}
      {/* <CustomHook /> */}

      {/* demo redux */}
      {/* <Provider store={store}>
        <Counter />
      </Provider> */}

      {/* demo Redux toolkit */}
      <Provider store={storeToolkit}>
        <CounterToolkit />
      </Provider>

      {/* demo redux saga */}
      {/* <Provider store={storeSata}>
        <UserList />
      </Provider> */}
    </>
  );
}

export default App;
