import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/modules/ScrollToTop/ScrollToTop";
import Nav from "./components/modules/Nav/Nav";
import Hero from "./components/modules/Hero/Hero";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/modules/Footer/Footer";
import OurProcess from "./components/CaseStudy/OurProcess";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Hero />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<OurProcess />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
