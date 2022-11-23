 import './App.css';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import Error from './Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingalProduct from './SingalProduct';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/singalproduct/:id' element={<SingalProduct/>}/>
          <Route path='*' element={<Error />}/>
        </Routes>
        <Footer/>
      </Router> 
    </>
  );
}

export default App;
