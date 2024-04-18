import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Checkbox, Col, Form, Image, Input, Row, Upload, UploadProps } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { processGetQuery } from 'api';
import { IFormProps } from 'model';
import { useEffect, useState } from 'react';
import { getBase64, isValisBeforeUpload } from 'utils/upload';

const BlogForm = (props: IFormProps) => {
  const { form, imageUrl, onChangeImageUrl } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [utils, setUtils] = useState<any[]>([]);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Image</div>
    </button>
  );

  const handleChangeAvatar: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setIsLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setIsLoading(false);
        onChangeImageUrl(url);
      });
    }
  };

  useEffect(() => {
    processGetQuery('/utility').then((data) => {
      setUtils(data.utils);
    });
  }, []);

  return (
    <Form form={form} initialValues={{ remember: true }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
      <Row gutter={[10, 0]}>
        <Col span={24}>
          <Form.Item label="Title" name="title" rules={[{ required: true, message: `Please input blog title!` }]}>
            <Input size="large" placeholder={`Input blog title`} allowClear />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Content" name="content" rules={[{ required: true, message: `Please input blog content!` }]}>
            <TextArea autoSize={{ minRows: 4, maxRows: 4 }} placeholder={`Input blog content`} />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item label="Image" name="avatar" getValueFromEvent={(evt) => evt.file.originFileObj}>
            <Upload
              listType="picture-card"
              showUploadList={false}
              customRequest={({ file, onSuccess }) => {
                onSuccess && onSuccess('ok');
              }}
              beforeUpload={isValisBeforeUpload}
              onChange={handleChangeAvatar}
            >
              {uploadButton}
            </Upload>
          </Form.Item>
        </Col>
        {imageUrl && (
          <Col span={9} className="mt-3">
            <Image src={imageUrl} height={150} width={250} />
          </Col>
        )}
      </Row>
    </Form>
  );
};

export default BlogForm;
