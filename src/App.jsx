import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import WhatsAppIcon from "./components/WhatsAppicon";
import StickyIcon from "./components/StickyIcon";

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="/blog" element={<Blog/>}/>
<Route path="/contact" element={<Contact/>}/>




      </Routes>
      <WhatsAppIcon/>
      <StickyIcon/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
