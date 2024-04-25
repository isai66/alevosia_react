import '../css/carrito.css';
import BreadCrumb from '../components/BreadCrumb';
import { Outlet, Link } from 'react-router-dom';
import logo from '../image/logo.png';
import user from '../image/user.svg';
import divisor from '../image/divisor.png';
import women1 from '../image/women/women1.jpg';

const Carrito = () =>{
    return (
        <div class="body">
            <nav>
                <ul>
                    <li class="si"><img class="usersvg" src={user}/>
                        <a href="./sesion.html">Entrar</a>
                    </li>
                    <li>
                        <Link to="/" /*class="active"*/>Inicio</Link>
                    </li>
                    <li>
                        <Link to="/men">Hombres</Link>
                    </li>
                    <li>
                        <Link to="/women">Mujeres</Link>
                    </li>
                    <li>
                        <Link to="/somos">¿Quiénes somos?</Link>
                    </li>
                    <li>
                        <Link to="/Registro2">Contáctanos</Link>
                    </li>
                </ul>
                <div class="divisor">
                    <div>
                        <img src={divisor}/>
                    </div>
                    <div>
                        <img src={divisor}/>
                    </div>
                </div>
            </nav>

            <div class="divisor"></div>
            <div class="header">
                <p>Carrito de compras</p>
            </div>
            <div class="divisor">
                <div>
                    <img src={divisor}/>
                </div>
                <div>
                    <img src={divisor}/>
                </div>
            </div>

            <div class="products">
                <table class="items">
                    <thead>
                        <tr>
                            <th colspan="2" class="product">Producto</th>
                            <th class="shipping-date" data-i18n="global.delivery" data-bind="visible: !window.router.sac.isActive()">Envío</th>
                            <th class="product-price" data-i18n="global.price">Precio</th>
                            <th class="quantity" data-i18n="global.quantity">Cantidad</th>
                            <th class="quantity-price" data-i18n="global.total">Total</th>
                            <th class="item-remove"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-bind="css: { 'product-image': imageUrl, 'sac-loading' : window.cart.loadingItem() }" class="product-image sac-loading">    
                                <a href="//www.mixup.com/las-mujeres-ya-no-lloran--2-lp-s---rubi---lp-exclusivo-mixup----lp---shakira/p" data-bind="attr: {'href': ('//' + location.host + detailUrl())}">
                                    <img src={women1} class="product-img"  id="product-image-90902"/>
                                </a>  
                            </td>
                            <td class="product-name sac-loading" data-bind="css: { 'sac-loading' : window.cart.loadingItem() }">
                                <a href="//www.mixup.com/las-mujeres-ya-no-lloran--2-lp-s---rubi---lp-exclusivo-mixup----lp---shakira/p" data-bind="text: name, attr: {'href': ('//' + location.host + detailUrl()), 'id': 'product-name' + id() }" id="product-name90902">ROJO</a>
                                <div class="brand">
                                    <span class="brand-label" data-i18n="cart.seller.brand">Marca: </span>      
                                    <span class="brand-name" data-bind="text: brand">Perfumeria</span>   
                                </div>
                            </td>
                            <td class="shipping-date" data-bind="visible: !hasParentItemIndex(), css: { 'empty': estimateLabel() == 'a calcular', 'pickup-only': pickupOnly }, visible: !window.router.sac.isActive()"> 
                                <span class="shipping-estimate-date" data-bind="visible: !hasParentItemIndex(), text: estimateLabel">Hasta 7 días</span>
                                <span class="shipping-estimate-date shipping-estimate-detail" data-bind="text: estimateDetailLabel"></span>      
                                <div class="sla-info hide">        
                                    <div class="sla-price" data-bind="text: shippingPriceLabel">$ 0.00</div>        
                                        <div class="sla-name">
                                            <small data-bind="text: shippingName">Normal</small>
                                        </div>      
                                </div>    
                            </td>
                            <td class="product-price">  
                                <span class="best-price">     
                                    <span class="new-product-price-label hide" data-bind="css: { 'hide' : !isListPriceVisible() }, visible: manualPrice() == null || (isManualPriceActive() &amp;&amp; manualPrice() == null), i18nText: 'cart.newPrice'">Por</span>                      
                                    <span class="new-product-price" data-bind="text: sellingPriceLabel">$ 500</span>       
                                    <a class="manualprice-link-remove" href="javascript:void(0);" data-bind="click: removeManualPrice, visible: manualPrice() != null" data-i18n="[title]global.remove" title="Eliminar">         
                                        <i class="icon icon-remove item-remove-ico"></i>    
                                    </a>
                                    <small class="new-product-real-price-per-unit" data-bind="text: priceLabelPerUnit"></small> 
                                </span>
                            </td>
                            <td class="quantity cant-change-qty" data-bind="css: {'cant-change-qty': !canChangeQty(), 'quantity-large': quantity() > 999}, attr: { 'disabled': window.cart.loadingItem }" disabled="true">  
                                <input type="tel" min="1" data-bind="valueUpdate: 'keyup',            value: quantity,            maskOnBlur: '99999',            event: { blur: quantityBlurHandler },            attr: { 'disabled': !canChangeQty(), 'id': 'item-quantity-' + id() }" id="item-quantity-90902"/>     
                                <small class="item-multiplier-label" data-bind="text: multiplierLabel"></small>        <small class="item-unit-label" data-bind="text: unitLabel"></small>  
                            </td>
                            <td class="quantity-price">   
                                <span class="total-selling-price" data-bind="text: valueLabel, if: isPriceVisible">$ 500</span>  
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="summary-template-holder" data-bind="template: {name: 'summary-template', afterRender: vtex.i18n.translateHtml}">
                    <div class="row-fluid summary" data-bind="fadeVisible: window.cart.hasItems() &amp;&amp; !loading()">   
                        <div class="forms coupon-column summary-coupon-wrap span7 pull-left" data-bind="visible: !checkout.hasShippingPreview(), css: { 'span7 pull-left': !window.checkout.hasSelectableGifts(), 'span4 pull-right': window.checkout.hasSelectableGifts() }">
                            <div class="coupon summary-coupon pull-right" data-bind="with: coupon, visible: hasTotal">    
                                <form class="coupon-form" action="" data-bind="submit: addCoupon">                
                                    <fieldset class="coupon-fieldset">                      
                                        <div data-bind="fadeVisible: isUsingCoupon()">                     
                                            <p class="coupon-label">                            
                                                <label for="cart-coupon" data-i18n="totalizers.couponCapitalize">Cupón de descuento</label>                       
                                            </p>                       
                                            <p class="coupon-fields">                           
                                                <span data-bind="visible: !isCouponTyped()">                                
                                                    <input type="text" id="cart-coupon" class="coupon-value input-small" data-bind="value: couponCode, valueUpdate:'afterkeydown', disable: loadingCoupon()" placeholder="Código" data-i18n="[placeholder]totalizers.couponCode;"/>                                
                                                    <i class="loading-inline icon-spinner icon-spin loading-coupon" data-bind="fadeInlineVisible: loadingCoupon">                                   
                                                        <span data-i18n="cart.wait">Cargando datos...</span>                                
                                                    </i>                                
                                                    <button type="submit" id="cart-coupon-add" class="btn" data-bind="disable: loadingCoupon" data-i18n="global.add">Añadir</button>                            
                                                </span>                            
                                                <span class="info" data-bind="visible: isCouponTyped">                             
                                                    <span data-bind="text: value"></span>                                
                                                    <small class="delete">
                                                        <a href="javascript:void(0);" id="cart-coupon-remove" data-bind="click: removeCoupon" data-i18n="global.delete">Borrar</a>
                                                    </small>                            
                                                </span>                        
                                            </p>                    
                                        </div>                    
                                        <p class="coupon-data pull-right" data-bind="fadeVisible: !isUsingCoupon()">                        
                                            <a class="link-coupon-add" href="javascript:void(0);" id="cart-link-coupon-add" data-bind="click: isUsingCoupon">                            
                                                <span data-i18n="global.add">Añadir</span> <span data-i18n="totalizers.coupon">cupón de descuento</span>                       
                                            </a>                    
                                        </p>                
                                    </fieldset>            
                                </form>        
                            </div>    
                        </div>  
                        <div class="cart-more-options span7">        
                            <div class="cart-select-gift-placeholder"></div>            
                            <div id="shipping-preview-container" class="srp-container" data-bind="css: { 'component-loading component-loading-bg': !window.checkout.renderLoaded(),}">
                                <div class="srp-content onda-v1"><h2 class="srp-main-title mt0 mb0 f3 black-60 fw4">Entrega</h2>    
                                    <div class="srp-data mt4">
                                        <div class="srp-toggle mb6 pb2 ml1 mr3">
                                            <div class="srp-toggle__wrapper flex br-pill shadow-4 relative">
                                                <div class="vtex-shipping-preview-0-x-frame srp-toggle__current w-50 ba b--blue shadow-4 br-pill absolute vtex-shipping-preview-0-x-frameDelivery"></div>
                                                <label class="srp-toggle__delivery flex-none bg-transparent pointer w-50 tc ttu pv3 gray blue">
                                                    <input class="dn" type="radio" checked=""/>Entregar
                                                </label>
                                                <label class="srp-toggle__pickup flex-none bg-transparent pointer w-50 tc ttu pv3 gray">
                                                    <input class="dn" type="radio"/>Recoger
                                                </label>
                                            </div>
                                        </div>
                                        <div class="srp-result lh-copy">
                                            <div class="srp-delivery-header mb3">
                                                <span class="srp-items f5 black-70">
                                                    <strong>Entregar</strong> 1 ítem en  
                                                </span>
                                                <span id="deliver-at-text" class="mt0 mt0">
                                                    <a class="srp-address-title link pointer blue f5">43000</a>
                                                </span>
                                            </div>
                                            <div class="srp-delivery-info mb6">
                                                <label data-testid="cheapest" class="srp-shipping-current-single mt3 db pv2 ph4 br2 bw1 ba b--light-gray pointer tl f6">
                                                    <div class="srp-shipping-current-single__wrapper flex items-center mv3 relative pointer">
                                                        <div class="srp-shipping-current-single__bullet flex-none mr3">
                                                            <svg class="srp-icon-radio-selected db" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8 4C5.792 4 4 5.792 4 8s1.792 4 4 4 4-1.792 4-4-1.792-4-4-4zm0-4C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm0 14.4A6.398 6.398 0 0 1 1.6 8c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4z" fill="#3386E8"></path>
                                                            </svg>
                                                        </div>
                                                        <div class="srp-shipping-current-single__description flex items-center flex-auto tl">
                                                            <div class="srp-shipping-current-single__text flex-auto br b--light-silver truncate">
                                                                <div class="srp-shipping-current-single__sla gray">En hasta 7 días</div>
                                                            </div>
                                                            <div class="srp-shipping-current-single__price flex-none gray pl4">Gratis</div>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div class="span5 totalizers summary-totalizers cart-totalizers pull-right">        
                            <div class="forms coupon-column summary-coupon-wrap text-center" data-bind="visible: checkout.hasShippingPreview()">            
                                <div class="coupon summary-coupon" data-bind="with: coupon, visible: hasTotal">                
                                    <form class="coupon-form" action="" data-bind="submit: addCoupon">                    
                                        <fieldset class="coupon-fieldset">                        
                                            <div data-bind="fadeVisible: isUsingCoupon()">                            
                                                <p class="coupon-label">                                
                                                    <label for="cart-coupon" data-i18n="totalizers.couponCapitalize">Cupón de descuento</label>                            
                                                </p>                            
                                                <p class="coupon-fields">                                
                                                    <span data-bind="visible: !isCouponTyped()">                                    
                                                        <input type="text" id="cart-coupon" class="coupon-value input-small" data-bind="value: couponCode, valueUpdate:'afterkeydown', disable: loadingCoupon()" placeholder="Código" data-i18n="[placeholder]totalizers.couponCode;"/>                                    
                                                        <i class="loading-inline icon-spinner icon-spin loading-coupon" data-bind="fadeInlineVisible: loadingCoupon">                                        
                                                            <span data-i18n="cart.wait">Cargando datos...</span>                                    
                                                        </i>                                        
                                                        <button type="submit" id="cart-coupon-add" class="btn" data-bind="disable: loadingCoupon" data-i18n="global.add">Añadir</button>                                
                                                    </span>                                
                                                    <span class="info" data-bind="visible: isCouponTyped">                                    
                                                        <span data-bind="text: value"></span>                                       
                                                        <small class="delete">
                                                            <a href="javascript:void(0);" id="cart-coupon-remove" data-bind="click: removeCoupon" data-i18n="global.delete">Borrar</a>
                                                        </small>                                    
                                                    </span>                            
                                                </p>                        
                                            </div>                        
                                            <p class="coupon-data" data-bind="fadeVisible: !isUsingCoupon()">                            
                                                <a class="link-coupon-add" href="javascript:void(0);" id="cart-link-coupon-add" data-bind="click: isUsingCoupon">                                
                                                    <span data-i18n="global.add">Añadir</span> <span data-i18n="totalizers.coupon">cupón de descuento</span>                            
                                                </a>                        
                                            </p>                    
                                        </fieldset>                
                                    </form>            
                                </div>        
                            </div>        
                            <div data-bind="template: { name: 'totalizers-template', afterRender: vtex.i18n.translateHtml }">
                                <div class="accordion-group" data-bind="fadeVisible: window.cart.hasItems() &amp;&amp; !loading()">    
                                    <div class="accordion-heading">        
                                        <span class="accordion-toggle collapsed" data-i18n="totalizers.summary">Resumen de la compra</span>    
                                    </div>    
                                    <div class="accordion-body collapse in">        
                                        <div class="accordion-inner">            
                                            <div class="summary-discount-descriptions" data-bind="visible: discounts().length">                
                                                <h3 class="summary-discount-title" data-i18n="totalizers.Discounts">Descuentos</h3>                
                                                <ul class="all-discount-descriptions unstyled" data-bind="foreach: discounts()">                    
                                                    <li class="discount-descriptions-item">                        
                                                        <strong class="discount-name" data-bind="text: name">envioGratisXmonto-mixup</strong>                        
                                                        <span class="discount-description" data-bind="text: description"></span>                    
                                                    </li>                
                                                </ul>            
                                            </div>            
                                            <table class="table">                
                                                <tbody class="totalizers-list">              
                                                    <tr data-bind="visible: visible, attr: { 'class': id }" class="Items">                            
                                                        <td class="info" data-bind="{text: label()}">Subtotal</td>                                
                                                        <td class="space"></td>                                
                                                        <td class="monetary" data-bind="text: valueLabel">$ 500</td>                                
                                                        <td class="empty"></td>                           
                                                    </tr>                      
                                                    <tr class="srp-summary-result hide">                            
                                                        <td class="info" data-bind="attr: {'data-i18n': 'totalizers.' + id()}" data-i18n="totalizers.Shipping">Gastos del envío</td>                            
                                                        <td class="space"></td>                            
                                                        <td class="monetary" data-bind="text: valueLabel">Gratis</td>                            
                                                        <td class="empty"></td>                        
                                                    </tr>                        
                                                    <tr data-bind="visible: visible, attr: { 'class': id }" class="Shipping">     
                                                        <td class="info" data-bind="visible: $parent.isShippingKnown()">                                        
                                                            <span class="postal-code-for-sla">                                        
                                                                <span class="shipping-name" data-bind="attr: {'data-i18n': 'totalizers.' + id()}" data-i18n="totalizers.Shipping">Gastos del envío</span>                                        
                                                                <span class="shipping-name-to" data-bind="visible: $parent.postalCode(), attr: {'data-i18n': 'global.to'}" data-i18n="global.to">para</span>                                        
                                                                <span class="postal-code-value" data-bind="visible: $parent.postalCode(), html: $parent.maskedPostalCode()">43000</span>                                        
                                                                <a href="javascript:void(0);" class="cart-reset-postal-code" id="cart-reset-postal-code" data-bind="visible : window.checkout.canEditData, click: $parent.resetShipping" data-i18n="[title]global.edit" title="Cambiar">                                            
                                                                    <i class="icon-remove-sign"></i>                                        
                                                                </a>                                    
                                                            </span>                                  
                                                            <div class="btn-group shipping-sla-selector">                                        
                                                                <a class="btn btn-mini btn-default dropdown-toggle shipping-sla-button" data-toggle="dropdown" data-bind="attr: { 'disable': window.checkout.disableInputs }">                                            
                                                                    <span class="shipping-name hide" data-bind="text: selectedSlaName">Normal</span>                                            
                                                                    <span class="shipping-name-estimate-separator hide"> - </span>                                            
                                                                    <span class="shipping-estimate" data-bind="text: selectedSlaEstimate">Hasta 7 días</span> 
                                                                    <span class="caret"></span>                                        
                                                                </a>                                        
                                                                <ul class="dropdown-menu shipping-sla-options">              
                                                                    <li data-bind="attr: {'class': idAttr}, css: { selected: name == $parent.selectedSlaName() }" class="seller-1-sla-Normal selected">                                                
                                                                        <a href="javascript:void(0)" data-bind="click: function() { $parent.selectedSlaName(name) }, attr: { 'id': name }" id="Normal">                                                    
                                                                            <i class="icon-ok" data-bind="visible: name == $parent.selectedSlaName()"></i>                                                    &nbsp;                                                    
                                                                            <span data-bind="text: maxEstimateOptionText">Normal - $ 0.00 - Hasta 7 días</span>                                                
                                                                        </a>                                            
                                                                    </li>                                                                                    
                                                                    <li data-bind="attr: {'class': idAttr}, css: { selected: name == $parent.selectedSlaName() }" class="seller-1-sla-MxupNacional">                                                
                                                                        <a href="javascript:void(0)" data-bind="click: function() { $parent.selectedSlaName(name) }, attr: { 'id': name }" id="MxupNacional">                                                    
                                                                            <i class="icon-ok" data-bind="visible: name == $parent.selectedSlaName()"></i>                                                    &nbsp;                                                    
                                                                            <span data-bind="text: maxEstimateOptionText">MxupNacional - $ 0.00 - Hasta 7 días</span>                                                
                                                                        </a>                                            
                                                                    </li>                           
                                                                </ul>                                    
                                                            </div>                            
                                                        </td>                                
                                                        <td class="space"></td>                                
                                                        <td class="monetary" data-bind="text: valueLabel, visible: $parent.isShippingKnown()">Gratis</td>                                
                                                        <td class="empty" data-bind="visible: $parent.isShippingKnown()"></td>               
                                                    </tr>                
                                                </tbody>                
                                                <tbody class="shipping-reset" data-bind="visible: isShippingKnown()  &amp;&amp; window.checkout.isUsingPostalCode()      &amp;&amp; window.cart.items().length == window.cart.unavailableItems().length">                    
                                                    <tr>                        
                                                        <td class="info">                            
                                                            <span class="postal-code-for-sla">                                
                                                                <span class="shipping-name" data-bind="attr: {'data-i18n': 'totalizers.Shipping'}" data-i18n="totalizers.Shipping">Gastos del envío</span>                                
                                                                <span class="shipping-name-to" data-i18n="global.to">para</span>                                
                                                                <span class="postal-code-value" data-bind="html: window.summary.maskedPostalCode">43000</span>                                
                                                                <a href="javascript:void(0);" class="cart-reset-postal-code" id="cart-reset-postal-code" data-bind="visible : window.checkout.canEditData, click: summary.resetShipping" data-i18n="[title]global.edit" title="Cambiar">
                                                                    <i class="icon-remove-sign"></i>
                                                                </a>                                
                                                                <br/>                                
                                                                <a href="javascript:void(0);" class="cart-reset-postal-code" id="cart-reset-postal-code" data-bind="visible : window.checkout.canEditData, click: window.summary.resetShipping" data-i18n="cart.resetShipping">Elegir otro código postal</a>                            
                                                            </span>                        
                                                        </td>                        
                                                        <td class="space"></td>                        
                                                        <td class="monetary shipping-unavailable" data-i18n="global.unavailable">No disponible</td>                    
                                                    </tr>                
                                                </tbody>                
                                                <tbody class="shipping-calculate" data-bind="visible: !isShippingKnown() &amp;&amp; window.checkout.isUsingPostalCode()">                    
                                                    <tr>                        
                                                        <td class="info"><span data-i18n="cart.calculateShipping">Envío</span></td>                        
                                                        <td class="space" data-bind="visible: !isUsingPostalCode()"></td>                        
                                                        <td class="monetary" data-bind="visible: !isUsingPostalCode()">
                                                            <a id="shipping-calculate-link" class="shipping-calculate-link" href="javascript:void(0)" data-bind="click: usePostalCode" data-i18n="cart.calculate">Calcular</a>
                                                        </td>                        
                                                        <td class="monetary form-postal-code forms" data-bind="visible: isUsingPostalCode() &amp;&amp; !isShippingKnown()" colspan="3">                            
                                                            <div class="shipping summary-shipping">                                
                                                                <form class="shipping-form-inline" action="" data-bind="submit: calculateShipping">                                    
                                                                    <fieldset class="shipping-fieldset">                                        
                                                                        <div class="shipping-fields">                                            
                                                                            <input type="tel" id="summary-postal-code" class="postal-code input-mini" data-bind="value: postalCode, valueUpdate:'afterkeydown', validate: 'postalCode', disable: loadingPostalCode, maskOnBlur: window.checkout.postalCodeMask, attr: {'maxlength': window.checkout.postalCodeMask() ? window.checkout.postalCodeMask().length : 9},css: {'loading-postal-code': loadingPostalCode}" maxlength="5"/>                                            
                                                                            <i class="loading-inline icon-spinner icon-spin" data-bind="fadeInlineVisible: loadingPostalCode">                                                
                                                                                <span data-i18n="cart.wait">Cargando datos...</span>                                            
                                                                            </i>                                            
                                                                            <button type="submit" id="cart-shipping-calculate" class="btn" data-bind="disable: loadingPostalCode" data-i18n="cart.calculate">Calcular</button>                                        
                                                                        </div>                                        
                                                                        <small class="postal-code-service summary-postal-code-service">
                                                                            <a id="cart-dont-know-postal-code" data-bind="attr: { 'href': window.checkout.postalCodeForgottenURL }" target="_blank" data-i18n="totalizers.dontKnowPostalCode" href="https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/Descarga.aspx">No conozco mi Código Postal (CP)</a>
                                                                        </small>                                    
                                                                    </fieldset>                                
                                                                </form>                            
                                                            </div>                        
                                                        </td>                        
                                                        <td class="empty" data-bind="visible: !isUsingPostalCode()"></td>                    
                                                    </tr>                
                                                </tbody>                
                                                <tfoot>                    
                                                    <tr data-bind="css: {'muted': !hasTotal()}" class="">                        
                                                        <td class="info" data-i18n="global.total">Total</td>                        
                                                        <td class="space"></td>                        
                                                        <td class="monetary" data-bind="text: totalLabel">$ 500</td>                        
                                                        <td class="empty"></td>                    
                                                    </tr>                
                                                </tfoot>            
                                            </table>        
                                        </div>    
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="2QZD4PCGK54G8" />
                    <input type="hidden" name="currency_code" value="MXN" />
                    <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal es una forma segura y fácil de pagar en línea." alt="Comprar ahora" />
                </form>
            </div>
        </div>
    );}
        
export default Carrito;