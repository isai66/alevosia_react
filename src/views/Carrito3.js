import React from 'react'
import { useAuth } from '../components/authUser'; 


const Carrito3 = () => {
        const { isAuthenticated, userData } = useAuth();

  return (
    <div>
        <h1>{isAuthenticated ? `Hola ${userData.username}` : "No te has logueado"}</h1>
        
        Carrito 3
    </div>
  )
}

export default Carrito3;
