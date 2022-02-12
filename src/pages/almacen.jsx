import React from 'react';
import { Link } from 'react-router-dom';

const botonprueba = () => {
	



	
	return (
		
    <div className="App-header">
		<h1>Carpetas de monitoreo</h1>
        <section>
			<div className="contenedor-botones">
				<Link className="btn btn-primary px-5 mr-3" to = "">Ingresar</Link>
				<button className='boton uno'><span>Botón</span></button>
				<button className='boton dos'><span>Botón2</span></button>
				<button className='boton tres'><span>Botón3</span></button>
        	</div>
        </section>
    </div>
    )
}
	
export default botonprueba