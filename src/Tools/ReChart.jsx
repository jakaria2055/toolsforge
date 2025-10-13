import React from "react";
import LineCharts from "../components/rechart/LineCharts";
import BarChartComponents from "../components/rechart/BarChartComponents";
import PieChartComponents from "../components/rechart/PieChartComponents";
import AreaChartComponents from "../components/rechart/AreaChartComponents";
import ComposedChartComponent from "../components/rechart/ComposedChartComponent";


const ReChart = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <img
                  src="/icon/chart.svg"
                  alt=""
                  className="w-6 h-6 text-blue-600"
                />
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-800">
                Re-Chart
              </h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Main */}
      <LineCharts />
      <BarChartComponents />
      <PieChartComponents />
      <AreaChartComponents />
      <ComposedChartComponent />
    </div>
  );
};

export default ReChart;
