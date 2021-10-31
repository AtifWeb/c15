var canvas = document.getElementById("patient-credit-bar");
var ctx = canvas.getContext("2d");
var data = {
  labels: ["avalable", "free"],
  datasets: [
    {
      backgroundColor: ["#E77817", "#F2F2F2"],
      data: [60, 40],
    },
  ],
};
var options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 60,
  responsive: true,
  maintainAspectRatio: false,
};

// chart object
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: options,
});
