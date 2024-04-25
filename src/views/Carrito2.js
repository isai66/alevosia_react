<<<<<<< HEAD
import '../css/carrito2.css';
import BreadCrumb from '../components/BreadCrumb';
import { Outlet, Link } from 'react-router-dom';
import logo from '../image/logo.png';
import user from '../image/user.svg';
import divisor from '../image/divisor.png';
import women1 from '../image/women/women1.jpg';

const Carrito2 = () =>{
    return (
        <div class="container">
    <h2>Proceder al Pago</h2>
    <div class="summary">
      <h3>Resumen de la Compra</h3>
      <table class="items">
            <thead>
                <tr>
                    <th colspan="2" class="product">Producto</th>
                    <th class="shipping-date" data-i18n="global.delivery">Envío</th>
                    <th class="product-price" data-i18n="global.price">Precio</th>
                    <th class="quantity" data-i18n="global.quantity">Cantidad</th>
                    <th class="quantity-price" data-i18n="global.total">Total</th>
                    <th class="item-remove"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="product-image sac-loading">    
                        <a href="/" >
                            <img src={women1} class="product-img"/>
                        </a>  
                    </td>
                    <td class="product-name sac-loading">
                        <a href="/women/producto1">ROJO</a>
                        <div class="brand">
                            <span class="brand-label">Marca: </span>      
                            <span class="brand-name">Perfumeria</span>   
                                </div>
                            </td>
                            <td class="shipping-date"> 
                                <span class="shipping-estimate-date">Hasta 7 días</span>
                                <span class="shipping-estimate-date shipping-estimate-detail"></span>      
                                <div class="sla-info hide">        
                                    <div class="sla-price">$ 0.00</div>        
                                        <div class="sla-name">
                                            <small>Normal</small>
                                        </div>      
                                </div>    
                            </td>
                            <td class="product-price">  
                                <span class="best-price">     
                                    <span class="new-product-price-label hide">Por</span>                      
                                    <span class="new-product-price">$ 500</span>       
                                    <a class="manualprice-link-remove" href="javascript:void(0);" title="Eliminar">         
                                    <i class="icon icon-remove item-remove-ico"></i>    
                                    </a>
                                    <small class="new-product-real-price-per-unit"></small> 
                                </span>
                            </td>
                            <td class="quantity cant-change-qty" disabled="true">  
                                <input type="tel" min="1" value="1" id="item-quantity-90902" disabled/>     
                                <small class="item-multiplier-label"></small>        
                                <small class="item-unit-label"></small>  
                            </td>
                            <td class="quantity-price">   
                                <span class="total-selling-price">$500</span>
                            </td>
                        </tr>
                    </tbody>
        </table>
    </div>
    <form id="payment-form">
      <h3>Proceder</h3>
     {/* <label for="card-number">Número de Tarjeta:</label>
      <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required/><br/>
      <label for="expiry-date">Fecha de Expiración:</label>
      <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/AA" required/><br/>
      <label for="cvv">CVV:</label><br/>
    <input type="text" id="cvv" name="cvv" placeholder="123" required/>*/}
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="2QZD4PCGK54G8" />
            <input type="hidden" name="currency_code" value="MXN" />
            <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal es una forma segura y fácil de pagar en línea." alt="Comprar ahora" />
        </form>
    </form>
  </div>
  
    );}
        
=======
import '../css/carrito2.css';
import BreadCrumb from '../components/BreadCrumb';
import { Outlet, Link } from 'react-router-dom';
import logo from '../image/logo.png';
import user from '../image/user.svg';
import divisor from '../image/divisor.png';
import women1 from '../image/women/women1.jpg';

const Carrito2 = () =>{
    return (
        <div class="container">
    <h2>Proceder al Pago</h2>
    <div class="summary">
      <h3>Resumen de la Compra</h3>
      <table class="items">
            <thead>
                <tr>
                    <th colspan="2" class="product">Producto</th>
                    <th class="shipping-date" data-i18n="global.delivery">Envío</th>
                    <th class="product-price" data-i18n="global.price">Precio</th>
                    <th class="quantity" data-i18n="global.quantity">Cantidad</th>
                    <th class="quantity-price" data-i18n="global.total">Total</th>
                    <th class="item-remove"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="product-image sac-loading">    
                        <a href="/" >
                            <img src={women1} class="product-img"/>
                        </a>  
                    </td>
                    <td class="product-name sac-loading">
                        <a href="/women/producto1">ROJO</a>
                        <div class="brand">
                            <span class="brand-label">Marca: </span>      
                            <span class="brand-name">Perfumeria</span>   
                                </div>
                            </td>
                            <td class="shipping-date"> 
                                <span class="shipping-estimate-date">Hasta 7 días</span>
                                <span class="shipping-estimate-date shipping-estimate-detail"></span>      
                                <div class="sla-info hide">        
                                    <div class="sla-price">$ 0.00</div>        
                                        <div class="sla-name">
                                            <small>Normal</small>
                                        </div>      
                                </div>    
                            </td>
                            <td class="product-price">  
                                <span class="best-price">     
                                    <span class="new-product-price-label hide">Por</span>                      
                                    <span class="new-product-price">$ 500</span>       
                                    <a class="manualprice-link-remove" href="javascript:void(0);" title="Eliminar">         
                                    <i class="icon icon-remove item-remove-ico"></i>    
                                    </a>
                                    <small class="new-product-real-price-per-unit"></small> 
                                </span>
                            </td>
                            <td class="quantity cant-change-qty" disabled="true">  
                                <input type="tel" min="1" value="1" id="item-quantity-90902" disabled/>     
                                <small class="item-multiplier-label"></small>        
                                <small class="item-unit-label"></small>  
                            </td>
                            <td class="quantity-price">   
                                <span class="total-selling-price">$500</span>
                            </td>
                        </tr>
                    </tbody>
        </table>
    </div>
    <form id="payment-form">
      <h3>Proceder</h3>
     {/* <label for="card-number">Número de Tarjeta:</label>
      <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required/><br/>
      <label for="expiry-date">Fecha de Expiración:</label>
      <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/AA" required/><br/>
      <label for="cvv">CVV:</label><br/>
    <input type="text" id="cvv" name="cvv" placeholder="123" required/>*/}
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="2QZD4PCGK54G8" />
            <input type="hidden" name="currency_code" value="MXN" />
            <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal es una forma segura y fácil de pagar en línea." alt="Comprar ahora" />
        </form>
    </form>
  </div>
  
    );}
        
>>>>>>> ca5ec4f0db7767eda94149319fecce4a29b4d0fd
export default Carrito2;