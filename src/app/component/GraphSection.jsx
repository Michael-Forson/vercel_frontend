"use client";
import React from "react";
import { BarChart3 } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const graphData = [
  { name: "Jan", views: 1000, clicks: 800 },
  { name: "Feb", views: 1200, clicks: 900 },
  { name: "Mar", views: 2000, clicks: 1100 },
  { name: "Apr", views: 2200, clicks: 1500 },
  { name: "May", views: 4500, clicks: 1700 },
  { name: "Jun", views: 3000, clicks: 2005 },
  { name: "Jul", views: 5000, clicks: 800 },
  { name: "Aug", views: 6000, clicks: 3200 },
  { name: "Sep", views: 5500, clicks: 4100 },
  { name: "Oct", views: 5500, clicks: 1500 },
  { name: "Nov", views: 9200, clicks: 3300 },
  { name: "Dec", views: 14100, clicks: 3305 },
];

export default function GraphSection() {
  return (
    <section className="mx-auto mt-10 lg:mt-20 w-5/6 lg:w-4/6 bg-black text-white rounded-lg p-6 border border-gray-800">
      {/* Header Section */}
      <div className=" py-10 z-50 absolute bg-gradient-to-r from-black via-black/90 to-transparent">
        <div className="px-4 flex items-center gap-2  text-gray-400">
          <BarChart3 size={18} />
          <span className="text-xl">Frontend Observability</span>
        </div>

        <h2 className="px-4  text-2xl font-semibold mt-2">
          <span className="text-white">
            Privacy-friendly, lightweight Analytics.
          </span>
        </h2>
        <p className="px-4 text-lg text-gray-400 mt-2">
          Upgrade your post-launch workflow with actionable, real-time insights.
        </p>
      </div>
      {/* Graph Section */}
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={graphData}>
            {/* <XAxis dataKey="name" stroke="gray" /> */}
            <CartesianGrid
              stroke="rgba(255, 255, 255, 0.2)"
              strokeDasharray="0"
              vertical={false}
            />
            <YAxis stroke="gray" />
            <Tooltip
              content={({ payload }) => {
                if (!payload || !payload.length) return null;

                const currentData = payload[0].payload;
                const currentIndex = graphData.findIndex(
                  (item) => item.name === currentData.name
                );

                let viewsChange = null;
                let clicksChange = null;

                if (currentIndex > 0) {
                  const prevData = graphData[currentIndex - 1];
                  viewsChange = +(
                    ((currentData.views - prevData.views) / prevData.views) *
                    100
                  ).toFixed(1);
                  clicksChange = +(
                    ((currentData.clicks - prevData.clicks) / prevData.clicks) *
                    100
                  ).toFixed(1);
                }

                return (
                  <div className="bg-gray-900 p-3 rounded-lg border border-gray-700 text-white text-sm">
                    <p>
                      Views:{" "}
                      <span className="font-semibold">{currentData.views}</span>
                      {viewsChange !== null && (
                        <span
                          className={`ml-2 ${
                            viewsChange >= 0 ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {viewsChange >= 0 ? "+" : ""}
                          {viewsChange}%
                        </span>
                      )}
                    </p>
                    <p className="mt-1">
                      Clicks:{" "}
                      <span className="font-semibold">
                        {currentData.clicks}
                      </span>
                      {clicksChange !== null && (
                        <span
                          className={`ml-2 ${
                            clicksChange >= 0
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {clicksChange >= 0 ? "+" : ""}
                          {clicksChange}%
                        </span>
                      )}
                    </p>
                  </div>
                );
              }}
            />
            <Legend
              wrapperStyle={{ paddingTop: 20 }}
              formatter={(value) => (
                <span className="text-gray-400 text-sm">{value}</span>
              )}
            />
            <Line
              type="linear"
              dataKey="views"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="linear"
              dataKey="clicks"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
