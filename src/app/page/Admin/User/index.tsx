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
    render: (_, record) => (
      <Space size="middle" className="flex gap-1">
        <Button
          type="text"
          className="hover:!bg-[#fff6da]"
          icon={<EditOutlined className="text-warning" />}
          size="middle"
        />
        <Button type="text" danger icon={<DeleteOutlined />} size="middle" />
      </Space>
    ),
  },
];

const User = () => {
  const [data, setData] = useState<DynamicKeyObject>({});

  const queryFn = (params: DynamicKeyObject) => {
    loading.on();
    processGetQuery('/user', params).then((data) => setData(data));
  };

  return (
    <>
      <Button className="mb-5" onClick={() => modalForm.open(modalFormConfig.user)}>
        Thêm mới
      </Button>
      <Table columns={columns} dataSource={data.user} pagination={false} />
      <PaginationCustom total={data.count} queryFn={queryFn} />
    </>
  );
};

export default User;
