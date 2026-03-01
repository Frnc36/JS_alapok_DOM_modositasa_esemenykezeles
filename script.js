window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese2Class();
  let lista = velSzamokGen();
  listaKiir(lista);
  formazas();
  esemenyKezelo();
  esemenyKezelo2();
  esemenyKezelo4();
});

function elemekElerese1() {
  let hkettoElem = document.getElementById("f1");
  //console.log(hkettoElem) //elem tagjet is
  console.log(hkettoElem.innerHTML); //csak az elem tartalmát
}
function elemekElerese2() {
  let pElem = document.getElementById("ide");
  pElem.innerHTML = "<p>Jó reggelt!</p>";
  console.log(pElem);
}

function elemekElerese2Class() {
  let pElemClass = document.getElementsByClassName("ide");
  pElemClass[0].innerHTML = "<p>Jó reggelt!</p>";
  console.log(pElemClass);
}

function velSzamokGen() {
  const velSzamok = [];
  for (let index = 0; index < 5; index++) {
    let velSzam = Math.floor(Math.random() * 21 + 10);
    velSzamok.push(velSzam);
  }
  return velSzamok;
}

function listaKiir(lista) {
  let szoveg = "<ul>";
  for (let index = 0; index < lista.length; index++) {
    szoveg += `<li>${lista[index]}</li>`;
  }
  szoveg += "</ul>";
  let divElem = document.getElementsByClassName("lista");
  console.log(divElem);
  divElem[0].innerHTML = szoveg;
}

function formazas() {
  let szovegElem = document.getElementsByClassName("lista");
  szovegElem[0].classList.add("formazott");
}

/* function esemenyKezelo() {
  const listaElem = document.querySelector(".lista");
  listaElem.addEventListener("click", function () {
    const kattintasutanElem = document.getElementsByClassName("kattintasutan");
    kattintasutanElem.innerHTML = listaElem.innerHTML;
  });
} */

function esemenyKezelo() {
  let listaElem = document.querySelector(".lista");
  listaElem.addEventListener("click", function () {
    let kattintasutanElem = document.querySelector(".kattintasutan");
    kattintasutanElem.innerHTML = listaElem.innerHTML;
  });
}

function esemenyKezelo2() {
  let feladatElem = document.querySelector(".feladat");
  feladatElem.innerHTML = "<button>OK</button>";
  let feladatButton = document.querySelector(".feladat button");
  feladatButton.addEventListener("click", function () {
    //feladatButton.innerHTML += `<div><img src="ceca.jpg" alt="Ceca" title="Ceca" class='kep-nagy'></div>`;
    feladatElem.innerHTML += `<div><img src="ceca.jpg" alt="Ceca" title="Ceca"></div>`;
    esemenyKezelo3();
  });
}

/* function esemenyKezelo3() {
    let kepElem = document.querySelector(".feladat img");
    kepElem.addEventListener("mouseenter", function() {
        kepElem.style.width = "300px";
        kepElem.style.height = "auto";
        kepElem.style.transition = "0.3s";
    });
    
    kepElem.addEventListener("mouseleave", function() {
        kepElem.style.width = "";
        kepElem.style.height = "";
        kepElem.style.transition = "0.3s";
    });
} */

function esemenyKezelo3() {
  let kepElem = document.querySelector(".feladat img");
  kepElem.addEventListener("mouseenter", function () {
    kepElem.classList.add("kep-nagy");
  });

  kepElem.addEventListener("mouseleave", function () {
    kepElem.classList.remove("kep-nagy");
  });
}

function esemenyKezelo4() {
  let taroloElemek = document.querySelectorAll(".tarolo .elem");
  for (let i = 0; i < taroloElemek.length; i++) {
    taroloElemek[i].addEventListener("click", function (event) {
      let tartalom = event.target.innerHTML;
      let megjelenito = document.querySelector(".megjelenito");
      megjelenito.innerHTML = tartalom;
    });
  }
}
