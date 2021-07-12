import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';
import Arrow from './mycomponents/arrow';
import Welcomesate from './mycomponents/Welcomestate';
import ChangeStateValue from './mycomponents/ChangeStateValue';

function App() {
  return (
    <div className="App">
     <Hello age="22" name="Nazmul"></Hello>
    

     <Welcome name="Six"></Welcome>
     <Arrow></Arrow>

     <Welcomesate></Welcomesate>

     <ChangeStateValue></ChangeStateValue>
    
    </div>
  )
}

export default App;
