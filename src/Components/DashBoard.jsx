import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashBoard() {
  const webDevTrendsData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Web Development Jobs (in millions)',
        data: [3.5, 4.1, 4.8, 5.3, 6.0, 6.7],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const rankStreakData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Rank Streak',
        data: [1, 2, 3, 2, 4],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Upskill Mafia Dashboard</h1>
        <p className="text-lg text-gray-600 text-center mt-2">Your hub for web development insights and progress tracking</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Chart for Web Development Trends */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Web Development Trends</h2>
          <Line data={webDevTrendsData} />
        </div>

        {/* Chart for Rank Streak */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rank Streak</h2>
          <Bar data={rankStreakData} />
        </div>

        {/* Scope of Web Development */}
        <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scope of Web Development</h2>
          <p className="text-gray-700">
            Web development is a rapidly growing field with increasing demand for skilled developers. As businesses continue to move online, the need for creating, maintaining, and optimizing websites has never been greater. The future of web development holds promising opportunities, with trends focusing on more interactive and user-friendly interfaces, responsive designs, and powerful backend technologies.
          </p>
        </div>

        {/* Additional Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Learning Resources</h2>
          <p className="text-gray-700">
            At Upskill Mafia, we offer a wide range of resources to help you become a top-tier web developer. Our platform provides access to courses, tutorials, and a community of developers eager to share knowledge and collaborate on projects. Keep pushing forward in your journey to mastering web development!
          </p>
        </div>
      </div>
    </div>
  );
}


export default DashBoard