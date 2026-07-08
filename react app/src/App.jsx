import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login.jsx';
import Signup from './signup.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
        