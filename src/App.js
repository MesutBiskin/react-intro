import './App.css';
import DateComponent from './component/DateComponent';
import ChildComponent from './component/ChildComponent';
import CoffeesComponent from './component/CoffeesComponent';

function App() {
  // all javascript world
  
 

  return (
    <div className="App">
      <header className="App-header">
        <CoffeesComponent/>
       <ChildComponent />
       <DateComponent />
       
        
      </header>
    </div>
  );
}

export default App;
