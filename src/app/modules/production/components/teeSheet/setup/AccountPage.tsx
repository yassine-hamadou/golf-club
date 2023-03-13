import {Button, Form, Input} from "antd";
import {KTCard, KTCardBody} from "../../../../../../_metronic/helpers";
import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import {Link} from "react-router-dom";



////////////////////////////////////////////////////
// Upload
////////////////////////////////////////////////////
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};
////////////////////////////////////////////////////
// Upload End
////////////////////////////////////////////////////


export const AccountPage = () => {

    ////////////////////////////////////////////////////
    // Upload
    ////////////////////////////////////////////////////
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as RcFile, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
      <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    ////////////////////////////////////////////////////
    // Upload End
    ////////////////////////////////////////////////////
    return <>
        <KTCard>
            <KTCardBody>
                    <span className="d-flex justify-content-between">
                        <h3>Account</h3>
      <Link to="/home">
<Button type="primary">Back</Button>
      </Link>


                    </span>
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  // onFinish={onFinish}
                >
                    <Form.Item label={'Picture'} >
                        <Upload
                          name="avatar"
                          listType="picture-card"
                          className="avatar-uploader"
                          showUploadList={false}
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          beforeUpload={beforeUpload}
                          onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item name={'membershipID'} label={'Membership ID'}>
                        <Input readOnly placeholder="Membership ID"/>
                    </Form.Item>
                    <Form.Item
                      label="First Name"
                      name="fname"
                    >
                        <Input readOnly
                               placeholder="First Name"
                        />
                    </Form.Item>
                    <Form.Item
                      label="Last Name"
                      name="username"
                    >
                        <Input readOnly
                               placeholder="Last Name"
                        />
                    </Form.Item>
                    <Form.Item
                      label="Phone Number"
                      name="username"
                    >
                        <Input
                               placeholder="Phone Number"
                        />
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      name="username"
                    >
                        <Input
                               placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item name='gender' label='Gender'>
                        <Input readOnly
                               placeholder="Gender"
                        />
                    </Form.Item>
                    <Form.Item name='dateOfBirth' label='Date of Birth'>
                        <Input readOnly placeholder="Date of Birth"
                        />
                    </Form.Item>
                    <Form.Item name='playerHandicap' label='Player Handicap'>
                        <Input readOnly
                               placeholder="Player Handicap"
                        />
                    </Form.Item>
                    <Form.Item name='ggaid' label='GGA ID'>
                        <Input readOnly
                               placeholder="GGA ID"
                        />
                    </Form.Item>
                    <Form.Item name='status' label='Status'>
                        <Input readOnly
                               placeholder="Status"
                        />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form>
            </KTCardBody>
        </KTCard>
    </>
}
