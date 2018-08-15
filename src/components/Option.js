import React from "react";

const Option = (props) => (
	<div className="option">
		<p className="option__text">{props.count}. {props.value}</p>
		<button
			className="button--link"
			onClick={(e) => {
				props.handleDeleteOption(props.value);
			}}
		>
			Borrar
        </button>
	</div>
);


export default Option;
