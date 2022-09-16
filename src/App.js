import './App.css';
import HighOrderComp from './Components/HigherOrderComp';
import Hover from './Components/Hover';
import ClickCount from './Components/counter'
import PureComp from './Components/PureComp';

function App() {
  return (
    <div className="App">
      <HighOrderComp/>
      <Hover/>
     
      <ClickCount/>
      <hr/><hr/>
      <PureComp/>
    </div>
  );
}

export default App;
