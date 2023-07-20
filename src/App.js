import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header><Header /></header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Navigate to="/" />} />
      </Routes>
      <About />
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
