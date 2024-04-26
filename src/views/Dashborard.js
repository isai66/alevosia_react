import React from "react";
import Login2 from "./Login2";
import Inicio from "./Inicio";
import Alta from "./Alta";
import Carrito2 from "./Carrito2";

/*function parseJwt (token){
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c){
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    return JSON.parse(jsonPayload);
}

let tokenExistsAndStillValid = (parseJwt(localStorage.getItem('token')).exp * 1000 > Date.now());
*/


const Dashboard = () =>{
    return(
        //<>{tokenExistsAndStillValid ? <Carrito2/> : <Login2/>}</>
        <div>
            Si
        </div>
    );
}
export default Dashboard;