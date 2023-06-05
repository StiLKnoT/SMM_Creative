import './App.css';
import {lazy} from 'react';
// import First from './components/Fisrt/First';
// import Second from './components/Second/Second';
// import Success from './components/atom/succes/Success';


const First = lazy(() => import("./components/Fisrt/First"));
const Second = lazy(() => import("./components/Second/Second"));
const Success = lazy(() => import("./components/atom/succes/Success"));

function App() {
  return (
    <div className="App">
      <Success/>
      <First/>
      <Second />

    </div>
  );
}

export default App;