import React from "react";
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdOutlineError} from 'react-icons/md'


const TablaGastos = ({data,cambiarEstado}) => {

    const renderIcon = (dato) => {
        if(dato.Estado === "ON"){
            return <th><AiFillCheckCircle color="green" size="2em"/></th>
        }

        if(dato.Estado === "OFF"){
            return <th><MdOutlineError color="red" size="2em"/></th>
        }
    }

    return (
        <div className="text-center ">
            <table>
                <thead>
                    <tr>
                        <th>Estado</th>
                        <th>Fecha</th>
                        <th>N° Pauta</th>
                        <th>Punto</th>
                        <th>Detalles Pauta</th>
                        <th>Tiempo entre pautas</th>
                    </tr>
                </thead>
                <tbody>
                   
                { data && (
                    data.map((dato) => {
                        return(
                            <tr key={dato.id}>
                                {renderIcon(dato)}
                                <th>{dato.Fecha}</th>
                                <th>{dato.NPauta}</th>
                                <th>{dato.Punto}</th>
                                <th>{dato.Reproduccion}</th>
                                <th>{dato.TPautas}</th>
                            </tr>
                        )
                        }
                    )
                )
                } 
                
                </tbody>
            </table>
            <br/>
        </div>
    );
}

export default TablaGastos;