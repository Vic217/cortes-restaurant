(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home"),t.appendChild(e("Somos el lugar con los mejores cortes 🥩!!"));const n=document.createElement("img");return n.src="img/cooking.png",n.width=175,t.appendChild(n),t.appendChild(e("Ven a comprobarlo tu mismo!!!")),t.appendChild(e("Visita nuestro menú en línea 📖 o ven a conocernos!!")),t}())};function n(e){const t=document.createElement("p");return t.textContent=e,t}function c(e){const t=document.createElement("p");return t.textContent=e,t}function a(e){const t=document.getElementsByClassName("boton-navegación");e.classList.add("activado"),[...t].forEach((t=>{t.classList.contains("activado")&&t!==e&&t.classList.remove("activado")}))}!function(){const e=document.getElementById("contenido");document.querySelector("body").style.backgroundImage="url(img/madera.jpg)",e.appendChild(function(){const e=document.createElement("header");e.setAttribute("id","cabecera"),e.style.background="#C6806090";const t=document.createElement("h1");t.textContent="BEEF, PORK MEATTTT!!!";const n=document.createElement("div");n.classList.add("cont-imgs");const c=document.createElement("img");c.src="img/pig.png",c.width=160;const a=document.createElement("img");return a.src="img/cow.png",a.width=160,n.appendChild(c),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("nav"),o=document.createElement("button");o.classList.add("boton-navegación"),o.textContent="Home",o.addEventListener("click",(e=>{e.target.classList.contains("activado")||a(o),t()}));const d=document.createElement("button");d.classList.add("boton-navegación"),d.textContent="Menu",d.addEventListener("click",(e=>{e.target.classList.contains("activado")||a(d),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("div");t.appendChild(n("Cowboy red wine🍷"));const c=document.createElement("img");c.src="img/cowred.jpg",c.width=130,c.classList.add("plato"),t.appendChild(c);const a=document.createElement("div");a.appendChild(n("Aguachile de picaña!"));const o=document.createElement("img");o.src="img/picaña.jpg",o.width=130,o.classList.add("plato"),a.appendChild(o);const d=document.createElement("div");d.appendChild(n("Rib Eye todos santos!!"));const i=document.createElement("img");return i.src="img/rib.jpg",i.width=130,i.classList.add("plato"),d.appendChild(i),e.appendChild(t),e.appendChild(a),e.appendChild(d),e}())}()}));const i=document.createElement("button");return i.classList.add("boton-navegación"),i.textContent="About",i.addEventListener("click",(e=>{e.target.classList.contains("activado")||a(i),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("about"),e.appendChild(c("Somos el restaurant con más galardones estatales.")),e.appendChild(c("Encuentranos en la web como BEEF, PORK MEATTTT!!!"));const t=document.createElement("img");return t.src="img/res.png",e.appendChild(t),e.appendChild(c("Los letreros son espectaculares al igual que nuestros cortes!!!")),e.appendChild(c("Tenemos la mejor calidad, con carne de primera, nuestros animales viven en espacios libres y con total libertad para evitar el estrés.")),e}())}()})),e.appendChild(o),e.appendChild(d),e.appendChild(i),e}()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e.style.background="#C6806090",e}()),t(),e.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("p");t.textContent="Copyright © 2023";const n=document.createElement("a");n.href="https://github.com/Vic217?tab=repositories",n.alt="Repositorios de github",n.textContent="Vic217";const c=document.createElement("img");return c.src="img/github-mark.png",c.setAttribute("id","logo-github"),c.setAttribute("width","30px"),n.appendChild(c),e.appendChild(t),e.appendChild(n),e.style.background="#C6806090",e}())}()})();