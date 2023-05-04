import { Routes, Route } from 'react-router-dom';

import Calculate from './components/calculator';
import DisplayQuote from './components/DisplayQuote';
import Home from './components/Home';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/quote" element={<DisplayQuote />} />
      </Routes>
    </>
  );
}

export default App;
