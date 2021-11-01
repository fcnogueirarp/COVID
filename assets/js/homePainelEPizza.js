export function exibePainelEGrafico(
  TotalDeConfirmados,
  TotalDeMortes,
  TotalDeRecuperados,
  NovosConfirmados,
  NovosRecuperados,
  NovasMortes
) {
  document.getElementById("confirmed").innerHTML = TotalDeConfirmados.toLocaleString('pt-BR');
  document.getElementById("death").innerHTML = TotalDeMortes.toLocaleString('pt-BR');
  document.getElementById("recovered").innerHTML = TotalDeRecuperados.toLocaleString('pt-BR');

  //graficos
  const ctx = document.getElementById("pizza");
  const myChart = new Chart(ctx, {
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
  });

  myChart.data.datasets[0].data.push(NovosConfirmados);
  myChart.data.datasets[0].data.push(NovosRecuperados);
  myChart.data.datasets[0].data.push(NovasMortes);
  myChart.update();
}
