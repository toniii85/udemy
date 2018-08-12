import React from "react";

const Option = (props) => (
	<div>
		{props.value}
		<button
			onClick={(e) => {
				props.handleDeleteOption(props.value);
			}}
		>
			Borrar
        </button>
	</div>
);


export default Option;
