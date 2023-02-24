
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./formStyle.css"
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const Add = () =>{
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

  const handleTabChange = (newTab:any) => {
    setActiveTab(newTab);
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


      
      <Link to="/register">
        <a style={{fontSize:"16px", fontWeight: "500"}} className='btn btn-primary btn-sm mb-7'>
          Back to Members
        </a>
      </Link>
      <form onSubmit={handleSubmit}>
        
        <div className="tab-content">
        
          {/* Details */}
          {activeTab === 'tab1' && 
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
              <input type="text" name="code" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className="required form-label">First Name</label>
              <input type="text" name="fname" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>

            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className="required form-label">Last Name</label>
                <input type="text" name="lname" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
              <label htmlFor="exampleFormControlInput1" className="required form-label">Date of Birth</label>
                <input type="date" name="dob" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Gender</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">MALE</option>
                  <option value="2">FEMALE</option>
                 
                </select>
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className=" form-label">Player Type</label>
                  <select className="form-select form-select-solid" aria-label="Select example">
                  <option>select </option>
                  <option value="1">STAFF</option>
                    <option value="2">CARDY</option>
                    <option value="3">PLAYER</option>

                </select>
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className="required form-label">Phone Number</label>
                <input type="number" name="tel" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className="required form-label">Email</label>
                <input type="email" name="email" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>
            <div className='row mb-0'>
              <div className='col-6 mb-7'>
                <label htmlFor="exampleFormControlInput1" className="required form-label">Activation Code</label>
                <input type="number" name="aocode" onChange={handleChange}  className="form-control form-control-solid" />
              </div>
            </div>
          </div>
          }
        </div>
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Add;
