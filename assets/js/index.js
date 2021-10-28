import { exibeBarras } from "./homeBarras.js";
import { exibePainelEGrafico } from "./homePainelEPizza.js";

let res = await axios.get("https://api.covid19api.com/summary");
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
  NovasMortes,
  DadosPorPais
);

exibeBarras(DadosPorPais);
