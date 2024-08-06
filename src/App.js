import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layouts/Pages'
import Auth from './components/Layouts/Auth'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Confirm from './pages/Confirm'
import SingleProperty from './pages/SingleProperty'
import Profile from './pages/Profile';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/auth" element={<Auth/>}>
          <Route path="sign_up" element={<SignUp />} />
          <Route path="sign_in" element={<SignIn />} />
          <Route path="confirm" element={<Confirm />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path='single_property' element={<SingleProperty />} /> */}
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
