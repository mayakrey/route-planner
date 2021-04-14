import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {PositionContextProvider} from './context/positionContext';
import SidePanel from './components/SidePanel/SidePanel';
import Map from './components/Map/Map';
import './App.css';

const App = () => {
  return (
    <PositionContextProvider>
      <Router>
        <Switch>
          <Route path="/">
            <div className="grid">
              <SidePanel/>
            </div>
            <div className="grid">
              <Map/>
            </div>
          </Route>
        </Switch>
      </Router>
    </PositionContextProvider>
  );
}

export default App;
