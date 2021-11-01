export function verificaTotalRecuperados(paisesFiltrados) {
  let Recuperados = paisesFiltrados.map((pais) => {
    let Recuperado = pais.Recovered;
    return Recuperado;
  });
  let totalDeRecuperados = _.last(Recuperados);
  let kpirecovered = document.getElementById("kpirecovered");
  kpirecovered.innerHTML = totalDeRecuperados.toLocaleString('pt-BR');

  var RecuperadosDiarias = [];
  for (let i = 0; i < Recuperados.length; i++) {
    RecuperadosDiarias[i] = Recuperados[i + 1] - Recuperados[i];
  }
  const novoRecuperadosDiarias = RecuperadosDiarias.filter(function (value) {
    return !Number.isNaN(value);
  });
  let mediaRecuperados =
    _.sum(novoRecuperadosDiarias) / novoRecuperadosDiarias.length;
  console.log("média Recuperados " + mediaRecuperados);

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
          label: "Número de Recuperados",
          data: [],
          backgroundColor: ["rgba(255, 100, 0, 1)"],
          borderColor: ["rgba(255, 100, 0, 1)"],
          borderWidth: 1,
        },
        {
          label: "Média de Recuperados",
          data: [],

          backgroundColor: ["rgba(255, 0, 0, 1)"],
          borderColor: ["rgba(255, 0, 0, 1)"],
          borderWidth: 1,
        },
      ],
    },
  });

  for (let i = 0; i < novoRecuperadosDiarias.length; i++) {
    window.myCharts.data.datasets[1].data.push(mediaRecuperados);
  }
  for (let i = 0; i < novoRecuperadosDiarias.length; i++) {
    window.myCharts.data.datasets[0].data.push(novoRecuperadosDiarias[i]);
    window.myCharts.data.labels.push(datas[i]);
  }
  window.myCharts.update();
}
