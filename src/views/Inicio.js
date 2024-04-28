import '../App.css';
import main2 from '../image/main2.jpg';
import collection from '../image/collection.svg';
import ropa1 from '../image/ropa1.jpg';
import ropa2 from '../image/ropa2.jpg';
import ropa3 from '../image/ropa3.jpg';

import { useAuth } from '../components/authUser'; 

import BreadCrumb from '../components/BreadCrumb';

import ReactDOM from 'react-dom';
import Carousel from '../components/Carousel';


const Inicio = () => {
  const { isAuthenticated, userData } = useAuth();

  return (
    <div class="body">
      <div class="divisor">
        <BreadCrumb/>
        <h1>{isAuthenticated ? `Hola ${userData.username}` : ""}</h1>
      </div>
      <Carousel/>
      <div class="main2">
        <img src={collection}/>
        <div class="collection">
          <h2>Nueva colección de invierno</h2>
          <h3>VER COLECCIÓN</h3>
        </div>
      </div>
      <div class="venta">
        <img src={ropa1}/>
        <div class="ropa1">Producto 1</div> 
        <img src={ropa2}/>
        <div class="ropa2">Producto 2</div> 
        <img src={ropa3}/>
        <div class="ropa3">Producto 3</div> 
      </div>
    </div>
  );}

export default Inicio;
