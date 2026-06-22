import './App.css';
import HomePage from './Components/HomePage/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';

function App() {
    return (
          <div className="App">
            <Router>
              <Navbar />
              <Routes>
                <Route exact path='/' element={<HomePage />} />
          <Route path='/proyecto/:nombre' element={<ProjectDetails />} />
  </Routes>
        <WhatsAppButton />
          <Footer />
  </Router>
  </div>
  );
}

export default App;
