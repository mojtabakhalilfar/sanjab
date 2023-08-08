
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import FirstPage from './FirstPage/FirstPage';
import Shop from './Shop/Shop';
import ContactUs from './ContactUs/ContactUs';
import Questions from './Questions/Questions';
import Takhfif from './Sayer/Takhfif/Takhfif';
// import Layout from './Components/Layout/Layout';
import ProductInfo from './Components/ProductInfo/ProductInfo';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Login/>} exact/> */}
        <Route path='/' element={<FirstPage/>} exact/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product/:userId' element={<ProductInfo />}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/questions' element={<Questions/>}/>
        <Route path='/takhfif' element={<Takhfif/>}/>
        <Route path='*' element={<div>404</div>}/>
      </Routes>  
    </Router>
  );
}

export default App;
