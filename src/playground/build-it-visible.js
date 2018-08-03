
let mostrando = false;

const esconderResultado = () => {
    mostrando = !mostrando;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1> Visible </h1>
            <button onClick={esconderResultado}>
                {mostrando ? "Esconder detalles" : "Mostrar detalles"}
            </button>
            {mostrando &&
                <p> Estos son algunos detalles </p>
            }
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();