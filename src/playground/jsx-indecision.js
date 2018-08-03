console.log("App.js is running");

//JSX - Javascript XML
//create app object title/subtitle
//use title and subtitle in the template en h1 y en p
//render template

// solo renderizar subtitulo y el tag p si el subtitulo existe - logical and operator
//render new p tag - if options.length > 0 "here are your options" : No options
const app = {
    title: "App Indecision",
    subtitle: "Pon tu vida en manos de un ordenador",
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderFunction();
    }
};

//Create removeAll button above list
// onClick -> vaciar array ->  rerender
const onRemoveAll = () => {
    app.options = [];
    renderFunction();
};

const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    const option = app.options[random];
    alert(option);
};

const appRoot = document.getElementById('app');


const renderFunction = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? "Ahí están tus opciones" : "No hay opciones"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>Qué debería hacer?</button>
            <button onClick={onRemoveAll}>Remove all</button>

            <ol>
                {app.options.map(opcion => <li key={opcion}>{opcion}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderFunction();