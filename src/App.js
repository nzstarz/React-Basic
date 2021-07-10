import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';

function App() {
  return (
    <div className="App">
     <Hello age="22" name="Nazmul"></Hello>
     <Hello age="12" name="Hasan"></Hello>
     <Hello age="20" name="M"></Hello>
     <Hello age="15" name="Eqram"></Hello>

     <Welcome name="Nazmul"></Welcome>
     <Welcome name="Rafiz"></Welcome>
     <Welcome name="Isman"></Welcome>
    </div>
  )
}

export default App;
