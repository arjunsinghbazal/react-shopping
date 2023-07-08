import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainApp from './Components/MainApp';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Cart from './Components/Cart';
import Mart from './Components/Mart';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainApp />} exact />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login'   element={<Login/>}/>
          <Route path='/cart'   element={<Cart/>}/>
          <Route path='/mart'   element={<Mart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
