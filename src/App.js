import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Ayuda from './pages/Ayuda';
import Salvo from './pages/Salvo';

function App() {
  return (
    <Router>
      <div className='flex'>
        <Sidebar/>
        <div className='content w-100'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Ayuda/>} />
            <Route path='/salvo'element={<Salvo/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
