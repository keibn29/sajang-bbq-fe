import { Pagination, PaginationProps } from 'antd';
import { DynamicKeyObject } from 'model';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { actionUpdateAppPagination, selectAppPagination } from 'store/appSlice';

interface IProps extends PaginationProps {
  queryFn: (params: DynamicKeyObject) => void;
}

function AppPagination(props: Readonly<IProps>) {
  const { queryFn, ...nest } = props;
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectAppPagination);

  const handleChangePage = (current: number, size: number) => {
    dispatch(actionUpdateAppPagination({ current, size }));
  };

  useEffect(() => {
    queryFn(page);
  }, [page]);

  return <Pagination current={page.current} pageSize={page.size} onChange={handleChangePage} {...nest} />;
}

export default AppPagination;
