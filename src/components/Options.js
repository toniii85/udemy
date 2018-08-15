import React from "react";
import Option from "./Option";

const Options = (props) => (
	<div>
		<div className="widget-header">
			<h3 className="widget-header__title">Tus opciones</h3>
			<button
				className="button--link"
				onClick={props.handleDeleteOptions}>
				Borrar todo
		</button>
		</div>
		{props.options.length === 0 && <p className="widget__message"> Por favor añade una opción para empezar </p>}
		{
			props.options.map((opcion, index) => (
				<Option
					key={opcion}
					value={opcion}
					count={index + 1}
					handleDeleteOption={props.handleDeleteOption}
				/>
			))
		}
	</div>
);


export default Options;