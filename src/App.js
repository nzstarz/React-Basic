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
import ReactDomPractice from './mycomponents/ReactDomPractice';
import FindDomNode from './mycomponents/FindDomNode';
import Form from './mycomponents/Form';
import Signup from './mycomponents/Signup';
import Text from './mycomponents/Text';

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
     <br></br>
     <ReactDomPractice></ReactDomPractice>
     <br></br>
     <FindDomNode></FindDomNode>
     <br></br>
     <Form></Form>
     <br></br>
     <Signup></Signup>
     <br></br>
     <Text></Text>
     <br></br>
    
    </div>
  )
}

export default App;
