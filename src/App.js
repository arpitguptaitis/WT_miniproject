// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

import Signup from './screens/SignupScreen';
import FoodieDelight from './screens/FoodieDelight';
import Fooditems from './screens/Fooditems';
import Fooditems2 from './screens/Fooditems2';
import Fooditems3 from './screens/Fooditems3';
import Fooditems4 from './screens/Fooditems4';
import Payment from './screens/Payment';




const App = () => {
  return(
    <Router>
      <main className='FoodieDelight'>
          <Routes><Route path='/' element={<HomeScreen/>} exact/></Routes>
          <Routes><Route path='/login' element={<LoginScreen/>} exact/></Routes>
          {/* <Routes><Route path='/FoodieDelight' element={<FoodieDelight/>} exact/></Routes> */}
          <Routes><Route path='/signup' element={<Signup/>} exact/></Routes>
          <Routes><Route path='/FoodieDelight' element={<FoodieDelight/>} exact/></Routes>
          <Routes><Route path='/fooditem' element={<Fooditems/>} exact/></Routes>
          <Routes><Route path='/fooditem2' element={<Fooditems2/>} exact/></Routes>
          <Routes><Route path='/fooditem3' element={<Fooditems3/>} exact/></Routes>
          <Routes><Route path='/fooditem4' element={<Fooditems4/>} exact/></Routes>
          <Routes><Route path='/Payment' element={<Payment/>} exact/></Routes>

      </main>
    </Router>
  )
}

export default App
