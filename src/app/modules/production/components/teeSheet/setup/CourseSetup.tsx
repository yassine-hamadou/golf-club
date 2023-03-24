import {Link, Route, Routes} from 'react-router-dom'
import {PageTitle} from '../../../../../../_metronic/layout/core'
import {KTCard, KTCardBody, KTSVG} from '../../../../../../_metronic/helpers'
import {Button, Input, Space, Table} from 'antd'
import {useQuery} from "react-query";
import axios from "axios";
import {API_URL} from "../../../../../urls";


const CourseList = () => {
  const columns: any = [
    {
      title: 'Holes',
    },
    {
      title: 'Yard',
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
    {},
    {
      title: 'Handicap',
      sorter: (a: any, b: any) => a.downTime - b.downTime,
    },
  ]
  return (
    <>
      <PageTitle>Course Setup</PageTitle>
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
          <Table columns={columns} bordered />
        </KTCardBody>
      </KTCard>
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
