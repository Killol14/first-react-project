import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
     <StatefulGreeting greeting="I am a stateful class component!" name="My name is killol "/>
    </div>
  );
}

export default App;
