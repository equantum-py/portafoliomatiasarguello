import './App.css';
import FullPage from './Components/FullPage/FullPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
              <Route exact path='/' element={<FullPage />} />
          <Route path='/project/:name' element={<ProjectDetails />} />
      </Router>
  </Router>
    </div>
  );
}

export default App;
