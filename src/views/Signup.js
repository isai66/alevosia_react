import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import {MdMarkEmailRead} from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
//import '../components/ValidaSignUp'


import "../css/signup.css"

const Signup = () => {


    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");
    const [codigoPostal,setCP]=useState(0);
    const [estado,setEstado]=useState("");
    const [municipio,setMunicipio]=useState("");
    const [colonia,setColonia]=useState("");
    const [calle,setCalle]=useState("");
    const [numint,setNumInt]=useState(0);
    const [numext,setNumExt]=useState(0);
    const [telefono,setTelefono]=useState(0);
    const [usuario,setUsuario]=useState("");
    const [correo,setCorreo]=useState("");
    const [contrasena,setContrasena]=useState("");

    const navigateTo = useNavigate()

    const createUser = (e)=>{
        e.preventDefault()
        Axios.post("http://localhost:3001/signup",{
            usuario:usuario,
            nombre:nombre,
            apellido:apellido,
            codigoPostal:codigoPostal,
            estado:estado,
            municipio:municipio,
            colonia:colonia,
            calle:calle,
            numint:numint,
            numext:numext,
            contrasena:contrasena,
            correo:correo,
            telefono:telefono
        }).then(()=>{
            navigateTo('/login')
            setNombre('')
            setApellido('')
            setCP('')
            setEstado('')
            setMunicipio('')
            setColonia('')
            setCalle('')
            setNumInt('')
            setNumExt('')
            setTelefono('')
            setUsuario('')
            setCorreo('')
            setContrasena('')
        })
    }



    return(
        <div class="signupPage">
            <div class='containersignup'>
                <div class='title'>
                    <h2>Registrate</h2>
                </div>
                <div class='formDiv'>
                    <div class='headerDiv'>
                        <h3>Déjanos conocerte</h3>
                    </div>
                    <form action='' class="formsignup grid" id='formulario'>
                        
                        <div class='inputDiv'>
                            <label htmlFor='nombre'>Nombre: </label>
                            <div class='input flex'>
                                <FaUser class='icon'/>
                                <input type="text" id='nombre' placeholder='Ingrese su nombre' onChange={(event)=>{setNombre(event.target.value)}}/>
                            </div>
                        </div>

                        <div class='inputDiv'>
                            <label htmlFor='apellido'>Apellido: </label>
                            <div class='input flex'>
                                <FaUser class='icon'/>
                                <input type="text" id='apellido' placeholder='Ingrese su apellido' onChange={(event)=>{setApellido(event.target.value)}}/>
                            </div>
                        </div>

                        <div class='inputDiv'>
                            <label htmlFor='codigopostal'>Código Postal: </label>
                            <div class='input flex'>
                                <IoHome class='icon'/>
                                <input type="number" id='codigopostal' placeholder='Ingrese su Código Postal' onChange={(event)=>{setCP(event.target.value)}}/>
                            </div>
                        </div>

                        <div class='inputDiv'>
                            <label htmlFor='estado'>Estado: </label>
                            <div class='input flex'>
                                <IoHome class='icon'/>
                                <input type="text" id='estado' placeholder='Estado autorrellenable' onChange={(event)=>{setEstado(event.target.value)}}/>
                            </div>
                        </div>

                        <div class='inputDiv'>
                            <label htmlFor='municipio'>Municipio: </label>
                            <div class='input flex'>
                                <IoHome class='icon'/>
                                <input type="text" id='municipio' placeholder='Municipio autorrellenable' onChange={(event)=>{setMunicipio(event.target.value)}}/>
                            </div>
                        </div>

                        <div class='inputDiv'>
                            <label htmlFor='colonia'>Colonia: </label>
                            <div class='input flex'>
                                <IoHome class='icon'/>
                                <select class="colonia" id="colonia" required onChange={(event)=>{setColonia(event.target.value)}}>
                                    <option value="0" selected>Seleccionar Colonia</option>
                                </select>
                            </div>
                        </div>

                        <div class='inputDiv'>
                            <label htmlFor='calle'>Calle: </label>
                            <div class='input flex'>
                                <IoHome class='icon'/>
                                <input type="text" id='calle' placeholder='Ingrese su calle' onChange={(event)=>{setCalle(event.target.value)}}/>
                            </div>
                        </div>

                        <div class='inputDiv'>
                            <label htmlFor='numinterior'>Número interior:</label>
                            <div class='input flex'>
                                <IoHome class='icon'/>
                                <input type="number" id='numinterior' placeholder='Opcional' onChange={(event)=>{setNumInt(event.target.value)}}/>
                            </div>
                        </div>

                        <div class='inputDiv'>
                            <label htmlFor='numexterior'>Número exterior: </label>
                            <div class='input flex'>
                                <IoHome class='icon'/>
                                <input type="number" id='numexterior' placeholder='Ingrese su numero exterior' onChange={(event)=>{setNumExt(event.target.value)}}/>
                            </div>
                        </div>

                        <div class='inputDiv'>
                            <label htmlFor='telefono'>Teléfono: </label>
                            <div class='input flex'>
                                <FaPhoneAlt class='icon'/>
                                <input type="number" id='telefono' placeholder='Ingrese número telefónico' onChange={(event)=>{setTelefono(event.target.value)}}/>
                            </div>
                        </div>

                        <div class='inputDiv'>
                            <label htmlFor='username'>Usuario: </label>
                            <div class='input flex'>
                                <FaUserShield class='icon'/>
                                <input type="text" id='username' placeholder='Ingrese su nombre de usuario' onChange={(event)=>{setUsuario(event.target.value)}}/>
                            </div>
                        </div>                  

                        <div class='inputDiv'>
                            <label htmlFor='email'>Correo: </label>
                            <div class='input flex'>
                                <MdMarkEmailRead class='icon'/>
                                <input type="email" id='email' placeholder='Ingrese su correo electrónico' onChange={(event)=>{setCorreo(event.target.value)}}/>
                            </div>
                        </div>

                        <div class='inputDiv'>
                            <label htmlFor='password'>Contraseña: </label>
                            <div class='input flex'>
                                <BsFillShieldLockFill class='icon'/>
                                <input type="password" id='password' placeholder='Ingrese su contraseña' onChange={(event)=>{setContrasena(event.target.value)}}/>
                            </div>
                        </div>

                        <button type='submit' class='btnSignup flex' onClick={createUser}>
                            <span class="submitText">Registrarse</span>
                            <AiOutlineSwapRight class='iconbtn'></AiOutlineSwapRight>
                        </button>
                    </form>
                    <div class='footerDiv flex'>
                            {/* <span class='forgotPswd'>¿Olvidaste tu contraseña?</span> */}
                            <span class='text'>¿Ya tienes una cuenta?</span>
                            <Link to={'/login'}>
                                <button class="btn1">Inicia Sesión</button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

/*
const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try 
            {
                const response = await axios.get("http://localhost:3001/usuarios");
                setData(response.data);
            } 
            catch (error)
            {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    },[]);

    return (
        <div>
            <h1>Data from API:</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.nombre}</li> // Suponiendo que "nombre" es un campo en tu tabla MySQL
                ))}
            </ul>
        </div>
    )

*/