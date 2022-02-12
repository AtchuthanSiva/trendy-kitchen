import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  
  render(
    <BrowserRouter>
      <Header/>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
         
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
}

export default App;
