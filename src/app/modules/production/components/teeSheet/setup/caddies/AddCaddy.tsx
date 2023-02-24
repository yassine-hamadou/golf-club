
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
// import "./formStyle.css"

const AddCourseSetup = () =>{
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  }

  const handleChange = (event:any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(formData);
    // Use the formData object to submit the data to your server

  }

  const [fileList, setFileList] = useState<UploadFile[]>([

  ]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  // to preview the uploaded file
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div
      className="col-12"
      style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '5px',

        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >



      <Link to="/setup/course-setup">
        <a style={{fontSize:"16px", fontWeight: "500"}} className='btn btn-primary btn-sm mb-7'>
          Back to Caddies List
        </a>
      </Link>
      <form onSubmit={handleSubmit}>
            <div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                  >
                    <UploadOutlined />
                  </Upload>
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Code</label>
                  <input type="number" name="hole" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Date Of Birth</label>
                  <input type="date" name="yard" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">First Name</label>
                  <input type="text" name="par" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Last Name</label>
                  <input type="text" name="handicap" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Email</label>
                  <input type="email" name="handicap" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Phone</label>
                  <input type="tel" name="handicap" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Address</label>
                  <input type="text" name="handicap" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor="exampleFormControlInput1" className="required form-label">Gender</label>
                  <input type="text" name="handicap" onChange={handleChange}  className="form-control form-control-solid" />
                </div>
              </div>
            </div>
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCourseSetup;
