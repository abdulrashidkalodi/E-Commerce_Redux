import logo from './logo.svg';
import './App.css';
import ProductCard from './component/ProductCard';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductCard/>
    </div>
  );
}

export default App;
