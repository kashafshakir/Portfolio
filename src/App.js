import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Skills from './components/Skills';
import MessageInbox from './components/Messageinbox';
import EducationandExperience from './components/EducationandExperience';
import Projectdisplay from './components/Projectdisplay';
import ContactPage from './components/Contactpage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Divein" element={<Skills />} />
        {/* <Route path="/messagebox" element={<MessageInbox />} /> */}
        <Route path="/about" element={<EducationandExperience />} />
        <Route path="/viewprojects" element={<Projectdisplay />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
