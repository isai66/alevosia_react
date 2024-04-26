import React from 'react'
import '../App.css';
import banners from '../image/banners.svg';
import women1 from '../image/women/women2.jpg';
import women2 from '../image/women/women3.jpg';
import women3 from '../image/women/women4.jpg';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Productos from '../components/Productos';

const Women2 = () => {
  return (
    <div class="body">
            <div class="divisor">
                <BreadCrumb/>
            </div>
            <div class="banner1">
                <img src={banners}/>
                <h1 class="mejoreshombre">Las mejores prendas para mujeres</h1>
            </div>
            {/*<div class="venta2">
                <Link to="/women/producto1" class="producto1lin1wo">
                    <img src={women1}/>
                </Link> 
                <div class="producto1lin1"></div> 
                <Link to="/producto2" class="producto1lin1wo">
                    <img src={women2}/>
                </Link> 
                <div class="producto2lin1"></div> 
                <img src={women3}/> 
                <div class="producto3lin1"></div> 
            </div>*/}
            <div class="venta2">
                <Productos/>
            </div>
            
            
        </div>
  )
}

export default Women2
