import logo from './logo.svg';
import './App.css';

import First from './components/Fisrt/First';
import Second from './components/Second/Second';
import Succes from './assets/Succes/Succes';


function App() {
  return (
    <div className="App">
      
      <Succes />
      <First />
      <Second />

    </div>
  );
}

export default App;