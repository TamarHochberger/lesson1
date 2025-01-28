import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { useSelector } from 'react-redux';
import Error from './components/Error';
import Posts from './components/Posts';
import { useEffect } from 'react';


const App = () => {

  return (
      <BrowserRouter>
        <nav>
          <NavLink to="/" activeClassName="active">Posts          </NavLink>
          <NavLink to="/home" activeClassName="active">Home  </NavLink>
        </nav>
        
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/home" element={<Home />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
