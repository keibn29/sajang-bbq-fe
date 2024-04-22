import { Button, Col, Image, Row } from 'antd';
import { processGetQuery } from 'api';
import drink1 from 'assets/images/menu/logo-bia-tiger-crystal_091106427.jpeg';
import { DynamicKeyObject } from 'model';
import { useEffect, useState } from 'react';

const Gallery = () => {
  const [data, setData] = useState<DynamicKeyObject[]>([]);

  useEffect(() => {
    processGetQuery('/gallery', { current: 1, size: 8 }).then((res) => {
      setData(res.galleries);
    });
  }, []);

  const data1 = Array.from({ length: 12 });
  return (
    <div>
      <Row className="max-w-[1200px] !mx-auto py-[50px]">
        <Col span={16} className="w-full h-[500px]">
          <Row className="w-full" gutter={[12, 12]}>
            {data1.map((_, item) => (
              <Col key={item} span={6} className="w-full h-[100px] ">
                <Image src={drink1} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={8} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">KHÔNG GIAN 5 SAO</p>
          <Button type="primary">Xem Thêm</Button>
        </Col>
        <Col span={8} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">ẨM THỰC THƯỢNG HẠNG</p>
          <Button type="primary">Xem Thêm</Button>
        </Col>
        <Col span={16} className="w-full h-[500px]">
          <Row className="w-full" gutter={[12, 12]}>
            {data1.map((_, item) => (
              <Col key={item} span={6} className="w-full h-[100px] ">
                <Image src={drink1} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={16} className="w-full h-[500px]">
          <Row className="w-full" gutter={[12, 12]}>
            {data1.map((_, item) => (
              <Col key={item} span={6} className="w-full h-[100px] ">
                <Image src={drink1} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={8} className="text-center mt-5 px-5">
          <p className="text-primary font-bold text-[45px]">THỰC KHÁCH</p>
          <Button type="primary">Xem Thêm</Button>
        </Col>
      </Row>
      <Row className="!mx-auto py-[50px]">
        {data.map((item: DynamicKeyObject) => (
          <Col key={item.id} span={6} className="w-full h-[300px] image-list">
            <Image src={`${import.meta.env.VITE_API_ENPOINT}/${item.url}`} width="100%" height={300} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
