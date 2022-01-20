import {Header} from "./components/Header.jsx";
import {Balance} from "./components/Balance.jsx";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="container">
        <Balance></Balance>
      </div>
    </div>
  );
}

export default App;
