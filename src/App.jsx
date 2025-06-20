import "./App.css";
import 'ldrs/trio'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Header from "./components/Header";


function App() {
  return (
    <Router basename="/portfolio">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
