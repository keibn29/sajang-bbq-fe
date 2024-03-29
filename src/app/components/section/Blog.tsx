import { Col, Row } from 'antd';

const Blog = () => {
  return (
    <div className="mt-[50px]">
      <p className="text-center">
        <span className="uppercase text-primary text-[45px] font-bold">Blog</span>
      </p>
      <Row gutter={10} className="max-w-[1200px] !mx-auto">
        {[0, 1, 2].map((item) => (
          <Col key={item} span={8} className="px-3 min-h-[475px]">
            <div className="h-full border-b-solid border-b-[1px] border-b-[#dddddd] pb-2">
              <div className="w-full h-[250px] bg-image bg-blog1" />
              <p className="uppercase text-[#3d2d22] text-lg mt-5">
                FESTIVAL FREEFLOW - REFILL ĐỒ UỐNG KHÔNG GIỚI HẠN CHỈ TỪ 89K
              </p>
              <p className="text-xs text-[#adadad]">Tháng Mười Hai 27, 2023</p>
              <p className="text-[#777777] text-sm mt-3 line-clamp-4">
                Mùa lễ hội năm nay, Sajang mang đến một không khí đặc biệt vô cùng dành cho thực khách, nổi bật với
                nhiều món ngon độc đáo trong menu mới và chương trình FREEFLOW chưa từng có tại nhà hàng.
              </p>
              <p className="text-primary text-xs font-bold mt-5">Xem thêm</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blog;
