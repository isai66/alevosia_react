import { useContext } from "react";
import { dataContext } from "../DataContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

import "../../css/cartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="2QZD4PCGK54G8" />
            <input type="hidden" name="currency_code" value="MXN" />
            <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal es una forma segura y fácil de pagar en línea." alt="Comprar ahora" />
          </form>
        </>
      ) : (
        <h2 className='cart-message-center'>Tu carrito está vacio</h2>
      )}
    </>
  );
};

export default CartContent;