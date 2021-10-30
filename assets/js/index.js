import { exibeBarras } from "./homeBarras.js";
import { exibePainelEGrafico } from "./homePainelEPizza.js";

let caminho = "https://api.covid19api.com";
let res = await axios.get(caminho + "/summary");
console.log(res.data);

let TotalDeConfirmados = res.data.Global.TotalConfirmed;
let TotalDeMortes = res.data.Global.TotalDeaths;
let TotalDeRecuperados = res.data.Global.TotalRecovered;

let NovosConfirmados = res.data.Global.NewConfirmed;
let NovosRecuperados = res.data.Global.NewRecovered;
let NovasMortes = res.data.Global.NewDeaths;
let DadosPorPais = res.data.Countries;

exibePainelEGrafico(
  TotalDeConfirmados,
  TotalDeMortes,
  TotalDeRecuperados,
  NovosConfirmados,
  NovosRecuperados,
  NovasMortes
);

exibeBarras(DadosPorPais);
