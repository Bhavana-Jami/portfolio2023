import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Resume } from './pages/Resume';
import { Navbar } from './components/Navbar';


function App() {
  return(
    <div className='App'>
      <Router>
        <Navbar id='navbar_wrapper'/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
