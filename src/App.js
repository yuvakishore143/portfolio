import { Route , Routes } from 'react-router-dom'
import './App.css';
import Home from  './components/Home'
import About from  './components/About'
import NotFound from './components/NotFound'
import Header from './components/Header'
import Footer from './components/particles/Footer';
import SingleProject from './components/SingleProject';
import ArtDock from './components/ProjectFiles/Artdock';
import Portfolio from './components/ProjectFiles/Portfolio';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path = '/' element={ <Home/>} />
        <Route exact path = '/about' element={ <About/>} />
        <Route exact path = '/projects/ArtDock' element={<ArtDock/>}/>
        <Route exact path = '/projects/Portfolio' element={<Portfolio/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
