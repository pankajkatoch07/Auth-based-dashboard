
import {Routes , Route , Navigate} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import './App.css';

function App() {

  return (
    
      <Routes>
        <Route path='/' element = {<Navigate to="/login" />} />
        <Route path='/login' element = {<Login />} />

        <Route 
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
        >
        <Route path='/dashboard' element = {<Dashboard />} />
        </Route>
      </Routes>
  );
}

export default App;
