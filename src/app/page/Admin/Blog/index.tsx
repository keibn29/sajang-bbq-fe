import type { TableProps } from 'antd';
import { Button, Table, Image } from 'antd';
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
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Image',
    dataIndex: 'status',
    render: (_, record: DynamicKeyObject) => (
      <Image width={150} height={100} src={`${import.meta.env.VITE_API_ENPOINT}/${record?.avatar}`} />
    ),
  },
  {
    title: 'Title',
    dataIndex: 'branch',
    render: (_, record: DynamicKeyObject) => record?.branch?.name,
  },
  {
    title: 'Content',
    dataIndex: 'customer',
    render: (_, record: DynamicKeyObject) => `${record?.customer?.firstName} ${record?.customer?.lastName}`,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => <TableAction row={record} apiPath={modalFormConfig.branch.apiPath} />,
  },
];

const BlogMangament = () => {
  const [data, setData] = useState<DynamicKeyObject>({});

  return (
    <>
      <Button className="mb-5" onClick={() => modalForm.open(modalFormConfig.blog)}>
        Thêm mới
      </Button>
      <Table columns={columns} dataSource={data.blog} pagination={false} />
      <AppPagination onChangeDataTable={setData} apiPath={'/branch'} />
    </>
  );
};

export default BlogMangament;
