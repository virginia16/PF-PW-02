import React, {useState, useEffect} from 'react'
import  database  from "./Firebase/Firebase";
import {collection,getDocs,doc} from "firebase/firestore";

const MostrarPublicaciones = ()=>{

    const [publicacion, setPublicacion] = useState([]);
    const PublicacionCollection = collection(database, "publicaciones");


    useEffect(() => {
        const getPublicacion = async () => {
            const data = await getDocs(PublicacionCollection);
            setPublicacion(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getPublicacion();
    }, []);

    return(
       <div className="container">
        <div className="alert alert-dark" role="alert">
          <h2>PUBLICACIONES</h2>
             </div>
        <div className="row" > {publicacion.map((publicacion) => {
            return (
            <div className="col-sm-4" key={publicacion.id}> 
            <div className="card" >
            <div className="card-body">
            <h4 className="card-title">{publicacion.titulo}</h4>
            <p className="card-text">{publicacion.contenido}</p>
            </div>
            </div>
            </div>
                );
        })}
         </div>
         </div>
        )
}
export default MostrarPublicaciones;

