import './App.css';
import Greet from './components/greet'
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      <Greet name="Ilyas El Mabrouki">
        <p>TEST</p>
      </Greet>
      <Welcome name="Ilyas El Mabrouki">
        <p>TEST</p>
      </Welcome>
    </div>
  );
}

export default App;
