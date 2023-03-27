import {Link, Route, Routes, useParams} from 'react-router-dom'
import {PageTitle} from '../../../../../../_metronic/layout/core'
import {KTCard, KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import {Button, Form, Input, message, Modal, Popconfirm, Space, Table} from 'antd'
import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";
import {API_URL} from "../../../../../urls";
import { useState } from 'react';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


export const CourseList = () => {
    //get id from url params
  const {id} = useParams()
const {data: holes, isLoading} = useQuery('holes', () => axios.get(`${API_URL}/holes`))
  const columns: any = [
    {
      title: 'Hole',
      dataIndex: 'holeNumber',
    },
    {
      title: 'Yard',
      dataIndex: 'yardage',
      sorter: (a: any, b: any) => {
        if (a.txmanf > b.txmanf) {
          return 1
        }
        if (b.txmanf > a.txmanf) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Par',
      dataIndex: 'par',
      sorter: (a: any, b: any) => {
        if (a.txmodel > b.txmodel) {
          return 1
        }
        if (a.txmodel < b.txmodel) {
          return -1
        }
        return 0
      },
    },
    {
      title: 'Handicap',
      dataIndex: 'handicap',
      sorter: (a: any, b: any) => a.downTime - b.downTime,
    },
    {
        title: 'Action',
        key: 'action',
        render: (text: any, record: any) => (
            <Space size='small'>
              <Button type='primary' ghost={true} onClick={() => setIsModalOpen(true)}>Edit</Button>
              <Popconfirm
                placement="topRight"
                title={'Are you sure you want to delete this hole?'}
                description={'Delete the hole'}
                onConfirm={() => {deleteHole(record.id)}}
                okText="Yes"
                cancelText="No"
              >
                <Button type='primary' danger={true}>Delete</Button>
              </Popconfirm>
            </Space>
        ),
    }
  ]

  const queryClient: any = useQueryClient();
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [submitLoading, setSubmitLoading] = useState(false);
  let [form] = Form.useForm();

  function handleCancel() {
    setSubmitLoading(false);
    setIsModalOpen(false);
  }


  const {mutate: addHole} = useMutation('addHole', (data) => axios.post(`${API_URL}/holes`, data), {
    onSuccess: () => {
      queryClient.invalidateQueries('holes');
      setSubmitLoading(false);
      setIsModalOpen(false);
      message.success('Hole added successfully');
    },
    onError: (error: any) => {
      setSubmitLoading(false);
      setIsModalOpen(false);
      message.error(error.message).then((r) => r)
    }
  })

  const {mutate: deleteHole} = useMutation('deleteHole', (id: any) => axios.delete(`${API_URL}/holes/${id}`), {
      onSuccess: () => {
        queryClient.invalidateQueries('holes');
        message.success('Hole deleted successfully');
      },
      onError: (error: any) => {
        message.error(error.message).then((r) => r)
      }
    }
  )
  function onFinish(values: any) {
    console.log('form submitted', values);
    setSubmitLoading(true);
    const data = {
        ...values,
        courseId: id
    }
    addHole(data);
  }

  return (
    <>
      {/*Display course name as page title*/}
      <PageTitle>{queryClient.getQueryData('courses')?.data?.find((course: any) => course.id == id).name}</PageTitle>
      <KTCard>
        <KTCardBody>
          <div className='d-flex justify-content-between'>
            <Space style={{marginBottom: 16}}>
              <Input
                placeholder='Enter Search Text'
                // onChange={handleInputChange}
                type='text'
                allowClear
                // value={searchText}
              />
              <Button type='primary'>Search</Button>
            </Space>
            <Space style={{marginBottom: 16}}>
                <button type='button' className='btn btn-primary me-3' onClick={() => setIsModalOpen(true)}>
                  <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                  Add
                </button>
            </Space>
          </div>
          <Table
            columns={columns}
            bordered
            dataSource={holes?.data?.filter((hole: any) => hole.courseId == id)}
            loading={isLoading}
          />
        </KTCardBody>
      </KTCard>
      <Modal
        title='Add Hole'
        open={isModalOpen}
        onCancel={handleCancel}
        closable={true}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key='submit'
            type='primary'
            htmlType='submit'
            loading={submitLoading}
            onClick={() => {
              form.submit()
            }}
          >
            Submit
          </Button>,
        ]}
      >
        <Form
          form={form}
          name='control-hooks'
          labelCol={{span: 8}}
          wrapperCol={{span: 14}}
          title='Add a Hole'
          onFinish={onFinish}
        >
          <Form.Item name='HoleNumber' label='Hole Number' rules={[
            {required: true},
            // ({getFieldValue}) => ({
            //     validator(rule, value) {
            //         if (!value || holes?.data?.filter((hole: any) => hole.courseId == id).find((hole: any) => hole.holeNumber == value) == undefined) {
            //             return Promise.resolve();
            //         }
            //         return Promise.reject('Hole number already exists');
            //     }
            // })
            ]}>
            <Input
                placeholder='Enter Hole Number'
                type='number'
            />
          </Form.Item>
            <Form.Item name='Yardage' label='Yardage' rules={[{required: true}]}>
                <Input
                    placeholder='Enter Yardage'
                    type='number'
                />
            </Form.Item>
            <Form.Item name='Par' label='Par' rules={[{required: true}]}>
                <Input
                    placeholder='Enter Par'
                    type='number'
                />
            </Form.Item>
            <Form.Item name='Handicap' label='Handicap' rules={[{required: true}]}>
                <Input
                    placeholder='Enter Handicap'
                    type='number'
                />
            </Form.Item>
        </Form>
      </Modal>
    </>
  )
}


export const Course: any = () => {
  const columns: any = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Number of Holes',
        dataIndex: 'numberOfHoles',
        key: 'holes',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size='small'>
            <Link to={`view/${record.id}`}>
              <Button type='primary'>View</Button>
            </Link>
            <Link to={`edit/${record.id}`}>
                <Button type='primary' ghost={true}>Edit</Button>
            </Link>
            <Link to='delete'>
                <Button type='primary' danger={true}>Delete</Button>
            </Link>
        </Space>
        ),
    },
  ]

  function getCourseList() {
    return axios.get(`${API_URL}/courses`);
  }

  const {data: courses, isLoading} = useQuery('courses', () => getCourseList())
  return (
    <>
        <PageTitle>Courses</PageTitle>
        <KTCard>
            <KTCardBody>
                <div className='d-flex justify-content-between'>
                <Space style={{marginBottom: 16}}>
                  <Input
                    placeholder='Enter Search Text'
                    // onChange={handleInputChange}
                    type='text'
                    allowClear
                    // value={searchText}
                  />
                  <Button type='primary'>Search</Button>
                </Space>
                <Space style={{marginBottom: 16}}>
                  <Link to='add'>
                    <button type='button' className='btn btn-primary me-3'>
                      <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                      Add
                    </button>
                  </Link>
                </Space>
              </div>
                <Table columns={columns} bordered loading={isLoading} dataSource={courses?.data} />
            </KTCardBody>
        </KTCard>
    </>
  )
}


