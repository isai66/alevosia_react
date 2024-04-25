import '../App.css';
import banners from '../image/banners.svg';
import men1 from '../image/men/men1.jpg';
import men2 from '../image/men/men2.jpg';
import men3 from '../image/men/men3.jpg';
import BreadCrumb from '../components/BreadCrumb';


const Men = () =>{
    return (
        <div class="body">
        <div class="divisor">
  <BreadCrumb/>
  </div>
  
  <div class="banner1">
    <img src={banners}/>
    <h1 class="mejoreshombre">Las mejores prendas para hombres</h1>
</div>
<div class="venta2">
    <img src={men1}/> <div class="producto1lin1">Producto 1</div> 
    <img src={men2}/> <div class="producto2lin1">Producto 2</div> 
    <img src={men3}/> <div class="producto3lin1">Producto 3</div> 
</div>
<div class="venta2">
    <img src={men1}/> <div class="producto1lin2">Producto 1</div> 
    <img src={men2}/> <div class="producto2lin2">Producto 2</div> 
    <img src={men3}/> <div class="producto3lin2">Producto 3</div> 
</div>
<div class="venta2">
    <img src={men1}/> <div class="producto1lin3">Producto 1</div> 
    <img src={men2}/> <div class="producto2lin3">Producto 2</div> 
    <img src={men3}/> <div class="producto3lin3">Producto 3</div> 
</div>
  
      </div>);
}

export default Men;