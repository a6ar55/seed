import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PromptBuilder from './pages/PromptBuilder';
import Templates from './pages/Templates';
import About from './pages/About';
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prompt-builder" element={<PromptBuilder />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
