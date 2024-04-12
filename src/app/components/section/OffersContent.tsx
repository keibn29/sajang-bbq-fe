import { Col, Row } from 'antd';
const OffersContent = () => {
  return (
    <Row className="max-w-[1200px] !mx-auto py-[50px]">
      <Col span={24} className="text-center mt-5 px-5">
        <p className="text-primary font-bold text-[45px]">ƯU ĐÃI TRONG TUẦN</p>
        <hr />
        <p className="text-base mt-5  text-center">
          <b>ƯU ĐÃI ĐI 6 TẶNG 1</b>
          <br />
          Áp dụng từ thứ 2 đến thứ 6 (không áp dụng cuối tuần và ngày lễ) <br /> Áp dụng cho nhóm từ 6 khách (áp dụng
          lũy tuyến tối đa 5 suất buffet) <br /> Chỉ áp dụng cho buffet người lớn (cao trên 1m3) <br />
          Không áp dụng đồng thời với các chương trình ưu đãi khác
        </p>
      </Col>
      <Col span={12} className="text-center mt-5 px-5">
        <p className="text-primary font-bold text-[45px]">ƯU ĐÃI ĐOÀN LỚN</p>
        <p className="text-base mt-5  text-justify">
          Thực đơn thượng hạng dành cho nhóm khách VIP. Phù hợp cho những nhóm từ 6 người trở lên với những món ăn
          nguyên liệu đặc sắc như thịt bò Wagyu, Tôm hùm và Cua hoàng đế nướng than củi ăn cùng nấm Đông Cô, Linh Chi,….
        </p>
      </Col>
      <Col span={12} className="text-center mt-5 px-5">
        <p className="text-primary font-bold text-[45px]">ƯU ĐÃI SINH NHẬT</p>
        <p className="text-base mt-5  text-justify">
          Thực đơn thượng hạng dành cho nhóm khách VIP. Phù hợp cho những nhóm từ 6 người trở lên với những món ăn
          nguyên liệu đặc sắc như thịt bò Wagyu, Tôm hùm và Cua hoàng đế nướng than củi ăn cùng nấm Đông Cô, Linh Chi,….
        </p>
      </Col>
    </Row>
  );
};

export default OffersContent;
