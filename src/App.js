import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layouts/Pages'
import Auth from './components/Layouts/Auth'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/auth" element={<Auth/>}>
          <Route path="sign_up" element={<SignUp />} />
          <Route path="sign_in" element={<SignIn />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
