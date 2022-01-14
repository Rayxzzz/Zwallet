import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Login from './Page/Login/Login';
import Register from './Page/Sign Up/Register'
import Dashboard from './Page/Home/Dashboard';
import History from './Page/Home/History';
import SearchUser from './Page/Home/Transfer/SearchUser';
import TransferAmount from './Page/Home/Transfer/TransferAmount';
import Confirmation from './Page/Home/Transfer/Confirmation'
import Profile from './Page/Home/Profile'
import Pin from './Page/Create Pin/Pin'
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
          <Route path='/profile' element={
          <RequireAuth>
            <Profile/>
          </RequireAuth>
          }/>
          <Route path='/*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
