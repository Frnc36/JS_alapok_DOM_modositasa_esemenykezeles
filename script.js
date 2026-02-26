window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese2Class();
  let lista = velSzamokGen();
  listaKiir(lista);
  formazas();
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

function esemenyKezelo() {
    let divElem = document.getElementsByClassName("lista");
    divElem.addEventListener("esemeny", fvenynev)
}