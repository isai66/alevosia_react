import React from 'react'
import { useContext } from "react";
import { dataContext } from "../DataContext";
import '../../css/cartContent.css'

const CartTotal = () => {
    const{cart}=useContext(dataContext);

    const total = cart.reduce((acc,element)=> acc + element.Precio * element.Cantidad, 0);
    return (
        <div class="cartTotal">
            <h3>Total a pagar: ${total}</h3>
        </div>
    )
}

export default CartTotal
