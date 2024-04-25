import  Axios from 'axios';
import { useForm } from 'react-hook-form';
import { Label, Card, TextInput, Button, Select, Modal, FileInput } from "flowbite-react"; // Importamos el componente Button
import React, { useEffect, useState } from 'react';
import '../css/tablas.css'
import  Components from './Components'
const {TitlePage, ContentTitle, SelectComponent, LoadingButton, CustomInput} = Components;
function App() {
  const [openModal, setOpenModal] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [productsTalla, setProductsTalla] = useState([]);
  const [tipoDato, setTipoDato] = useState('');
  const [idMarca, setidMarca] = useState('');
  const [idColor, setidColor] = useState('');
  const [idCategoria, setidCategoria] = useState('');
  const [idTalla, setidTalla] = useState('');
  const [idEstilo, setidEstilo] = useState('');
  const [productos, setProductos] = useState([]);

  const [serverErrorMessage, setServerErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [usuariosList,setUsuarios] = useState([]);

  const getUsuarios = ()=>{
    Axios.get("http://localhost:3001/bitacora").then((response)=>{
        setUsuarios(response.data);
    });
}



  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const onloadProductos= async () => {
    try {

      const response = await fetch('http://localhost/webservice_alevosia/obtenerProductos.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          }),
      });

      const result = await response.json();
  console.log(result);
      if (result.done) {
        setProductos(result.message);

        } else {

          
          console.error('Error en el registro:', result.message);

          if (result.debug_info) {
              console.error('Información de depuración:', result.debug_info);
          }
          if (result.errors) {
              result.errors.forEach(error => {
                  console.error('Error específico:', error);
              });
          }
          setServerErrorMessage(result.message || 'Error en el servidor.');
      }
      
  } catch (error) {
      console.error('Error 500', error);
      setTimeout(() => {
          alert('¡Ay caramba! Encontramos un pequeño obstáculo en el camino, pero estamos trabajando para superarlo. Gracias por tu paciencia mientras solucionamos este problemita.'); 
        }, 2000);
  } finally {
      setIsLoading(false);
  }
  };

  useEffect(() => {
    {
      onloadProductos()
    }
  }, []);
  const onloadDatosProducto = async () => 
  {
    try 
    {

      const response = await fetch('http://localhost/webservice_alevosia/obtenerDatosProducto.php', {
          method: 'POST',
          headers: 
          {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
      });

      const result = await response.json();
      console.log(result);
      if (result.done) 
      {
        const { categorias, colores, marcas, prendas, estilos } = result.message;

        // Crear un objeto productsData con los datos necesarios para el componente
        const productsDataObject = {
          categorias,
          colores,
          marcas,
          prendas,
          estilos,
        };
  
        // Asignar el objeto productsDataObject al estado productsData
        setProductsData(productsDataObject);
      } 
      else 
      {
        console.error('Error en el registro:', result.message);

        if (result.debug_info) 
        {
          console.error('Información de depuración:', result.debug_info);
        }
        if (result.errors) 
        {
          result.errors.forEach(error => {
            console.error('Error específico:', error);
          });
        }
        setServerErrorMessage(result.message || 'Error en el servidor.');
      }
    }
    catch (error) 
    {
      console.error('Error 500', error);
      setTimeout(() => 
      {
        alert('¡Ay caramba! Encontramos un pequeño obstáculo en el camino, pero estamos trabajando para superarlo. Gracias por tu paciencia mientras solucionamos este problemita.'); 
      }, 2000);
    } 
    finally 
    {
      setIsLoading(false);
    }
  };

  const onloadDatosTipoProducto = async (data) => 
  {
    try 
    {

      const response = await fetch('http://localhost/webservice_alevosia/obtenerDatosTipo.php', {
          method: 'POST',
          headers: 
          {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tipoPrenda: data
          }),
      });

      const result = await response.json();
      console.log(result);
      if (result.done) 
      {
        const { talla} = result.message;

        // Crear un objeto productsData con los datos necesarios para el componente
        const productsDataObject = {
          talla,
        };
  
        // Asignar el objeto productsDataObject al estado productsData
        setProductsTalla(productsDataObject);
      } 
      else 
      {
        console.error('Error en el registro:', result.message);

        if (result.debug_info) 
        {
          console.error('Información de depuración:', result.debug_info);
        }
        if (result.errors) 
        {
          result.errors.forEach(error => {
            console.error('Error específico:', error);
          });
        }
        setServerErrorMessage(result.message || 'Error en el servidor.');
      }
    }
    catch (error) 
    {
      console.error('Error 500', error);
      setTimeout(() => 
      {
        alert('¡Ay caramba! Encontramos un pequeño obstáculo en el camino, pero estamos trabajando para superarlo. Gracias por tu paciencia mientras solucionamos este problemita.'); 
      }, 2000);
    } 
    finally 
    {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    {
      onloadDatosProducto()
    }
  }, []);

  useEffect(() => {
    console.log("tipoDato actualizado:", tipoDato);
  }, [tipoDato]);

  const handleTipoDatoChange = (selectedValue) => {
    console.log("valor",selectedValue);
    console.log("tipodato",tipoDato);

    setTipoDato(selectedValue); // Actualizar el estado con el valor seleccionado
    onloadDatosTipoProducto(selectedValue); // Llamar a la función con el valor seleccionado
  };

  // Función para obtener el ID de la talla basado en tipoDato
const getTallaId = (tipoDato) => {
  if (tipoDato === "2") {
    return "TallaPantalon_IDTalla";
  } else {
    return "TallaPlallera_IDTalla";
  }
};

// Función para obtener el nombre de la talla basado en tipoDato
const getTallaName = (tipoDato) => {
  console.log("datoget Talla",tipoDato);

  if (tipoDato === "2") {
    console.log("datoget Talla si pasa",tipoDato);

    return "Talla";
  } else {
    return "No_Talla";
  }
};

const onSubmit = async (data, event) => {
  event.preventDefault(); // Evitar el comportamiento predeterminado de envío del formulario
  console.log('Formulario enviado:', {data});
  console.log('imagen enviado:', {selectedFile});

  try {
    setIsLoading(true); // Establecer isLoading a true para mostrar una carga en progreso

    const formData = new FormData();
    formData.append('codBarras', data.codBarras);
    formData.append('descProducto', data.descProducto);
    formData.append('nombreProducto', data.nombreProducto);
    formData.append('precioProd', data.precioProducto);
    formData.append('image', selectedFile);
    formData.append('idMarca', idMarca);
    formData.append('idColor', idColor);
    formData.append('idTipo', tipoDato);
    formData.append('idCategoria', idCategoria);
    formData.append('idTallaPantalon', idTalla);
    formData.append('idTallaPlallera', idTalla);
    formData.append('idEstilo', idEstilo);


    const datos = {
      codBarras: data.codBarras,
      descProducto: data.descProducto,
      nombreProducto: data.nombreProducto,
      precioProd: data.precioProducto,
      image: selectedFile,
      idMarca: idMarca,
      idColor: idColor,
      idTipo: tipoDato,
      idCategoria: idCategoria,
      idTallaPantalon: idTalla,
      idTallaPlallera: idTalla,
      idEstilo: idEstilo,    
    }

    console.log(datos);
    const response = await fetch('http://localhost/webservice_alevosia/upload.php', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.done) {
      console.log('Registro exitoso:', result);
      // Realiza alguna acción adicional después de un registro exitoso, si es necesario
    } else {
      console.error('Error en el registro:', result.message);

      if (result.debug_info) {
        console.error('Información de depuración:', result.debug_info);
      }
      if (result.errors) {
        result.errors.forEach(error => {
          console.error('Error específico:', error);
        });
      }
      setServerErrorMessage(result.message || 'Error en el servidor.');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    // Manejar errores de red u otros errores durante la solicitud
    setTimeout(() => {
      alert('¡Se encontró un error al intentar enviar el formulario! Por favor, inténtalo de nuevo más tarde.');
    }, 2000);
  } finally {
    setIsLoading(false); // Establecer isLoading de nuevo a false después de manejar la solicitud
  }
};

const [selectedFile, setSelectedFile] = useState(null);
const handleFileChange = (event) => {
  if (event.target.files && event.target.files.length > 0) {
    setSelectedFile(event.target.files[0]);
  }
};
const urlImage='../image/'

  return (
    <div className="flex-grow bg-gray-100">
      <section className='m-4'>
        <main className="mx-auto px-4">
          <section className='w-full flex flex-col'>
            <TitlePage label="Productos"/>
            <div className="mb-4 md:mb-0 rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8 ">
              <div className='m-auto' style={{ height: 600, width: 1100 }}>
                <header>
                  <div className="mb-2 block">
                    <Label htmlFor="email4" value="Agregar Productos" />
                  </div>
                  <div className="flex items-center">
                    <Button className="ml-2" onClick={() => setOpenModal(true)}>
                      Añadir Productos
                    </Button> 
                  </div>
                </header>
                <section className='container'>
                <Modal className='mt-11 pt-16' size="4xl" base show={openModal} onClose={() => setOpenModal(false)}>
                  <Modal.Header>Agregar Producto</Modal.Header>
                  <form onSubmit={handleSubmit(onSubmit)}>

                  <Modal.Body className='max-h-60'>

                    <div className="space-y-6">
                      <div className='grid grid-cols-2 gap-4'>
                        
                        <CustomInput
                          label="Nombre"
                          name="nombreProducto"
                          
                          errorMessage="Solo letras y sin espacios"
                          errors={errors}
                          register={register}
                          trigger={trigger}
                        />
                        <CustomInput
                          label="Codigo de Barras"
                          name="codBarras"
                          pattern={/^[a-zA-Z0-9]+$/}
                          errorMessage="Solo caracteres alfanumericos"
                          errors={errors}
                          register={register}
                          trigger={trigger}
                        />
                        <CustomInput
                          label="Descripcion"
                          name="descProducto"
                          pattern={/^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/}
                          errorMessage="Solo letras y sin espacios"
                          errors={errors}
                          register={register}
                          trigger={trigger}
                        />
                        <CustomInput
                          label="Precio"
                          name="precioProducto"
                          pattern={/^[0-9]+$/}
                          errorMessage="Solo numeros"
                          errors={errors}
                          register={register}
                          trigger={trigger}
                        />
                      </div>

                      <div className='grid grid-cols-2 gap-4'>
                        <SelectComponent
                          label="Marca"
                          id="Marca_IDMarca"
                          name="Nombre"
                          register={register}
                          option={productsData}
                          options={productsData.marcas}
                          onSelectChange={(selectedValue) => {
                            setidMarca(selectedValue);}}
                        />
                        <SelectComponent
                          label="Color"
                          id="Color_IDColor"
                          name="Nombre"
                          register={register}
                          option={productsData}
                          options={productsData.colores}
                          onSelectChange={(selectedValue) => {
                            setidColor(selectedValue);}}                        
                        />
                        <SelectComponent
                          label="Categoria"
                          id="Categoria_IDCategoria"
                          name="Nombre_categoria"
                          register={register}
                          option={productsData}
                          options={productsData.categorias}
                          onSelectChange={(selectedValue) => {
                            setidCategoria(selectedValue);}}                          
                        />
                        <SelectComponent
                          label="Tipo de Prenda"
                          id="ID_Tipo"
                          name="Descripcion"
                          option={productsData}
                          register={register}
                          options={productsData.prendas}
                          onSelectChange={handleTipoDatoChange} // Llamar a la función de manejo de cambio
                        />
                      </div>
                      <Label htmlFor="email4" value="Opciones por tipo" />

                      <div className='grid grid-cols-2 gap-4'>
                        <SelectComponent
                          label="Talla"
                          id={getTallaId(tipoDato)}
                          name={getTallaName(tipoDato)}
                          option={productsTalla}
                          options={productsTalla.talla}
                          register={register}
                          onSelectChange={(selectedValue) => {
                            setidTalla(selectedValue);}}                          
                        />                       
                        <SelectComponent
                          label="Estilo"
                          id="ID_Estilo"
                          name="Tipo"
                          option={productsData}
                          options={productsData.estilos}
                          register={register}
                          onSelectChange={(selectedValue) => {
                            setidEstilo(selectedValue);}}                          
                        />
                      </div>
                    </div>
                    <section>
                      <div className="flex w-full items-center justify-center">
                        <Label
                          htmlFor="dropzone-file"
                          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <svg
                              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                          </div>
                          <FileInput
                            id="dropzone-file"
                            className="hidden"
                            onChange={handleFileChange}
                            name="image"
                            register={register}
                            required
                          />
                        </Label>
                      </div>
                    </section>
                  </Modal.Body>
                  <Modal.Footer>
                    <LoadingButton
                      className="gray max-w-32 max-h-11" // Clase de Tailwind CSS para definir un ancho máximo
                      loadingLabel="Cargando..."
                      normalLabel="Agregar"
                    />
                    
                    <Button color="gray" onClick={() => {setOpenModal(false);}}>
                      Cancelar
                    </Button>
                  </Modal.Footer>
                  </form>

                </Modal>
                </section>
                <section className='container'>
                <div className="grid grid-cols-3 gap-4">

                {productos.map((productos) => (
                  <Card
                  key={productos.vchClvMateria}
                  href={`/Materias/detalleMateria/${productos.vchClvMateria}/${productos.chrGrupo}/${productos.intPeriodo}`}
                  className="max-w-sm rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="flex justify-end px-4 pt-4">
                    {/* Aquí puedes agregar un menú desplegable si es necesario */}
                  </div>
                  <div className="flex flex-col items-center pb-6 px-4">
                    <img alt="User settings" 
                      src={`${urlImage}${productos.Imagen}`} // Usar require para importar imágenes dinámicamente
                      className="w-24 h-24 rounded-full shadow-lg mb-3" 
                      data-testid="flowbite-avatar-img"
                    />
                    
                    <h3 className="mb-1 text-xl font-medium text-gray-900">{productos.Nombre}</h3>
                    <p className="text-sm text-gray-500">{productos.CodBarras}</p>
                    <p className="mt-1 text-sm text-gray-500">{productos.Descripcion}</p>
                    {/* Supongo que "Carrera" debería mostrar la carrera relacionada a la materia */}
                    <p className="mt-1 text-sm text-gray-500">
                      <strong>Precio:</strong> {productos.Precio} pesos
                    </p>
                  </div>
                </Card>

                  ))}
                </div>
                
                </section>
                
        <center>
        <button onClick={getUsuarios}>Listar</button>
        <table class="bitacora">
            <thead>
                <tr>
                    <th>Descripcion</th>
                    <th>Usuario</th>
                    <th>Hosting</th>
                </tr>
            </thead>
            <tbody>
                {usuariosList.map((val, key) =>
                    <tr key={key}>
                        <td>{val.DatosNuevos}</td>
                        <td>{val.Usuario}</td>
                        <td>{val.Hosti}</td>
                    </tr>
                )}
            </tbody>
        </table>
        </center>
              </div>
            </div>
          </section>
        </main>
      </section>
      
    </div>
  );
}

export default App;