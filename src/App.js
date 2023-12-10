import React, { Fragment } from 'react';
import SingleProduct from './Component/SingleProduct/SingleProduct'
import { Routes , Route } from 'react-router-dom'
import Login from './Component/Login/Login';
import Home from './Component/Home/Home.jsx';

function App() {
  return (
    <Fragment>
      {/* <Login/> */}
      {/* <Home/> */}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path=':id' element={<SingleProduct/>}/>

      </Routes>
      {/* <SingleProduct/> */}
    </Fragment>
    // <div>
    //  <Home/>
    // </div>
  );
}

export default App;
