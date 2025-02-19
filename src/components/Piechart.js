import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const GenderPieChart = () => {
  const totalStudents = 532; // Total number of students
  const femaleStudents = 232; // Number of female students
  const maleStudents = totalStudents - femaleStudents; // Male students count

  const data = {
    labels: ["Female Students", "Male Students"],
    datasets: [
      {
        data: [femaleStudents, maleStudents], // Gender distribution
        backgroundColor: ["#FF6384", "#36A2EB"], // Colors for segments
        hoverBackgroundColor: ["#FF3366", "#3399FF"], // Hover effect colors
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return <Pie data={data} options={options} />;
};

export default GenderPieChart;
