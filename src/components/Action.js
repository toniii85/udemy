import React from "react";

const Action = (props) => (
	<div>
		<button
			onClick={props.onClickAction}
			disabled={!props.hasOptions}
		>
			Qué debería hacer?
          </button>
	</div>
);


export default Action;