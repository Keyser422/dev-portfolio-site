import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import TopNav from './components/TopNav';
import './css/App.css';

function App() {

return (
  <BrowserRouter>
    <div className="app">
      <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  </BrowserRouter>
);
}

export default App;
