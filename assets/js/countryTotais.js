export function verificaTotalDeMortes(paisesFiltrados) {
  let mortesPais = paisesFiltrados.map((pais) => {
    let mortePais = pais.Deaths;
    return mortePais;
  });
  console.log(mortesPais);
  let totalDeMortes = _.last(mortesPais);
  console.log(totalDeMortes);
  let kpideaths = document.getElementById("kpideaths");
  kpideaths.innerHTML = totalDeMortes;
  criaGrafico(totalDeMortes);
  return totalDeMortes;
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

export function criaGrafico(totalDeMortes) {
  const ctx3 = document.getElementById("linhas").getContext("2d");
  const linhas = new Chart(ctx3, {
    type: "line",
    data: {
      labels: ["Número de Mortes", ["Média de Mortes"]],
      datasets: [
        {
          label: "# Curva Diária de COVID 19",
          data: [],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  });

  //linhas.data.datasets[0].data.push(totalDeRecuperados);
  linhas.data.datasets[0].data.push(totalDeMortes);
  linhas.update();
}
