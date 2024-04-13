import type { TableProps } from 'antd';
import { Avatar, Button, Image, Table } from 'antd';
import AppPagination from 'app/components/common/AppPagination';
import TableAction from 'app/components/custom/TableAction';
import { modalFormConfig } from 'constants/modalForm';
import { DynamicKeyObject } from 'model';
import { useState } from 'react';
import { modalForm } from 'utils/app';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Image',
    key: 'image',
    render: (_, record: DynamicKeyObject) => (
      <Image width={150} height={100} src={`${import.meta.env.VITE_API_ENPOINT}/${record?.avatar}`} />
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Table',
    dataIndex: 'table',
    key: 'table',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Phone number',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record: DynamicKeyObject) => (
      <TableAction row={{ ...record, utils: record.utils.map((util: DynamicKeyObject) => util.UtilityId) }} />
    ),
  },
];

const Branch = () => {
  const [data, setData] = useState<DynamicKeyObject>({});

  return (
    <>
      <Button className="mb-5" onClick={() => modalForm.open(modalFormConfig.branch)}>
        Thêm mới
      </Button>
      <Table columns={columns} dataSource={data.branch} pagination={false} />
      <AppPagination onChangeDataTable={setData} apiPath={modalFormConfig.branch.apiPath} />
    </>
  );
};

export default Branch;
