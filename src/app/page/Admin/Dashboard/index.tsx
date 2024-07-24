import { Col, Row } from 'antd';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import { useEffect, useState } from 'react';
import { processGetQuery } from 'api';

interface Booking {
  dishId: number;
  bookingId: number;
  createAt: string;
  updatedAt: string;
}

interface Dish {
  id: number;
  name: string;
  price: number;
  role: string;
  createAt: string;
  updatedAt: string;
  bookings: Booking[];
}

function Dashboard() {
  const [topDishes, setTopDishes] = useState<Dish[]>([]);

  useEffect(() => {
    processGetQuery('/dish').then((data) => {
      const nextDishes: Dish[] = data.dishes;
      const top5Dishes: Dish[] = nextDishes.toSorted((a, b) => b.bookings.length - a.bookings.length).slice(0, 5);
      setTopDishes(top5Dishes);
    });
  }, []);

  return (
    <div className="w-full h-[500px]">
      <h1>Thống kê</h1>
      <Row className="w-full" gutter={[6, 40]}>
        <Col span={14} className="mb-8">
          <BarChart />
        </Col>
        <Col span={10}>
          <div className="w-[300px] mx-auto">
            <DonutChart />
          </div>
        </Col>
        <Col span={14}>
          <LineChart />
        </Col>
        <Col span={10}>
          <div className="w-[400px] mx-auto">
            <h2>Món ăn được đặt nhiều nhất</h2>
            <Row className="w-full" gutter={[6, 6]}>
              {topDishes.map((dish: Dish) => (
                <Col key={dish.id} span={24} className="w-full">
                  <Row>
                    <Col span={10}>
                      <p>{dish.name}</p>
                    </Col>
                    <Col span={10}>
                      <p>{dish.price.toLocaleString('vi-VN')} VNĐ</p>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
