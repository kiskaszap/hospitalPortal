import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Department from './pages/Department';
import Login from './pages/Login';
import Register from './pages/Register';
import Video from './components/Video';
import Profile from './pages/Profile';
import Games from './pages/Games';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='login'
            element={<Login />}
          />
          <Route
            path='register'
            element={<Register />}
          />
          <Route
            path='department'
            element={<Department />}
          />
          <Route
            path='profile'
            element={<Profile />}
          />
          <Route
            path='dashboard'
            element={<Dashboard />}
          />
          <Route
            path='department/:name'
            element={<Video />}
          />
          <Route
            path='games'
            element={<Games />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
