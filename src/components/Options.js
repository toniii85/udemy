import React from "react";
import Option from "./Option";

const Options = (props) => (
	<div>
		<button onClick={props.handleDeleteOptions}> Borrar todo </button>
		{props.options.length === 0 && <p> Por favor añade una opción para empezar </p>}
		{
			props.options.map(opcion => (
				<Option
					key={opcion}
					value={opcion}
					handleDeleteOption={props.handleDeleteOption}
				/>
			))
		}
	</div>
);


export default Options;