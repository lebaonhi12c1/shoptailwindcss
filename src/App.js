
import './App.css';
import './App.scss'
import Home from './page/homepage/Home';
import CategroryPage from './page/Categorypage/CategroryPage';
import ProductPage from './page/ProductPage/ProductPage';
import CartPage from './page/cartpage/CartPage';
import Login from './page/login/Login';
import Register from './page/register/Register';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './compnent/Navbar';
import Nofication from './compnent/Nofication';
import Newletter from './compnent/Newletter';
import Footer from './compnent/Footer';
import NotFond from './page/notfound/NotFond';
function App() {
  return (
    <Router>
      <div className="App">
        <Nofication></Nofication>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/category' element={<CategroryPage/>}></Route>
          <Route path='/product' element={<ProductPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/*'element={<NotFond></NotFond>}></Route>
        </Routes>
        <Newletter></Newletter>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
