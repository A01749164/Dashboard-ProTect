import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Ayuda from './pages/Ayuda';
import Salvo from './pages/Salvo';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className='flex'>
        <div className='content w-100'>
          <Routes>
            <Route path='/salvo' element={<PrivateRoute />} >
              <Route path='/salvo' element={<Salvo />} />
            </Route>
            <Route path='/ayuda' element={<PrivateRoute />} >
              <Route path='/ayuda' element={<Ayuda />} />
            </Route>
            <Route path='/' element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
