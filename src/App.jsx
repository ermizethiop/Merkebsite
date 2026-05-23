import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./page/Home";
import About from "./page/About";
import Team from "./page/team";
import Service from "./page/Service";
import Portfolio from "./page/portfolio";
import Price from "./page/price";
import Contact from "./page/Contact";
import MagneticCursor from "./components/MagneticCursor";

function App() {
  return (
    <Router>
      <MagneticCursor />
      <ScrollToTop />
      <div className="min-h-screen bg-dark-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
