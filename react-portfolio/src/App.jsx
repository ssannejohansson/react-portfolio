
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Navbar from './components/navbar.jsx';
import Portfolio from "./pages/portfolio.jsx"
import Footer from "./components/footer.jsx"

function App() {


  return (
  <>
    <BrowserRouter>  
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  </>
  )
}

export default App
