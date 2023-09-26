// Página de Menu
function crearMenu () {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const primerPlatillo = document.createElement("div");
    primerPlatillo.appendChild(crearParrafo("Cowboy red wine🍷"));
    const imgCowboy = document.createElement("img");
    imgCowboy.src = "img/cowred.jpg";
    imgCowboy.width = 130;
    imgCowboy.classList.add("plato")
    primerPlatillo.appendChild(imgCowboy);

    const segundoPlatillo = document.createElement("div");
    segundoPlatillo.appendChild(crearParrafo("Aguachile de picaña!"));
    const imgPica = document.createElement("img");
    imgPica.src = "img/picaña.jpg";
    imgPica.width = 130;
    imgPica.classList.add("plato")
    segundoPlatillo.appendChild(imgPica);

    const tercerPlatillo = document.createElement("div");
    tercerPlatillo.appendChild(crearParrafo("Rib Eye todos santos!!"))
    const imgRib = document.createElement("img");
    imgRib.src = "img/rib.jpg";
    imgRib.width = 130;
    imgRib.classList.add("plato")
    tercerPlatillo.appendChild(imgRib)

    menu.appendChild(primerPlatillo);
    menu.appendChild(segundoPlatillo);
    menu.appendChild(tercerPlatillo);

    return menu;
}

function crearParrafo(texto) {
    const parrafo = document.createElement("p");
    parrafo.textContent = texto;
    return parrafo;
}

function cargarMenu() {
    const main = document.getElementById("main"); 
    main.textContent = "";
    main.appendChild(crearMenu());
}

export default cargarMenu;