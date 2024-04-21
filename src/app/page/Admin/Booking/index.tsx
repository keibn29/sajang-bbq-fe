import type { TableProps } from 'antd';
import { Table } from 'antd';
import AppPagination from 'app/components/common/AppPagination';
import BookingAction from 'app/components/custom/BookingAction';
import { BOOKING_STATUS } from 'constants/app';
import { DynamicKeyObject } from 'model';
import { useState } from 'react';

const columns: TableProps<any>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (_, record: DynamicKeyObject) => BOOKING_STATUS[record.status],
  },
  {
    title: 'Branch',
    dataIndex: 'branch',
    render: (_, record: DynamicKeyObject) => record?.branch?.name,
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    render: (_, record: DynamicKeyObject) => `${record?.customer?.firstName} ${record?.customer?.lastName}`,
  },
  {
    title: 'Phone number',
    dataIndex: 'phone',
    render: (_, record: DynamicKeyObject) => record?.customer?.phone,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => <BookingAction row={record} apiPath="/booking" />,
  },
];

const BookingMangament = () => {
  const [data, setData] = useState<DynamicKeyObject>({});

  return (
    <>
      <Table columns={columns} dataSource={data.booking} pagination={false} />
      <AppPagination onChangeDataTable={setData} apiPath={'/booking'} />
    </>
  );
};

export default BookingMangament;
