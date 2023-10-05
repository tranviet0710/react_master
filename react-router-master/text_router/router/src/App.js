
import './App.css';
import Browser from './components/Router/Browser';
import Nav from './components/Router/Nav';
import LinkRouter from './components/Router/LinkRouter';
import NavigateRouter from './components/Router/NavigateRouter';
import { BrowserRouter } from 'react-router-dom';
import SwitchRouter from './components/Router/SwitchRouter';
import NestedRouter from './components/Router/NestedRouter';

function App() {
  return (
    <div>
      {/* Demo Browser Router */}
      {/* <Browser /> */}

      {/* Demo NavLink */}
      {/* <Nav /> */}

      {/* Demo Link */}
      <LinkRouter />

      {/* Demo Navigate */}
      {/* <BrowserRouter>
        <NavigateRouter />
      </BrowserRouter> */}

      {/* Demo Outlet */}

      {/* Demo Switch */}
      {/* <SwitchRouter /> */}

      {/* Demo Nested Router */}
      {/* <NestedRouter /> */}

    </div>
  );
}

export default App;
