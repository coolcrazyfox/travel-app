import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import s from "./styles/Header.module.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Header />
        <Route path="home" element={<Hero />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
