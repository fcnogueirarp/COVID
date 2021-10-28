export function exibePainelEGrafico(
  TotalDeConfirmados,
  TotalDeMortes,
  TotalDeRecuperados,
  NovosConfirmados,
  NovosRecuperados,
  NovasMortes,
) {
  document.getElementById("confirmed").innerHTML = TotalDeConfirmados;
  document.getElementById("death").innerHTML = TotalDeMortes;
  document.getElementById("recovered").innerHTML = TotalDeRecuperados;

  //pizza

  //graficos
  const ctx = document.getElementById("pizza").getContext("2d");
  const pizza = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Confirmados", "Recuperados", "Mortes"],
      datasets: [
        {
          label: "Distribuição de Novos Casos",
          data: [],
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
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
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  pizza.data.datasets[0].data.push(NovosConfirmados);
  pizza.data.datasets[0].data.push(NovosRecuperados);
  pizza.data.datasets[0].data.push(NovasMortes);
  pizza.update();
}
