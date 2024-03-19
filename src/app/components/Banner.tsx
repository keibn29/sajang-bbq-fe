import { Button, Flex } from 'antd';
import { getPageName } from 'utils/app';

const Banner = () => {
  const pageName = getPageName();

  return (
    <Flex className={`bg-banner-${pageName} bg-center bg-cover h-[850px] uppercase`} align="flex-end">
      <div className="max-w-[1425px] mx-auto mb-[200px]">
        <p className="text-white font-bold text-[65px] bg-[#00000036] px-[20px] w-fit rounded-xl">
          Buffet trưa xèo xèo thịt nướng
        </p>
        <Button className="mt-[10px] uppercase bg-dark-red text-white w-[190px] h-[60px] text-[22px] font-bold hover:bg-dark-red-hover hover:!text-white">
          Đặt bàn
        </Button>
      </div>
    </Flex>
  );
};

export default Banner;
