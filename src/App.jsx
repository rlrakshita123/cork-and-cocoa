import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Cakes from "./pages/Cakes";
import Brownies from "./pages/Brownies";
import Wino from "./pages/Wino";
import Liquer from "./pages/Liquer";
import CustomCakes from "./pages/CustomCakes";
import Explore from "./pages/Explore";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/brownies" element={<Brownies />} />
        <Route path="/wino" element={<Wino />} />
        <Route path="/liquer" element={<Liquer />} />
        <Route path="/custom-cakes" element={<CustomCakes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
