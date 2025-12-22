import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import Impact from './pages/Impact';
import Media from './pages/Media';
import GetInvolved from './pages/GetInvolved';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="impact" element={<Impact />} />
          <Route path="media" element={<Media />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="*" element={<div className="p-20 text-center text-red-500">404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
