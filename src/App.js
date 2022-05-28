import './App.css';
import Home from './Pages/Home';
import Articles from './Pages/Articles';
import Article_and_Comments from './Pages/Article_and_Comments';
import Users from './Pages/Users';
import Topics from './Pages/Topics';
import { Route, Routes, Router } from 'react-router-dom';
import Create from './Components/Create';
import Login from './Components/Login';
import React, { useState } from 'react';
import Profile from './Components/Profile';
import { LoginContext } from './Contexts/LoginContext';
import Nav from './Components/Nav';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState('');
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/create" element={<Create />} />
        <Route
          path="/articles/:article_id/article_and_comments"
          element={<Article_and_Comments />}
        />
        <Route path="/articles/:topic" element={<Topics />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
