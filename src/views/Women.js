import '../App.css';
import banners from '../image/banners.svg';
import women1 from '../image/women/women2.jpg';
import women2 from '../image/women/women3.jpg';
import women3 from '../image/women/women4.jpg';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';


const Women = () =>{
    return (
        <div class="body">
            <div class="divisor">
                <BreadCrumb/>
            </div>
            <div class="banner1">
                <img src={banners}/>
                <h1 class="mejoreshombre">Las mejores prendas para mujeres</h1>
            </div>
            <div class="venta2">
                <Link to="/women/producto1" class="producto1lin1wo">
                    <img src={women1}/>
                </Link> 
                <div class="producto1lin1">Producto 1</div> 
                <Link to="/producto2" class="producto1lin1wo">
                    <img src={women2}/>
                </Link> 
                <div class="producto2lin1">Producto 2</div> 
                <img src={women3}/> 
                <div class="producto3lin1">Producto 3</div> 
            </div>
            <div class="venta2">
                <img src={women1}/> <div class="producto1lin2">Producto 1</div> 
                <img src={women2}/> <div class="producto2lin2">Producto 2</div> 
                <img src={women3}/> <div class="producto3lin2">Producto 3</div> 
            </div>
            <div class="venta2">
                <img src={women1}/> <div class="producto1lin3">Producto 1</div> 
                <img src={women2}/> <div class="producto2lin3">Producto 2</div> 
                <img src={women3}/> <div class="producto3lin3">Producto 3</div> 
            </div>
        </div>
    );
}

export default Women;