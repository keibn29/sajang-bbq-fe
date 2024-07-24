import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import { processGetQuery } from 'api';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

// Extend dayjs with the isBetween plugin
dayjs.extend(isBetween);
interface Revenue {
  id: number;
  date: string;
  revenue: number;
  createAt: string;
  updatedAt: string;
}

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
    datasets: [
      {
        label: 'Doanh thu tuần này',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [0, 0, 0, 0, 0, 0, 0], // Initial empty data
      },
      {
        label: 'Doanh thu tuần trước',
        backgroundColor: 'rgb(90,106,207)',
        borderColor: 'white',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(90,106,207)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [0, 0, 0, 0, 0, 0, 0], // Initial empty data
      },
    ],
  });

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    processGetQuery('/revenue').then((response) => {
      const revenues: Revenue[] = response.revenues;

      // Initialize arrays to hold revenues for this week and last week
      const thisWeekRevenue = [0, 0, 0, 0, 0, 0, 0];
      const lastWeekRevenue = [0, 0, 0, 0, 0, 0, 0];

      // Get the start of the current week and last week
      const startOfWeek = dayjs().startOf('week').add(1, 'day'); // Start from Monday
      const startOfLastWeek = startOfWeek.subtract(1, 'week');

      revenues.forEach((revenue) => {
        const revenueDate = dayjs(revenue.date, 'DD/MM/YYYY');

        if (revenueDate.isBetween(startOfWeek, startOfWeek.add(6, 'day'), null, '[]')) {
          const dayOfWeek = (revenueDate.day() + 6) % 7; // Adjust to make Monday the first day
          thisWeekRevenue[dayOfWeek] = revenue.revenue;
        } else if (revenueDate.isBetween(startOfLastWeek, startOfLastWeek.add(6, 'day'), null, '[]')) {
          const dayOfWeek = (revenueDate.day() + 6) % 7; // Adjust to make Monday the first day
          lastWeekRevenue[dayOfWeek] = revenue.revenue;
        }
      });

      setChartData({
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
        datasets: [
          {
            label: 'Doanh thu tuần này',
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.4)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: thisWeekRevenue,
          },
          {
            label: 'Doanh thu tuần trước',
            backgroundColor: 'rgb(90,106,207)',
            borderColor: 'white',
            borderWidth: 1,
            hoverBackgroundColor: 'rgb(90,106,207)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: lastWeekRevenue,
          },
        ],
      });
    });
  }, []);

  return (
    <div className="h-[330px]">
      <h2>Doanh thu</h2>
      <Bar data={chartData} options={options} width={100} height={50} />
    </div>
  );
};

export default BarChart;
