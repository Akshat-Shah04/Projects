import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddRecord from './Template/Pages/Functionalities/AddRecord';
import Dashboard from './Template/Pages/Layout/Dashboard';
import Login from './Template/Pages/Layout/Login';
import SignUp from './Template/Pages/Layout/SignUp';
import Page404 from './Template/Pages/Functionalities/Page404';
import ForgotPassword from './Template/Pages/Functionalities/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/addRecord' element={<AddRecord />} />
        <Route path='/*' element={<Page404 />} />
        <Route path='/forgotpwd' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
