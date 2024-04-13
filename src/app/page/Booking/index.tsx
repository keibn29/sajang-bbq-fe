import { Breadcrumb, Button, Col, Input, Row } from 'antd';

const Booking = () => {
  return (
    <div>
      <Row className="max-w-[1200px] !mx-auto py-[50px]" gutter={[12, 12]}>
        <Col span={24}>
          <Breadcrumb
            separator=">"
            items={[
              {
                title: 'Trang chủ',
              },
              {
                title: 'Địa chỉ nhà hàng',
                href: '',
              },
            ]}
          />
        </Col>
        <Col span={8}>
          <Input></Input>
          <div style={{ overflowY: 'scroll', height: '550px' }}>
            <ul>
              <li className="h-[195px]">
                <p>Sajang BBQ Nguyễn Hoàng</p>
                <p>
                  Tầng 1, Tòa nhà Suced số 108 đường Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội <br /> Open - Close:
                  09:00 - 22:00
                </p>
                <Button>02473036986</Button>
                <Button>Đặt bàn</Button>
              </li>
              <hr />
              <li className="h-[195px]">
                <p>Sajang BBQ Trần Thái Tông</p>
                <p>
                  103D5A Trần Thái Tông, Dịch Vọng, Cầu Giấy, Hà Nội <br /> Open - Close: 09:00 - 22:00
                </p>
                <Button>02473007392</Button>
                <Button>Đặt bàn</Button>
              </li>
              <hr />
              <li className="h-[195px]">
                <p>Sajang BBQ BigC</p>
                <p>
                  Tầng 1 Big C, 222 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội <br /> Open - Close: 09:00 - 22:00
                </p>
                <Button>02473007339</Button>
                <Button>Đặt bàn</Button>
              </li>
              <hr />
              <li className="h-[195px]">
                <p>Sajang BBQ Nguyễn Hoàng</p>
                <p>
                  Tầng 1, Tòa nhà Suced số 108 đường Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội <br /> Open - Close:
                  09:00 - 22:00
                </p>
                <Button>02473036986</Button>
                <Button>Đặt bàn</Button>
              </li>
              <hr />
              <li className="h-[195px]">
                <p>Sajang BBQ Trần Thái Tông</p>
                <p>
                  103D5A Trần Thái Tông, Dịch Vọng, Cầu Giấy, Hà Nội <br /> Open - Close: 09:00 - 22:00
                </p>
                <Button>02473007392</Button>
                <Button>Đặt bàn</Button>
              </li>
              <hr />
              <li className="h-[195px]">
                <p>Sajang BBQ BigC</p>
                <p>
                  Tầng 1 Big C, 222 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội <br /> Open - Close: 09:00 - 22:00
                </p>
                <Button>02473007339</Button>
                <Button>Đặt bàn</Button>
              </li>
            </ul>
          </div>
        </Col>
        <Col span={16} className="w-full bg-add1 bg-image" />
      </Row>
    </div>
  );
};

export default Booking;
