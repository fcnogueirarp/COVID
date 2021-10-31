export function verificaTotalDeMortes(paisesFiltrados) {
  let mortes = paisesFiltrados.map((pais) => {
    let morte = pais.Deaths;
    return morte;
  });

  var mortesDiarias = [];
  for (let i = 0; i < mortes.length; i++) {
    mortesDiarias[i] = mortes[i + 1] - mortes[i];
  }

  const novoMortesDiarias = mortesDiarias.filter(function (value) {
    return !Number.isNaN(value);
  });

  //console.log(novoMortesDiarias);

  let mediaMortes = _.sum(novoMortesDiarias) / novoMortesDiarias.length;
  console.log("média mortes " + mediaMortes);

  let datas = paisesFiltrados.map((pais) => {
    let data = pais.Date;
    return data;
  });

  datas = _.split(datas, "T", 1);

  let recuperados = paisesFiltrados.map((pais) => {
    let recuperado = pais.Recovered;
    return recuperado;
  });

  //console.log("morte " + mortes);
  // console.log("recuperados " + recuperados);

  let totalDeMortes = _.last(mortes);

  let kpideaths = document.getElementById("kpideaths");
  kpideaths.innerHTML = totalDeMortes;

  const ctx = document.getElementById("linhas");

  if (window.myCharts != undefined) window.myCharts.destroy();
  window.myCharts = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "# Número de Mortes",
          data: [],
          backgroundColor: ["rgba(255, 100, 0, 1)"],
          borderColor: ["rgba(255, 100, 0, 1)"],
          borderWidth: 1,
        },
        {
          label: "# Média de Mortes",
          data: [],

          backgroundColor: ["rgba(255, 0, 0, 1)"],
          borderColor: ["rgba(255, 0, 0, 1)"],
          borderWidth: 1,
        },
      ],
    },
  });
  //console.log("datas" + datas);
  // console.log("média mortes teste " + mediaMortes);

  for (let i = 0; i < novoMortesDiarias.length; i++) {
    window.myCharts.data.datasets[1].data.push(mediaMortes);
  }

  for (let i = 0; i < novoMortesDiarias.length; i++) {
    window.myCharts.data.datasets[0].data.push(novoMortesDiarias[i]);
    window.myCharts.data.labels.push(datas);
  }

  window.myCharts.update();
}

export function verificaTotalDeConfirmados(paisesFiltrados) {
  let confirmadosPais = paisesFiltrados.map((pais) => {
    let confirmadoPais = pais.Confirmed;
    return confirmadoPais;
  });
  let totalDeConfirmados = _.last(confirmadosPais);
  let kpiconfirmed = document.getElementById("kpiconfirmed");
  kpiconfirmed.innerHTML = totalDeConfirmados;
}

export function verificaRecuperados(paisesFiltrados) {
  let recuperadosPais = paisesFiltrados.map((pais) => {
    let recuperadoPais = pais.Recovered;
    return recuperadoPais;
  });
  let totalDeRecuperados = _.last(recuperadosPais);
  let kpirecovered = document.getElementById("kpirecovered");
  kpirecovered.innerHTML = totalDeRecuperados;
}
