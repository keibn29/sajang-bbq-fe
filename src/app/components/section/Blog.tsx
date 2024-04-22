import { Col, Row } from 'antd';
import { processGetQuery } from 'api';
import { DynamicKeyObject } from 'model';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [data, setData] = useState<DynamicKeyObject[]>([]);

  useEffect(() => {
    processGetQuery('/blog', { current: 1, size: 3 }).then((res) => {
      setData(res.blogs);
    });
  }, []);

  return (
    <div className="mt-[50px]">
      <p className="text-center">
        <span className="uppercase text-primary text-[45px] font-bold">Blog</span>
      </p>
      <Row gutter={10} className="max-w-[1200px] !mx-auto">
        {data.map((item: DynamicKeyObject) => (
          <Col key={item.id} span={8} className="px-3 min-h-[475px]">
            <div className="h-full border-b-solid border-b-[1px] border-b-[#dddddd] pb-2">
              <div className="w-full h-[250px] bg-image bg-blog1" />
              <p className="uppercase text-[#3d2d22] text-lg mt-5">{item.title}</p>
              <p className="text-xs text-[#adadad]">Tháng Mười Hai 27, 2023</p>
              <p
                className="text-[#777777] text-sm mt-3 line-clamp-4"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
              <p className="text-primary text-xs font-bold mt-5">Xem thêm</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blog;
