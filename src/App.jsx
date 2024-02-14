import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import WhatsAppIcon from "./components/WhatsAppicon";
// import StickyIcon from "./components/StickyIcon";
import Product from "./components/Product";



function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/gallery" element={<Blog/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/product" element={<Product/>}/>




      </Routes>
     
      <WhatsAppIcon/>
      {/* <StickyIcon/> */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;