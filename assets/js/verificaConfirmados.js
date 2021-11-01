export function verificaTotalConfirmados(paisesFiltrados) {
    let Confirmados = paisesFiltrados.map((pais) => {
      let Confirmado = pais.Confirmed;
      return Confirmado;
    });
    let totalDeConfirmados = _.last(Confirmados);
    let kpiconfirmed = document.getElementById("kpiconfirmed");
    kpiconfirmed.innerHTML = totalDeConfirmados.toLocaleString('pt-BR');
  
    var ConfirmadosDiarias = [];
    for (let i = 0; i < Confirmados.length; i++) {
      ConfirmadosDiarias[i] = Confirmados[i + 1] - Confirmados[i];
    }
    const novoConfirmadosDiarias = ConfirmadosDiarias.filter(function (value) {
      return !Number.isNaN(value);
    });
    let mediaConfirmados =
      _.sum(novoConfirmadosDiarias) / novoConfirmadosDiarias.length;
    console.log("média Confirmados " + mediaConfirmados);
  
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
            label: "Número de Confirmados",
            data: [],
            backgroundColor: ["rgba(255, 100, 0, 1)"],
            borderColor: ["rgba(255, 100, 0, 1)"],
            borderWidth: 1,
          },
          {
            label: "Média de Confirmados",
            data: [],
  
            backgroundColor: ["rgba(255, 0, 0, 1)"],
            borderColor: ["rgba(255, 0, 0, 1)"],
            borderWidth: 1,
          },
        ],
      },
    });
  
    for (let i = 0; i < novoConfirmadosDiarias.length; i++) {
      window.myCharts.data.datasets[1].data.push(mediaConfirmados);
    }
    for (let i = 0; i < novoConfirmadosDiarias.length; i++) {
      window.myCharts.data.datasets[0].data.push(novoConfirmadosDiarias[i]);
      window.myCharts.data.labels.push(datas[i]);
    }
    window.myCharts.update();
  
  }
