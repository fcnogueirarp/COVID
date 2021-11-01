import { verificaTotalDeMortes } from "./countryTotais.js";
import { verificaTotalConfirmados } from "./verificaConfirmados.js";
import { verificaTotalRecuperados } from "./verificaRecuperados.js";

let dadosPaises = await axios.get("https://api.covid19api.com/countries");
let paises = dadosPaises.data;

let dataInicio = document.getElementById("date_start");
let dataFim = document.getElementById("date_end");

let selectPais = document.getElementById("cmbCountry");
selectPais.innerHTML = criaPaises(paises);

selecionaPais(selectPais, dataInicio, dataFim);

function criaPaises(paises, dataInicio, dataFim) {
  let pais = paises.map((item) => {
    return `<option>${item.Country}</option>`;
  });
  pais.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else return 0;
  });

  return `<select>${pais}</select>`;
}

function selecionaPais(selectPais, dataInicio, dataFim) {
  selectPais.addEventListener("click", () => {
    let option = selectPais.children[selectPais.selectedIndex];
    var pais = option.textContent;
    let promise = fetch(
      `https://api.covid19api.com/country/${pais}?from=${dataInicio.value}T00:00:00Z&to=${dataFim.value}T00:00:00Z`
    );
    console.log(promise);
    promise.then((resposta) => {
      resposta.json().then((paisesFiltrados) => {
        verificaTotalDeMortes(paisesFiltrados);
        verificaTotalConfirmados(paisesFiltrados);
        verificaTotalRecuperados(paisesFiltrados);

        let selectDados = document.getElementById("cmbData");

        selectDados.addEventListener("click", () => {
          if (selectDados.value == "Deaths") {
            verificaTotalDeMortes(paisesFiltrados);
          } else if (selectDados.value == "Recovered") {
            console.log("Recuperados");
            verificaTotalRecuperados(paisesFiltrados);
          } else if (selectDados.value == "Confirmed") {
            console.log("Confirmados");
            verificaTotalConfirmados(paisesFiltrados);
          }
        });
      });
    });
  });
}
