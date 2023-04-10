import "./App.css";
import "./styles/Projects.css";
import "./styles/ProjectDisplay.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experiences from "./pages/Experiences";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDisplay from "./components/ProjectDisplay";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
