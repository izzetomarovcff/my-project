import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeP from './pages/HomeP';
import LoginP from './pages/LoginP';
import SignupP from './pages/SignupP';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path="" Component={HomeP} />
          <Route exact path="/login" Component={LoginP} />
          <Route exact path="/signup" Component={SignupP} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
