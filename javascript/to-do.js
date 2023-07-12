const appendinoCose = document.querySelector("main");
const btpPerSubmit = document.getElementsByClassName("invia");

const createSomenthing = (submitEvent) => {
  submitEvent.preventDefault();
  const infoInviate = submitEvent.target;
  const infoInvDentro = infoInviate.elements;
  const cosaDaFare = {};
  for (i = 0; i < infoInvDentro.length; i++) {
    const inputDiQualcosa = infoInvDentro[i].value;
    const idDiQualcosa = infoInvDentro[i].id;
    cosaDaFare[idDiQualcosa] = inputDiQualcosa;
  }
  const postIt = document.createElement("div");
  postIt.classList.add("boh");
  const divElimina = document.createElement("div");
  divElimina.classList.add("divE");
  const elimina = document.createElement("buttom");
  const divOggettoLista = document.createElement("div");
  divOggettoLista.classList.add("divOL");
  const oggettoLista = document.createElement("p");
  oggettoLista.classList.add("nonFatto");
  const divDataLista = document.createElement("div");
  divDataLista.classList.add("divDL");
  const dataLista = document.createElement("h3");
  oggettoLista.innerText = `${cosaDaFare["to-do"]}`;
  dataLista.innerText = `${cosaDaFare.date}`;
  elimina.innerHTML = `<button onclick = "eliminatePostIt(event)"></button>`;
  postIt.appendChild(divElimina);
  divElimina.appendChild(elimina);
  postIt.appendChild(divOggettoLista);
  divOggettoLista.appendChild(oggettoLista);
  postIt.appendChild(divDataLista);
  divDataLista.appendChild(dataLista);
  appendinoCose.appendChild(postIt);
};
console.log(appendinoCose);

const eliminatePostIt = (eliminateEvent) => {
  const seleziona = document.querySelector("main div");
  seleziona.remove();
};

const fatto = () => {
  const scritteDaFare = document.getElementsByClassName("nonFatto");
  scritteDaFare.classList.toggle("fatto");
};
