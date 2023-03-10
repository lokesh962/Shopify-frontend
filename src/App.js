import Navbar from './Components/Navbar';
import Customers from './Components/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import SinglePage from './Components/SinglePage';
import Footer from './Components/Footer'

// apikey= 89de241cc78f0b94f718a10cd3139961
// api secret key = 7da9aa2203f8753c2327f1d4ebb87082

// token= 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
// store name =admin.shopify.com/store/lokesh96

// https://89de241cc78f0b94f718a10cd3139961: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@lokesh96.myshopify.com/admin/api/2023-01/products.json

function App() {
  return (
    <>
      <Router>
      <Navbar title="Shopify App" />
        <Routes>
          <Route path='/' element={<Customers />}></Route>
          <Route path='/singlepage/:id' element={<SinglePage />}></Route>

        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
