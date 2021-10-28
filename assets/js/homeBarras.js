export function exibeBarras(DadosPorPais) {
  let ordenadoPorMortes = _.orderBy(DadosPorPais, ["TotalDeaths"], ["desc"]);

  const ctx1 = document.getElementById("barras").getContext("2d");
  const barras = new Chart(ctx1, {
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
      barras.data.labels.push(ordenadoPorMortes[i].Country);
      barras.data.datasets[0].data.push(ordenadoPorMortes[i].TotalDeaths);
    }
  }

  console.log(barras.data.labels);
  console.log(barras.data.datasets[0].data);
  barras.update();
}
