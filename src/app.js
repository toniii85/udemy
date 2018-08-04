
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Cosa 1", "Cosa 2", "Cosa 3"],
    };
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    alert(option);
  }

  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => ( {options: [...prevState.options, option]}));

  }

  render() {
    const title = "Indecisión App";
    const subtitle = "Pon tus manos en la vida del ordenador";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          onClickAction={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {

  render() {
    return (
      <div>
        <button
          onClick={this.props.onClickAction}
          disabled={!this.props.hasOptions}
        >
          Qué debería hacer?
        </button>
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.value}
      </div>
    );
  }
}
class Options extends React.Component {

  constructor(props) {
    super(props);
    // this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll = () => {
    this.props.handleDeleteOptions();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}> Borrar todo </button>
        {this.props.options.map(opcion => <Option key={opcion} value={opcion} />)}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

  }
  render() {
    return (
      <div>
      {
        this.state.error && <p>{this.state.error}</p>
      }
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <button> Añadir </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));