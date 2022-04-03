import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Login from './Page/Auth/Login/Login';
import Register from './Page/Auth/Sign Up/Register'
import Dashboard from './Page/Home/Dashboard';
import History from './Page/Home/History';
import SearchUser from './Page/Home/Transfer/SearchUser';
import TransferAmount from './Page/Home/Transfer/TransferAmount';
import Confirmation from './Page/Home/Transfer/Confirmation'
import Profile from './Page/Home/Profile'
import ChangePin from './Page/Home/ChangePin';
import DetailProfile from './Page/Home/DetailProfile';
import ChangePhone from './Page/Home/ChangePhone';
import Pin from './Page/Auth/Create Pin/Pin'
import Success from './Page/Home/Transfer/Success';
import Page404 from './Page/Page404';
import RequireAuth from './RequireAuth';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/register/pin' element={<Pin/>}/>
          <Route path='/confirm' element={<Confirmation/>}/>
          <Route path='/' element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
          }/>
          <Route path='/history' element={
          <RequireAuth>
          <History/>
          </RequireAuth>
          }/>
          <Route path='/transfer' element={
          <RequireAuth>
            <SearchUser/>
          </RequireAuth>
          }/>
          <Route path='/transfer/:id' element={
          <RequireAuth>
            <TransferAmount/>
          </RequireAuth>
          }/>
          <Route path='/transfer/:id/:invoice' element={
          <RequireAuth>
            <Confirmation/>
          </RequireAuth>
          }/>
          <Route path='/transfer/:id/:invoice/success' element={
          <RequireAuth>
            <Success/>
          </RequireAuth>
          }/>
          <Route path='/profile' element={
          <RequireAuth>
            <Profile/>
          </RequireAuth>
          }/>
          <Route path='/profile/pin' element={
          <RequireAuth>
            <ChangePin/>
          </RequireAuth>
          }/>
          <Route path='/profile/info' element={
          <RequireAuth>
            <DetailProfile/>
          </RequireAuth>
          }/>
          <Route path='/profile/phone' element={
          <RequireAuth>
            <ChangePhone/>
          </RequireAuth>
          }/>
          <Route path='/*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
