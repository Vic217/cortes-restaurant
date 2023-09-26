// Página de Acerca de Nosotros
function crearAbout () {
    const about = document.createElement("div");
    about.classList.add("about");

    about.appendChild(crearParrafo("Somos el restaurant con más galardones estatales."));
    about.appendChild(crearParrafo("Encuentranos en la web como BEEF, PORK MEATTTT!!!"));
    const mapa = document.createElement("img");
    mapa.src = "img/res.png";

    about.appendChild(mapa);
    about.appendChild(crearParrafo("Los letreros son espectaculares al igual que nuestros cortes!!!"))
    about.appendChild(crearParrafo("Tenemos la mejor calidad, con carne de primera, nuestros animales viven en espacios libres y con total libertad para evitar el estrés."));

    return about;
}

function crearParrafo(texto) {
    const parrafo = document.createElement("p");
    parrafo.textContent = texto;
    return parrafo;
}

function cargarAbout() {
    const main = document.getElementById("main"); 
    main.textContent = "";
    main.appendChild(crearAbout());
}

export default cargarAbout;