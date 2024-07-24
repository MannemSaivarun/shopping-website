
import { Provider } from 'react-redux';
import './App.css';
import { store } from './components/Store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/signup';
import Admin from './pages/AdminPage';
import User from './pages/UserPage';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
