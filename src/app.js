
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }

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
  }
  handleDeleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(elem => option !== elem),
    }));
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
    this.setState((prevState) => ({ options: [...prevState.options, option] }));

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
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: "Indecisión",
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.onClickAction}
        disabled={!props.hasOptions}
      >
        Qué debería hacer?
        </button>
    </div>
  );
};


const Option = (props) => {
  return (
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
};

const Options = (props) => {
  return (
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
};


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

    if (!error) {
      event.target.elements.option.value = "";
    }

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

// const User = ({name, age}) => {
//   return (
//     <div>
//       <p>Name: {name} </p>
//       <p>Age: {age} </p>
//     </div>
//   );
// }

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));