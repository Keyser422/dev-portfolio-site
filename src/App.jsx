import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';

function App() {
  const [showTopNav, setShowTopNav] = useState(true);
  const [showSideNav, setShowSideNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowTopNav(false);
      setShowSideNav(true);
    } else {
      setShowTopNav(true);
      setShowSideNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <BrowserRouter>
      <div className={`app ${showTopNav ? 'with-top-nav' : ''}`}>
        {showTopNav && <TopNav />}
        {showSideNav && <SideNav />}
        <Routes>
          <Route path ="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
