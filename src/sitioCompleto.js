import cargarInicio from "./home";
import cargarMenu from "./menu";
import cargarAbout from "./about";

// Fondo General
function crearFondo() {
    const cuerpo = document.querySelector("body");
    cuerpo.style.backgroundImage = "url(img/madera.jpg)";
    return cuerpo;
}

// Cabecera general
function crearHeader() {
    const header = document.createElement("header");
    header.setAttribute("id", "cabecera");
    header.style.background = "#C6806090";

    const h1 = document.createElement("h1");
    h1.textContent = "BEEF, PORK MEATTTT!!!";

    const divimg = document.createElement("div");
    divimg.classList.add("cont-imgs");

    const cerdo = document.createElement("img");
    cerdo.src = "img/pig.png";
    cerdo.width = 160;

    const cow = document.createElement("img");
    cow.src = "img/cow.png";
    cow.width = 160;
    
    divimg.appendChild(cerdo);
    divimg.appendChild(cow);
    header.appendChild(h1);
    header.appendChild(divimg);

    return header;
}

// Funcion que crea el main a utilizar con todos los módulos
function crearMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    main.style.background = "#C6806090";
    return main;
}


// Navegación de las páginas, botones
function crearNav() {
    const nav = document.createElement("nav");

    const botonHome = document.createElement("button");
    botonHome.classList.add("boton-navegación");
    botonHome.textContent = "Home";

    botonHome.addEventListener("click", (e) => {
        if(!e.target.classList.contains("activado")){
            activaBoton(botonHome);
        }
        cargarInicio();
    });

    const botonMenu = document.createElement("button");
    botonMenu.classList.add("boton-navegación");
    botonMenu.textContent = "Menu";

    botonMenu.addEventListener("click", (e) => {
        if(!e.target.classList.contains("activado")){
            activaBoton(botonMenu);
        }
        cargarMenu();
    });

    const botonAbout = document.createElement("button");
    botonAbout.classList.add("boton-navegación");
    botonAbout.textContent = "About";

    botonAbout.addEventListener("click", (e) => {
        if(!e.target.classList.contains("activado")){
            activaBoton(botonAbout);
        }
        cargarAbout();
    });

    nav.appendChild(botonHome);
    nav.appendChild(botonMenu);
    nav.appendChild(botonAbout);

    return nav;
}

// Footer General
function crearFooter() {
    const footer = document.createElement("footer");

    const parrafoFooter = document.createElement("p");
    parrafoFooter.textContent = "Copyright © 2023";

    const enlace = document.createElement("a");
    enlace.href = "https://github.com/Vic217?tab=repositories";
    enlace.alt = "Repositorios de github";
    enlace.textContent = "Vic217";

    const img = document.createElement("img");
    img.src = "img/github-mark.png";
    img.setAttribute("id", "logo-github");
    img.setAttribute("width", "30px");

    enlace.appendChild(img);

    footer.appendChild(parrafoFooter);
    footer.appendChild(enlace);
    footer.style.background = "#C6806090";

    return footer;
}

// Activado de boton, cambios de clase
function activaBoton(btn) {
    const botones = document.getElementsByClassName("boton-navegación");

    btn.classList.add("activado");

    [...botones].forEach(boton => {
        if(boton.classList.contains("activado") && boton !== btn){
            boton.classList.remove("activado");
        }
    })
}

// Inicio del sitio web
function inicializaSitioWeb() {
    const contenido = document.getElementById("contenido");

    crearFondo();
    contenido.appendChild(crearHeader());
    contenido.appendChild(crearNav());
    contenido.appendChild(crearMain());
    cargarInicio();
    contenido.appendChild(crearFooter());
}

export default inicializaSitioWeb;