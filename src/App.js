import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Ayuda from './pages/Ayuda';
import Salvo from './pages/Salvo';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className='flex'>
        <div className='content w-100'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/ayuda' element={<Ayuda />} />
            <Route path='/salvo'element={<Salvo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
