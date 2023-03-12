import {Button, Input, Space, Table} from 'antd'
import {useState} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {KTCard, KTCardBody, KTSVG} from '../../../../../_metronic/helpers'
import Add from './add/Registration'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'

const Register = () => {
  // const [gridData, setGridData] = useState([])
  const [loading, setLoading] = useState(false)
  // const [searchText, setSearchText] = useState('')
  // let [filteredData] = useState([])

  const columns: any = [
    {
      title: 'Picture',
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
    },
    {
      title: 'Last Name',
      sorter: (a: any, b: any) => a.downTime - b.downTime,
    },
    {
      title: 'Phone Number',
    },
    {
      title: 'Email',
    },
    {
      title: 'Gender',
    },
    {
      title: 'DOB',
    },
    {
      title: 'Player Handicap',
    },
    {
      title: 'GGA ID#',
    },
    {
      title: 'Status',
    },
    {
      title: 'Action',
      render: () => (
        <>
          <button type='button' className='btn btn-primary me-3'>
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
            Deactivate
          </button>
          <button type='button' className='btn btn-primary me-3'>
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
            Suspend
          </button>
        </>
      ),
    },
  ]

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
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr075.svg'
                          className='svg-icon-2'
                        />
                        Add
                      </button>
                    </Link>
                  </Space>
                </div>
                <Table columns={columns} bordered loading={loading} />
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
