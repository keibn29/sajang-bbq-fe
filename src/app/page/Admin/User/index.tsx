import React, { useRef, useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { DeleteOutlined, EditOutlined, PlusSquareOutlined } from '@ant-design/icons';
import UserModal from './Form';
import PaginationCustom from 'app/components/common/AppPagination';
import { processGetQuery } from 'api';
import { DynamicKeyObject } from 'model';
import { loading, modalForm } from 'utils/app';
import { modalFormConfig } from 'constants/modalForm';
import TableAction from 'app/components/custom/TableAction';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'First name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => <TableAction row={record} />,
  },
];

const User = () => {
  const [data, setData] = useState<DynamicKeyObject>({});

  return (
    <>
      <Button className="mb-5" onClick={() => modalForm.open(modalFormConfig.user)}>
        Thêm mới
      </Button>
      <Table columns={columns} dataSource={data.user} pagination={false} />
      <PaginationCustom onChangeDataTable={setData} apiPath="/user" />
    </>
  );
};

export default User;
