import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {

	state = {
		options: [],
		selectedOption: undefined,
	};

	componentDidMount() {
		try {

			const json = localStorage.getItem("options");
			const options = JSON.parse(json);

			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (e) {
			//de momento nada
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
		}
	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};

	handleDeleteOption = (option) => {
		this.setState((prevState) => ({
			options: prevState.options.filter(elem => option !== elem),
		}));
	};

	handlePick = () => {
		const random = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[random];
		this.setState(() => ({
			selectedOption: option,
		}));
	};

	handleAddOption = (option) => {
		if (!option) {
			return "Enter valid value to add item";
		} else if (this.state.options.indexOf(option) > -1) {
			return "This option already exists";
		}
		this.setState((prevState) => ({ options: [...prevState.options, option] }));

	};

	handleCloseModal = () => {
		this.setState(() => ({
			selectedOption: undefined
		}) );
	}
	render() {
		const subtitle = "Pon tus manos en la vida del ordenador";
		return (
			<div>
				<Header subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					onClickAction={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption
					handleAddOption={this.handleAddOption}
				/>
				<OptionModal
					selectedOption={this.state.selectedOption}
					handleClearSelectedOption={this.handleCloseModal}
				/>
			</div>
		);
	}
}
export default IndecisionApp;