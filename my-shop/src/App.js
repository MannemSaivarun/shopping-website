
import { Provider } from 'react-redux';
import './App.css';
import { store } from './components/Store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/signup';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import withParams from './components/wrappers/withParams';


const AdminPageWithParams = withParams(AdminPage);
const UserPageWithParams = withParams(UserPage);


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin/:userId' element={<AdminPageWithParams/>} />
          <Route path='/user/:userId' element={<UserPageWithParams/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
