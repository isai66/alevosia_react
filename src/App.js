import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';
import Plantilla from './views/Plantilla';
import Inicio from './views/Inicio';
import Men from './views/Men';
import NotFound from './views/404';
import Women from './views/Women';
import Producto1 from './views/Producto1';
import Somos from './views/Somos';
import Chat from './components/Chat';
import Busqueda from './views/Busqueda';
import Signup from './views/Signup';
import Login from './views/Login';
import { Outlet, Link } from 'react-router-dom';
import Registro2 from './views/Registro2';
import Carrito from './views/Carrito';
import Carrito2 from './views/Carrito2';
import Dashboard from './views/Dashborard';
import Alta from './views/Alta';

function App() {

  return (
    <div>
      Este es el codigo que se subirá 2
      <Routes>
        <Route path='/' element={<Plantilla/>}>
          <Route path='/' element={<Inicio/>}/>
          <Route path='Men' element={<Men/>}/>
          <Route path='Women' element={<Women/>}/>
          <Route path='Somos' element={<Somos/>}/>
          <Route path='Busqueda' element={<Busqueda/>}/>
          <Route path="Women/Producto1" element={<Producto1/>}/>
          <Route path="Signup" element={<Signup/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Registro2" element={<Registro2/>}/>
          <Route path="Profile" element={<Dashboard/>}/>
          <Route path="Alta" element={<Alta/>}/>
    
          <Route path='*' element={<NotFound/>}/>
        </Route>
        <Route>
          <Route path="Carrito" element={<Carrito/>}/>
          <Route path="Carrito2" element={<Carrito2/>}/>
        </Route>
      </Routes>
      <Chat/>
    </div>
  );
}

export default App;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/
