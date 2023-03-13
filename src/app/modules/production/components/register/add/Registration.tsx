import {useState} from 'react'
import {Link} from 'react-router-dom'
import './formStyle.css'
import type {RcFile, UploadFile, UploadProps} from 'antd/es/upload/interface'
import {UploadOutlined} from '@ant-design/icons'
import {Button, Form, Input, message, Select, Upload} from 'antd'
import {useMutation, useQueryClient} from "react-query";
import {postMember} from "../../Requests";
import {useForm} from "antd/es/form/Form";

const Add = () => {
  // const [formData, setFormData] = useState({})
  const [submitLoading, setSubmitLoading] = useState(false)
  // const handleChange = (event: any) => {
  //   setFormData({...formData, [event.target.name]: event.target.value})
  // }

  const {mutate: addMember} = useMutation(postMember, {
    onSuccess: () => {
      queryClient.invalidateQueries('membersQuery').then(r => console.log("r", r))
      message.success('Member added successfully')
      form.resetFields()
        setSubmitLoading(false)
    },
    onError: (error: any) => {
      message.error(error.message).then(r => console.log("r", r) )
        setSubmitLoading(false)
    }
  })
  const queryClient = useQueryClient()
  const handleSubmit = (values: any) => {
    setSubmitLoading(true)
    const data = {
        ...values,
    }
    // event.preventDefault()
    console.log("formData", data)
    // @ts-ignore
    addMember(data)
  }


  const [fileList, setFileList] = useState<UploadFile[]>([])

  const onChange: UploadProps['onChange'] = ({fileList: newFileList}) => {
    setFileList(newFileList)
  }

  // to preview the uploaded file
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj as RcFile)
        reader.onload = () => resolve(reader.result as string)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }
  const [form] = useForm ()
  const Option = Select.Option
  return (
    <div
      className='col-12'
      style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '5px',
        boxShadow: '2px 2px 15px rgba(0,0,0,0.08)',
      }}
    >
      <Link to='/register'>
        <a style={{fontSize: '16px', fontWeight: '500'}} className='btn btn-primary btn-sm mb-7'>
          Back to Members
        </a>
      </Link>
      <Form
        onFinish={handleSubmit}
        form={form}
        name='control-hooks'
        title={'Add Member'}
      >
        <div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <Upload
                    listType='picture-card'
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
                  <label htmlFor='exampleFormControlInput1' className='required form-label'>
                    Membership ID
                  </label>
                  <Form.Item
                    name='membershipId'
                  >
                  <Input
                    type='text'
                    required={true}
                    className='form-control form-control-solid'
                  />
                  </Form.Item>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor='exampleFormControlInput1' className='required form-label'>
                    First Name
                  </label>
                  <Form.Item name='fname'>
                    <Input
                    type='text'
                    required={true}
                    className='form-control form-control-solid'
                  />
                  </Form.Item>

                </div>
              </div>

              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor='exampleFormControlInput1' className='required form-label'>
                    Last Name
                  </label>
                  <Form.Item
                    name='lname'
                  >
                    <Input
                    type='text'
                    required={true}
                    className='form-control form-control-solid'
                  /></Form.Item>

                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor='exampleFormControlInput1' className='required form-label'>
                    Date of Birth
                  </label>
                  <Form.Item
                    name='dateOfBirth'
                  ><Input
                    type='date'
                    required={true}
                    className='form-control form-control-solid'
                  /></Form.Item>

                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor='exampleFormControlInput1' className='form-label'>
                    Gender
                  </label>
                  <Form.Item
                    name='gender'
                  >
                    <Select className={'form-select form-select-solid'}>
                      <Option value='male'>MALE</Option>
                      <Option value='female'>FEMALE</Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor='exampleFormControlInput1' className='required form-label'>
                    Phone Number
                  </label>
                  <Form.Item
                    name='phone'
                  ><Input
                    type='number'
                    required={true}
                    className='form-control form-control-solid'
                  /></Form.Item>

                </div>
              </div>
              <div className='row mb-0'>
                <div className='col-6 mb-7'>
                  <label htmlFor='exampleFormControlInput1' className='required form-label'>
                    Email
                  </label>
                  <Form.Item
                    name='email'
                  ><Input
                    type='email'
                    required={true}
                    className='form-control form-control-solid'
                  /></Form.Item>

                </div>
                <div className='col-6 mb-7'>
                  <label htmlFor='exampleFormControlInput1' className='required form-label'>
                    Player Handicap
                  </label>
                  <Form.Item
                    name='playerHandicap'
                  >
                    <Input
                    type='text'
                    required={true}
                    className='form-control form-control-solid'
                  />
                  </Form.Item>

                </div>
              </div>

              <div className='row mb-0'>
                <div className='row mb-0'>
                  <div className='col-6 mb-7'>
                    <label htmlFor='exampleFormControlInput1' className='required form-label'>
                      GGA ID#
                    </label>
                    <Form.Item
                      name='ggaid'
                    ><Input
                      type='text'
                      required={true}
                      className='form-control form-control-solid'
                    /></Form.Item>

                  </div>
                </div>
              </div>
            </div>
        <Button type='primary' key='submit' htmlType='submit' loading={submitLoading} onClick={() => {
          form.submit()
        }
        }>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Add
