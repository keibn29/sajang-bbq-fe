import type { TableProps } from 'antd';
import { Table } from 'antd';
import AppPagination from 'app/components/common/AppPagination';
import BookingAction from 'app/components/custom/BookingAction';
import { BOOKING_STATUS } from 'constants/app';
import { DynamicKeyObject } from 'model';
import { useState } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Branch',
    dataIndex: 'branch',
    render: (_, record: DynamicKeyObject) => record?.branch?.name,
  },
  {
    title: 'Table',
    dataIndex: 'phone',
    render: (_, record: DynamicKeyObject) => record?.customer?.phone,
  },
  {
    title: 'Date',
    dataIndex: 'phone',
    render: (_, record: DynamicKeyObject) => record?.customer?.phone,
  },
  {
    title: 'Time',
    dataIndex: 'phone',
    render: (_, record: DynamicKeyObject) => record?.customer?.phone,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (_, record: DynamicKeyObject) => BOOKING_STATUS[record.status],
  },
];

const BookingHistory = () => {
  const [data, setData] = useState<DynamicKeyObject>({});

  return (
    <>
      <Table columns={columns} dataSource={data.booking} pagination={false} />
      <AppPagination onChangeDataTable={setData} apiPath={'/booking'} />
    </>
  );
};

export default BookingHistory;
