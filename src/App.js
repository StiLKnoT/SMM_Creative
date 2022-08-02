import logo from './logo.svg';
import './App.css';

import First from './components/Fisrt/First';
import Second from './components/Second/Second';
import Success from './components/atom/succes/Success';


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