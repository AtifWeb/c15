var barcanvas = document.getElementById("c15-bar");
var barctx = barcanvas.getContext("2d");
var bardata = {
  labels: [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Bengusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
  ],
  datasets: [
    {
      label: "Blue",
      backgroundColor: "#E77817",
      data: [3, 7, 4, 3, 5, 6, 4, 2, 1],
    },
    {
      label: "Red",
      backgroundColor: "#A3A6B4",
      data: [4, 3, 5, 4, 2, 2, 4, 2, 4],
    },
  ],
};
var baroptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  barPercentage: 0.2,
  categorySpacing: 0,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    Xaxis: {
      grid: {
        display: false,
      },
    },
  },
};
// chart object
var myChart = new Chart(barctx, {
  type: "bar",
  data: bardata,
  options: baroptions,
});
