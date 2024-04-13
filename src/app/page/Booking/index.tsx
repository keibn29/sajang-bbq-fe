import { InfoCircleFilled } from '@ant-design/icons';
import { Button, Col, Row, Tooltip } from 'antd';
import { modalFormConfig } from 'constants/modalForm';
import { modalForm } from 'utils/app';

const Booking = () => {
  return (
    <div>
      <Row className="max-w-[1250px] !mx-auto py-[50px]" gutter={[12, 12]}>
        <Col span={10}>
          <div style={{ overflowY: 'scroll', height: '550px' }}>
            <ul>
              <li className="h-[195px]">
                <Row className="mb-3">
                  <p className="font-bold text-xl mr-2">Sajang BBQ Nguyễn Hoàng</p>
                  <Tooltip
                    color="white"
                    overlayClassName="custom-tooltip"
                    title={
                      <div className="w-full flex justify-center items-center text-black">
                        <div className="">
                          <p className="text-center text-[40px] font-bold my-[15px]">Tiện ích</p>
                          <ul>
                            <li>
                              <p>Có chỗ để xe ô tô</p>
                            </li>
                            <li>
                              <p>Có phòng hút thuốc</p>
                            </li>
                            <li>
                              <p>Có phòng vui chơi cho trẻ em(trông trẻ)</p>
                            </li>
                            <li>
                              <p>Có khu ngoài trời</p>
                            </li>
                            <li>
                              <p>Có phòng riêng</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    }
                    placement="right"
                    trigger={['hover']}
                    overlayStyle={{
                      maxWidth: 'none',
                    }}
                  >
                    <InfoCircleFilled style={{ color: '#a31d24', fontSize: '20px' }} />
                  </Tooltip>
                </Row>
                <p className="text-base mb-2">
                  Tầng 1, Tòa nhà Suced số 108 đường Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội <br /> Open - Close:
                  09:00 - 22:00
                </p>
                <Row className="space-x-5">
                  <Button className="h-12 w-[45%]">02473036986</Button>
                  <Button
                    className="h-12 w-[45%]"
                    type="primary"
                    onClick={() => modalForm.open(modalFormConfig.booking)}
                  >
                    Đặt bàn
                  </Button>
                </Row>
              </li>
              <hr />
              <li className="h-[195px]">
                <Row className="mb-3">
                  <p className="font-bold text-xl mr-2">Sajang BBQ Trần Thái Tông</p>
                  <Tooltip
                    overlayClassName="custom-tooltip"
                    title={
                      <div className="w-full flex justify-center items-center">
                        <div className="">
                          <p className="text-center text-[40px] font-bold my-[15px]">Tiện ích</p>
                          <ul>
                            <li>
                              <p>Có chỗ để xe ô tô</p>
                            </li>
                            <li>
                              <p>Có phòng hút thuốc</p>
                            </li>
                            <li>
                              <p>Có phòng vui chơi cho trẻ em(trông trẻ)</p>
                            </li>
                            <li>
                              <p>Có khu ngoài trời</p>
                            </li>
                            <li>
                              <p>Có phòng riêng</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    }
                    placement="right"
                    trigger={['hover']}
                    overlayStyle={{
                      maxWidth: 'none',
                    }}
                  >
                    <InfoCircleFilled style={{ color: '#a31d24', fontSize: '20px' }} />
                  </Tooltip>
                </Row>
                <p className="text-base mb-2">
                  103D5A Trần Thái Tông, Dịch Vọng, Cầu Giấy, Hà Nội <br /> Open - Close: 09:00 - 22:00
                </p>
                <Row className="space-x-5">
                  <Button className="h-12 w-[45%]">02473007392</Button>
                  <Button className="h-12 w-[45%]" type="primary">
                    Đặt bàn
                  </Button>
                </Row>
              </li>
              <hr />
              <li className="h-[195px]">
                <Row className="mb-3">
                  <p className="font-bold text-xl mr-2">Sajang BBQ Nguyễn Hoàng</p>
                  <Tooltip
                    overlayClassName="custom-tooltip"
                    title={
                      <div className="w-full flex justify-center items-center">
                        <div className="">
                          <p className="text-center text-[40px] font-bold my-[15px]">Tiện ích</p>
                          <ul>
                            <li>
                              <p>Có chỗ để xe ô tô</p>
                            </li>
                            <li>
                              <p>Có phòng hút thuốc</p>
                            </li>
                            <li>
                              <p>Có phòng vui chơi cho trẻ em(trông trẻ)</p>
                            </li>
                            <li>
                              <p>Có khu ngoài trời</p>
                            </li>
                            <li>
                              <p>Có phòng riêng</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    }
                    placement="right"
                    trigger={['hover']}
                    overlayStyle={{
                      maxWidth: 'none',
                    }}
                  >
                    <InfoCircleFilled style={{ color: '#a31d24', fontSize: '20px' }} />
                  </Tooltip>
                </Row>
                <p className="text-base mb-2">
                  Tầng 1, Tòa nhà Suced số 108 đường Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội <br /> Open - Close:
                  09:00 - 22:00
                </p>
                <Row className="space-x-5">
                  <Button className="h-12 w-[45%]">02473036986</Button>
                  <Button
                    className="h-12 w-[45%]"
                    type="primary"
                    onClick={() => modalForm.open(modalFormConfig.booking)}
                  >
                    Đặt bàn
                  </Button>
                </Row>
              </li>
              <hr />
              <li className="h-[195px]">
                <Row className="mb-3">
                  <p className="font-bold text-xl mr-2">Sajang BBQ Trần Thái Tông</p>
                  <Tooltip
                    overlayClassName="custom-tooltip"
                    title={
                      <div className="w-full flex justify-center items-center">
                        <div className="">
                          <p className="text-center text-[40px] font-bold my-[15px]">Tiện ích</p>
                          <ul>
                            <li>
                              <p>Có chỗ để xe ô tô</p>
                            </li>
                            <li>
                              <p>Có phòng hút thuốc</p>
                            </li>
                            <li>
                              <p>Có phòng vui chơi cho trẻ em(trông trẻ)</p>
                            </li>
                            <li>
                              <p>Có khu ngoài trời</p>
                            </li>
                            <li>
                              <p>Có phòng riêng</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    }
                    placement="right"
                    trigger={['hover']}
                    overlayStyle={{
                      maxWidth: 'none',
                    }}
                  >
                    <InfoCircleFilled style={{ color: '#a31d24', fontSize: '20px' }} />
                  </Tooltip>
                </Row>
                <p className="text-base mb-2">
                  103D5A Trần Thái Tông, Dịch Vọng, Cầu Giấy, Hà Nội <br /> Open - Close: 09:00 - 22:00
                </p>
                <Row className="space-x-5">
                  <Button className="h-12 w-[45%]">02473007392</Button>
                  <Button className="h-12 w-[45%]" type="primary">
                    Đặt bàn
                  </Button>
                </Row>
              </li>
              <hr />
              <li className="h-[195px]">
                <Row className="mb-3">
                  <p className="font-bold text-xl mr-2">Sajang BBQ BigC</p>
                  <Tooltip
                    overlayClassName="custom-tooltip"
                    title={
                      <div className="w-full flex justify-center items-center">
                        <div className="">
                          <p className="text-center text-[40px] font-bold my-[15px]">Tiện ích</p>
                          <ul>
                            <li>
                              <p>Có chỗ để xe ô tô</p>
                            </li>
                            <li>
                              <p>Có phòng hút thuốc</p>
                            </li>
                            <li>
                              <p>Có phòng vui chơi cho trẻ em(trông trẻ)</p>
                            </li>
                            <li>
                              <p>Có khu ngoài trời</p>
                            </li>
                            <li>
                              <p>Có phòng riêng</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    }
                    placement="right"
                    trigger={['hover']}
                    overlayStyle={{
                      maxWidth: 'none',
                    }}
                  >
                    <InfoCircleFilled style={{ color: '#a31d24', fontSize: '20px' }} />
                  </Tooltip>
                </Row>
                <p className="text-base mb-2">
                  Tầng 1 Big C, 222 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội <br /> Open - Close: 09:00 - 22:00
                </p>
                <Row className="space-x-5">
                  <Button className="h-12 w-[45%]">02473007339</Button>
                  <Button className="h-12 w-[45%]" type="primary">
                    Đặt bàn
                  </Button>
                </Row>
              </li>
              <hr />
            </ul>
          </div>
        </Col>
        <Col span={14} className="w-full bg-add1 bg-image" />
      </Row>
    </div>
  );
};

export default Booking;
