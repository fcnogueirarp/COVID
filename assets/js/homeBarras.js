export function exibeBarras(DadosPorPais) {
  let ordenadoPorMortes = _.orderBy(DadosPorPais, ["TotalDeaths"], ["desc"]);
  const ctx = document.getElementById("barras");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [],
      datasets: [
        {
          label: "Total de Mortes Por País",
          data: [],
          backgroundColor: ["rgba(200, 99, 255, 1)"],
          borderColor: ["rgba(200, 99, 255, 1)"],
          borderWidth: 1,
        },
      ],
    },
  });

  top10(ordenadoPorMortes);

  function top10(ordenadoPorMortes) {
    for (let i = 0; i < 10; i++) {
      myChart.data.labels.push(ordenadoPorMortes[i].Country);
      myChart.data.datasets[0].data.push(ordenadoPorMortes[i].TotalDeaths);
    }
  }

  myChart.data.labels;
  myChart.data.datasets[0].data;
  myChart.update();

}
