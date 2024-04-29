import '../App.css';
import banners from '../image/banners.svg';
import men1 from '../image/men/men1.jpg';
import men2 from '../image/men/men2.jpg';
import men3 from '../image/men/men3.jpg';
import colaborador from '../image/colaborador.png';
import menbanner from '../image/menbanner.jpg'
import BreadCrumb from '../components/BreadCrumb';
import '../css/vistasCatalogos.css'


const Men = () =>{
    return (
        <div class="body">
            <div class="divisor">
                <BreadCrumb/>
            </div>
            <div class='cajaDiv'>
                <div class='caja'>
                    <img class='menbanner' src={menbanner}/>
                    <h2 class="textoCaja">Las mejores prendas para hombres</h2>
                </div>
                <h4 class='headerMen'>Aqui encontrarás el catálogo de las prendas masculinas más frescas, sólo para ti</h4>
            </div>
            
       
        </div>);
}

export default Men;