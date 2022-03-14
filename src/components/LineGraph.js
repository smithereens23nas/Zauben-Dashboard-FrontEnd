import React from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri"],
    datasets: [
      {
        label: "Attendance for Week 1",
        data: [25, 24, 25, 25, 23],
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: [
          "rgba(22,99,12,1)",
          "rgba(22,211,6,1)",
          "rgba(4,162,25,1)",
          "rgba(25,159,4,1)",
          "rgba(1,102,55,1)",
        ],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
        backgroundImage:
          'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        drawBorder: true,
        text: "Doughnut Chart",
        color: "red",
        font: {
          size: 34,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
          color: true,
        },
      },
    },
  };
  return (
    <div>
      <Line
        data={{
          // x-axis label values
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          datasets: [
            {
              label: "# of Calories Lost",
              // y-axis data plotting values
              data: [200, 300, 1300, 520, 2000, 350, 150],
              fill: false,
              borderWidth: 5,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "red",
              responsive: true,
            },
          ],
        }}
      />
    </div>
  );
}

export default LineChart;
