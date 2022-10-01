import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shops from './Components/Shops/Shops';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Shops></Shops>
    </div>
  );
}

export default App;
