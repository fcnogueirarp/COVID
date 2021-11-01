export function verificaTotalDeMortes(paisesFiltrados) {
  let mortes = paisesFiltrados.map((pais) => {
    let morte = pais.Deaths;
    return morte;
  });
  let totalDeMortes = _.last(mortes);
  let kpideaths = document.getElementById("kpideaths");
  kpideaths.innerHTML = totalDeMortes.toLocaleString('pt-BR');

  var mortesDiarias = [];
  for (let i = 0; i <= mortes.length; i++) {
    mortesDiarias[i] = mortes[i + 1] - mortes[i];
    console.log(mortesDiarias[i]);
  }

  const novoMortesDiarias = mortesDiarias.filter(function (value) {
    return !Number.isNaN(value);
  });
  let mediaMortes = _.sum(novoMortesDiarias) / novoMortesDiarias.length;
  console.log("média mortes " + mediaMortes);

  let datas = paisesFiltrados.map((pais) => {
    let data = pais.Date;
    return data;
  });
  datas = _.split(datas, "T00:00:00Z");

  const ctx = document.getElementById("linhas");
  if (window.myCharts != undefined) window.myCharts.destroy();
  window.myCharts = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Número de Mortes",
          data: [],
          backgroundColor: ["rgba(255, 100, 0, 1)"],
          borderColor: ["rgba(255, 100, 0, 1)"],
          borderWidth: 1,
        },
        {
          label: "Média de Mortes",
          data: [],

          backgroundColor: ["rgba(255, 0, 0, 1)"],
          borderColor: ["rgba(255, 0, 0, 1)"],
          borderWidth: 1,
        },
      ],
    },
  });

  for (let i = 0; i <= novoMortesDiarias.length; i++) {
    window.myCharts.data.datasets[1].data.push(mediaMortes);
  }
  for (let i = 0; i <= novoMortesDiarias.length; i++) {
    window.myCharts.data.datasets[0].data.push(novoMortesDiarias[i]);
    window.myCharts.data.labels.push(datas[i]);
  }
  window.myCharts.update();
}
