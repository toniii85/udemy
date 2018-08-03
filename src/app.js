
class IndecisionApp extends React.Component {
  render() {
    const title = "Indecisión App";
    const subtitle = "Pon tus manos en la vida del ordenador"
    const options = ["Cosa 1", "Cosa 2", "Cosa 3"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  handlePick() {
    alert("handlePick");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>Qué debería hacer?</button>
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
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);
    // alert("handleRemove");
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
  handleSubmit(event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <button> Añadir </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));