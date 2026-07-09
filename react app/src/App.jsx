import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';
import Home from './home.jsx';
import Explore from './explore.jsx';
import Message from './message.jsx';
import Post from './post.jsx';
import Reels from './reels.jsx';
import Profile from './profile.jsx';
import Settings from './settings.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/message" element={<Message />} />
          <Route path="/post" element={<Post />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
        