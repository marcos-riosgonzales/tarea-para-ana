import React from "react";
import estilo from "../assets/scss/TestimonioDesign.module.scss";

function Testimonio (props){
    return(
        <div className={estilo.prueba}>
            <img 
                className={estilo.imagen}
                src={props.imagen}
                alt="no agarre"
            />
            <div className={estilo.contenedor}>
                <p className={estilo.testimonio}>
                    <strong>{props.nombre}</strong> de {props.pais}
                </p>
                <p className={estilo.cargoTestimonio}>
                    <strong>{props.cargo}</strong> a  {props.equipos}
                </p>
                <p className={estilo.textoTestimonio}>
                    <strong>"{props.testimonio}"</strong>
                </p>

            </div>
        </div>
    );
}
export default Testimonio;