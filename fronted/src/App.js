import React from 'react'
import './App.css';
import Showdata from './Component/Showdata';
import Viewdata from './Component/Viewdata';
import View from './Component/View';
import Registration from './Component/Registration';
import Update from './Component/Update';
import Login from './Component/Login';
import Profile from './Component/Profile';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='showData' element={<Showdata/>}/>
        <Route path='viewdata' element={<Viewdata/>}/>
        <Route path='view' element={<View/>}/>
        <Route path ='editdata/:id' element={<Update/>}/>
        <Route path = 'login' element={<Login/>}/>
        <Route path = 'profilepage' element={<Profile/>}/>
        <Route path = 'registration' element={<Registration/>}/>
      </Routes>
    </BrowserRouter>


  
    </div>
  );
}

export default App;
