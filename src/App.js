import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
// import s from "./styles/Header.module.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="home" element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="explore" element={<Explore />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
