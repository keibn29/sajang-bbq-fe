import { Pagination, PaginationProps } from 'antd';
import { useState } from 'react';

interface IProps extends PaginationProps {}

const PaginationCustom = (props: IProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center w-full mt-[100px]">
      <Pagination current={currentPage} onChange={handleChangePage} total={50} {...props} />
    </div>
  );
};

export default PaginationCustom;
