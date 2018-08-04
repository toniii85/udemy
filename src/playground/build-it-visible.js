class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: false,
		};
	}
	handleToggleVisibility = () => {
		this.setState((prevState) => ({ visibility: !prevState.visibility }));
	}

	render() {
		return (
			<div>
				<h1> Visible</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility ? "Esconder detalles" : "Mostrar detalles"}
				</button>
				<div>
					{this.state.visibility &&
						<p>Los detalles son visibles ahora</p>
					}
				</div>
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
