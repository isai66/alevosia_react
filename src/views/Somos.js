import '../App.css';
import banners from '../image/banners.svg';
import somos from '../image/somos.jpg';
import BreadCrumb from '../components/BreadCrumb';

const Somos = () =>{
    return (
        <div class="body">
            <div class="divisor">
  <BreadCrumb/>
  </div>
<div class="banner1">
    <img src={banners}/>
    <h1 class="alevosianame">ALEVOSÍA BOUTIQUE</h1>
</div>
<div class="detalles">
    Alevosía es un comercio minorista de prendas y accesorios ubicado en el centro de la ciudad de Huejutla de Reyes, Hidalgo, que se enfoca en dar un estilo de vida fresco a la juventud huejutlense desde 2009. A lo largo de los años Alevosía se ha caracterizado por vender prendas a la moda y que esté al alcance del público.
</div>
<div class="somos">
    <img class="somosimg" src={somos}/>
</div>

        </div>
        );
    }
    
    export default Somos;