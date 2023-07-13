import './App.css';
import ComponentA from './Components/ConponentA';
import { UserProvider } from './Components/userContext'

function App() {
  return (
    <div className="App">
      <UserProvider value="ilyas">
            <ComponentA></ComponentA>
        </UserProvider>
    </div>
  );
}

export default App;
