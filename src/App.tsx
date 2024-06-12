import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components';
import Contact from './components/contact';
import About from './components/about';
import Portfolio from './components/portfolio';

function App() {

  return (
    <Router>
    <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
    </Router>
  )
}

export default App
