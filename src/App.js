import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Fitur from './pages/Fitur';
import Home from './pages/Home';
import Kontak from './pages/Kontak';


function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
