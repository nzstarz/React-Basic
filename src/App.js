import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';
import Arrow from './mycomponents/arrow';
import Welcomesate from './mycomponents/Welcomestate';
import ChangeStateValue from './mycomponents/ChangeStateValue';
import ConditionalStatement from './mycomponents/ConditionalStatement';
import ConditionVarElements from './mycomponents/ConditionVarElements';
import Refresh from './mycomponents/Refresh';

function App() {
  return (
    <div className="App">
     <Hello age="22" name="Nazmul"></Hello>
    

     <Welcome name="Six"></Welcome>
     <Arrow></Arrow>

     <Welcomesate></Welcomesate>

     <ChangeStateValue></ChangeStateValue>
    <br></br>
     <ConditionalStatement></ConditionalStatement>
     <br></br>
     <ConditionVarElements></ConditionVarElements>
     <br></br>
     <Refresh></Refresh>
    
    </div>
  )
}

export default App;
