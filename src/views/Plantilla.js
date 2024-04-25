import '../App.css';
import logo from '../image/logo.png';
import user from '../image/user.svg';
import divisor from '../image/divisor.png';
import { Outlet, Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import { Flex } from 'antd';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Plantilla = props =>{
  const {history} = props;
    return (
      <div class="body">
        <header class="encabezado">
          <img class="logo" src={logo}/>
        </header>
        <nav>
          <ul>
            <li class="si"><img class="usersvg" src={user}/>
              <a href="./login">Entrar</a>
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
        <Outlet/>
        {/*<footer class="pie-pagina">
          <div class="grupo-1">
            <div class="box">
              <h2>UBICACION</h2>
              <p class="pie-pagina">Calle Plaza de la Revolución Mexicana, esquina con calle Doctor GEA González, Centro. Huejutla de Reyes Hidalgo, CP 43000.</p>
            </div>
            <div class="box">
              <h2>PAGA CON TU PREFERENCIA</h2>
              <li>
                <p class="pie-pagina">Tarjetas de regalo</p>
              </li>
              <li>
                <p class="pie-pagina">Formas de pago</p>
              </li>
              <li>
                <p class="pie-pagina">Facturacion electronica</p>
              </li>
              <a href="docs/AVISO_PRIVACIDAD_ALEVOSIA_15-NOV-2023.pdf">Politica de privacidad</a>     
            </div>
            <div class="box">
              <h2>SIGUENOS</h2>
                <div class="red-social">
                  <a href="https://www.instagram.com/alevosia.boutique/" class="fa fa-facebook"><FaFacebook/></a>
                  <a href="https://facebook.com/Alevosiaboutique" class="fa fa-instagram"><FaInstagram/></a>
                </div>
            </div>
          </div>
          <script
          src="//code.jivosite.com/widget/8DmekcQaFf" async></script>
        </footer>*/}
        <footer class="pie-pagina">
          <div>
            <a href="docs/AVISO_PRIVACIDAD_ALEVOSIA_15-NOV-2023.pdf"class="pie-pagina">Politica de privacidad</a>
            <div class="red-social">
              <a href="https://facebook.com/Alevosiaboutique"class="pie-pagina"><FaFacebook/></a>
              <a href="https://www.instagram.com/alevosia.boutique/" class="pie-pagina"><FaInstagram/></a>
            </div>
            <span class="pie-pagina">© 2024 Creado por Alevosía Boutique</span>
          </div>
        </footer>
      </div>
    );
}
export default Plantilla;