var linecanvas = document.getElementById("line-c15-bar");
var linectx = linecanvas.getContext("2d");
const Linedata = () => {
  let CTX = document
    .querySelector(".chart-wrapper #line-c15-bar")
    .getContext("2d");
  var gradient = CTX.createLinearGradient(0, 140, 0, 220);
  gradient.addColorStop(0, "#FFF2E5");

  gradient.addColorStop(1, "#fff");

  var gradientSecond = CTX.createLinearGradient(0, 140, 0, 220);
  gradientSecond.addColorStop(0, "#EDEDED");

  gradientSecond.addColorStop(1, "#fff");

  return {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "First dataset",
        data: [5000, 7000, 3000, 2000, 8000, 6500, 8000, 9500],
        fill: true,

        backgroundColor: gradientSecond,
        borderColor: "#A3A5B5",
      },
      {
        label: "First dataset",
        data: [7000, 3000, 9000, 7000, 6000, 6500, 8000, 10500],
        fill: true,

        backgroundColor: gradient,
        borderColor: "#E77817",
      },
    ],
  };
};
const Lineoptions = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.3,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        font: {
          size: 15,
        },
      },
    },
    y: {
      afterFit: function (scale) {
        // scale.paddingRight=600  //<-- set value as you wish
        console.log(scale);
      },

      grid: {
        borderDash: [8, 4],
        drawBorder: false,
      },
      ticks: {
        reverse: false,
        stepSize: 4000,
        font: {
          size: 15,
        },
      },
    },
  },
};
var chartLine = new Chart(linectx, {
  type: "line",
  data: Linedata(),
  options: Lineoptions,
});
