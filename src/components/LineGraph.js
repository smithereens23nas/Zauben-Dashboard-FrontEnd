import React from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
  
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
              label: "Relative Pressure",
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
