import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';

function App() {
  return (
    <div className="App">
     <Hello age="22" name="Nazmul"></Hello>
    

     <Welcome name="Six"></Welcome>
    
    </div>
  )
}

export default App;
