import {PositionContextProvider} from './context/positionContext';
import SidePanel from './components/SidePanel/SidePanel';
import Map from './components/Map/Map';
import './App.css';

const App = () => {
  return (
    <PositionContextProvider>
      <div className="grid">
        <SidePanel/>
      </div>
      <div className="grid">
        <Map/>
      </div>
    </PositionContextProvider>
  );
}

export default App;
