import { useState, useEffect } from "react";
import  database from "./Firebase/Firebase";
import {collection,getDocs,addDoc} from "firebase/firestore";


function AgregarPublicaciones() {

  const [Titulo, setTitulo] = useState();
  const [Contenido, setContenido] = useState();


  const [publicacion, setPublicacion] = useState([]);
  const Publicacion_Collection = collection(database, "publicaciones");

  const CrearPublicacion = async (e) => {
  	e.preventDefault();
    await addDoc(Publicacion_Collection, { titulo: Titulo, contenido: Contenido });
  };



    useEffect(() => {
    const getPublicacion = async () => {
      const data = await getDocs(Publicacion_Collection);
      setPublicacion(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPublicacion();
  }, []);

	return(
     <form className="container"> 
     <div className="form-group input-group">
     </div>
     <input type="text" className="form-control" placeholder="Titulo" name="titulo" onChange={(event) => {
          setTitulo(event.target.value);
        }}/>
        <br/>
     <div className="form-group input-group">
     </div>
     <textarea name="contenido" rows="4" className="form-control" placeholder="Escriba el contenido e su post" onChange={(event) => {
          setContenido(event.target.value);
        }}></textarea>
     <br/>
     <button className="btn btn-success" onClick={CrearPublicacion}> AGREGAR PUBLICACION </button>
    
     </form>
             
		)
     
};

export default AgregarPublicaciones;