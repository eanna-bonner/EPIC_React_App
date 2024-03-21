import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Contact } from './components/Contact';
import { Login } from './components/Login'; 
import { SignUp } from './components/SignUp';
import { AdminDash } from './components/AdminDash';
import { UserDash } from './components/UserDash';
import { AnalysisPage } from './components/AnalysisPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/user" element={<UserDash />} />
        <Route path="/analysis" element={<AnalysisPage />} />
      </Routes>
    </Router>
  );
}

export default App;