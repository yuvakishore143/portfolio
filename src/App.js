import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/particles/Footer";
import SingleProject from "./components/SingleProject";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects/:id" element={<SingleProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="footer-whole-cont">{/* <Footer /> */}</div>
    </div>
  );
}

export default App;
