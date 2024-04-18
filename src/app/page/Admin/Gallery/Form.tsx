import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Checkbox, Col, Form, Image, Input, Row, Upload, UploadProps } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { processGetQuery } from 'api';
import { IFormProps } from 'model';
import { useEffect, useState } from 'react';
import { getBase64, isValisBeforeUpload } from 'utils/upload';

const GalleryForm = (props: IFormProps) => {
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
        <Form.Item label="Image" name="avatar" getValueFromEvent={(evt) => evt.file.originFileObj}>
          <Upload
            listType="picture-card"
            customRequest={({ file, onSuccess }) => {
              onSuccess && onSuccess('ok');
            }}
            beforeUpload={isValisBeforeUpload}
            onChange={handleChangeAvatar}
            multiple={true}
          >
            {uploadButton}
          </Upload>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default GalleryForm;
