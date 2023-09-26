// Página principal
function crearInicio () {
    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(crearParrafo("Somos el lugar con los mejores cortes 🥩!!"));
    
    const cocinando = document.createElement("img");
    cocinando.src = "img/cooking.png";
    cocinando.width = 175;

    home.appendChild(cocinando);
    home.appendChild(crearParrafo("Ven a comprobarlo tu mismo!!!"));
    home.appendChild(crearParrafo("Visita nuestro menú en línea 📖 o ven a conocernos!!"))

    return home;
}

function crearParrafo(texto) {
    const parrafo = document.createElement("p");
    parrafo.textContent = texto;
    return parrafo;

}

function cargarInicio() {
    const main = document.getElementById("main"); 
    main.textContent = "";
    main.appendChild(crearInicio());
}

export default cargarInicio;