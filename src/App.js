import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import NotFound from "./components/NotFound";
import SingleProject from "./components/SingleProject";
import Home from "./components/Home";
import Skills from "./components/particles/Skills";
import Projects from "./components/particles/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/projects/:id" element={<SingleProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="notification">
        <p>Welcome to my Website</p>
        <span className="notification_progress"></span>
      </div>
    </div>
  );
}

export default App;
