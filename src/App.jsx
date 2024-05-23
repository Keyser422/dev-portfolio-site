import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/Nav';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
