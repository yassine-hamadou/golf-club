import {Button, Dropdown, Input, MenuProps, Space, Table} from 'antd'
import {useState} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {KTCard, KTCardBody, KTSVG} from '../../../../../_metronic/helpers'
import Add from './add/Registration'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {Query, QueryClient, useQuery, useQueryClient} from 'react-query'
import {getMembers} from '../Requests'
import {id} from "date-fns/locale";

const Register = () => {
  // const [gridData, setGridData] = useState([])

  const {data: members, isLoading} = useQuery('membersQuery', () => getMembers())
  // const [searchText, setSearchText] = useState('')
  // let [filteredData] = useState([])
  console.log('Members', members)
  const onMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e)
  }

  const items = [
    {
      key: '1',
      label: 'Activate',
    },
    {
      key: '2',
      label: 'Deactivate',
    },
    {
      key: '3',
      label: 'Suspend',
    },
    {
        key: '4',
        label: 'Edit',
    }
  ]
  const columns: any = [
    {
        title: 'Entry ID',
        dataIndex: 'id',
        //sort default order of data by dataindex id in ascending order
        sorter: (a: any, b: any) => a.id - b.id,
        defaultSortOrder: 'descend',
    },
    {
      title: 'Picture',
      dataIndex: 'picture',
      //sort default order of data by dataindex id
        sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: 'Membership ID',
      sorter: (a: any, b: any) => {
        if (a.txmanf > b.txmanf) {
          return 1
        }
        if (b.txmanf > a.txmanf) {
          return -1
        }
        return 0
      },
      dataIndex: 'code',
    },
    {
      title: 'First Name',
      sorter: (a: any, b: any) => {
        if (a.txmodel > b.txmodel) {
          return 1
        }
        if (a.txmodel < b.txmodel) {
          return -1
        }
        return 0
      },
      dataIndex: 'fname',
    },
    {
      title: 'Last Name',
      sorter: (a: any, b: any) => a.downTime - b.downTime,
      dataIndex: 'lname',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'DOB',
      dataIndex: 'dateOfBirth',
    },
    {
      title: 'Player Handicap',
      dataIndex: 'playerHandicap',
    },
    {
      title: 'GGA ID#',
      dataIndex: 'ggaid',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      render: () => (
        <>
          {/*reset button style*/}
          <Dropdown.Button menu={{items, onClick: onMenuClick}}>Actions</Dropdown.Button>
          {/*<Button className='bg-success me-3'>*/}
          {/*  Activate*/}
          {/*  </Button>*/}
          {/*<Button className='bg-primary me-3'>*/}
          {/*  Suspend*/}
          {/*</Button>*/}
          {/*<Button className='bg-danger me-3'>*/}
          {/*  Deactivate*/}
          {/*</Button>*/}
        </>
      ),
    },
  ]

  const queryClient = useQueryClient()
    const globalSearch = (value: any) => {
    const query = queryClient.getQueryData<Query<any>>('membersQuery')
      //@ts-ignore
      if (query?.data) {
        //@ts-ignore
        const filteredData = query?.data.filter((item: any) => {
          return item.fname.toLowerCase().includes(value.toLowerCase())
        })
        console.log('filteredData', filteredData)
        queryClient.setQueryData('membersQuery', {data: filteredData})
      }
    }
    const handleInputChange = (e: any) => {
      globalSearch(e.target.value)
      if (e.target.value === '') {
        queryClient.invalidateQueries('membersQuery')
      }
    }

  return (
    <Routes>
      {/*index*/}
      <Route
        path='/'
        element={
          <>
            <PageTitle>Members</PageTitle>
            <KTCard>
              <KTCardBody>
                <div className='d-flex justify-content-between'>
                  <Space style={{marginBottom: 16}}>
                    <Input
                      placeholder='Enter Search Text'
                      onChange={handleInputChange}
                      type='text'
                      allowClear
                    />
                    <Button type='primary'>Search</Button>
                  </Space>
                  <Space style={{marginBottom: 16}}>
                    <Link to='add'>
                      <button type='button' className='btn btn-primary me-3'>
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr075.svg'
                          className='svg-icon-2'
                        />
                        Add
                      </button>
                    </Link>
                  </Space>
                </div>
                <Table rowKey={"id"} columns={columns} bordered loading={isLoading} dataSource={members?.data}/>
              </KTCardBody>
            </KTCard>
          </>
        }
      />
      {/*add*/}
      <Route
        path='add'
        element={
          <>
            <PageTitle>Add new member</PageTitle>
            <Add />
          </>
        }
      />
    </Routes>
  )
}

export {Register}
