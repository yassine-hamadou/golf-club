import {Button, Input, Space, Table} from 'antd'
import {useState} from 'react'
import {Link, Route, Routes} from 'react-router-dom';
import {KTCard, KTCardBody, KTSVG} from '../../../../../_metronic/helpers';
import Add from './add/Registration';
import {PageLink, PageTitle} from "../../../../../_metronic/layout/core";

// breadcrum
const accountBreadCrumbs: Array<PageLink> = [
    {
        title: 'Register',
        path: 'register',
        isSeparator: false,
        isActive: false,
    }
]

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
            title: 'Code',
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

        },
        {
            title: 'Last Name',
            sorter: (a: any, b: any) => a.downTime - b.downTime,
        },
        {
            title: 'Player type',
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
            title: 'Activation Code',
        },
    ]

    return (
      <Routes>
          {/*index*/}
          <Route
            path='/'
            element={
                <>
                    <PageTitle breadcrumbs={accountBreadCrumbs}>Members</PageTitle>
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
                                    <Button type='primary'>
                                        Search
                                    </Button>
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
                            <Table
                              columns={columns}
                              bordered
                              loading={loading}
                            />
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
                    <PageTitle breadcrumbs={
                        [
                            ...accountBreadCrumbs,
                            {
                                title: 'Add',
                                path: '/register/add',
                                isSeparator: false,
                                isActive: true,
                            }
                        ]
                    }>Add new member</PageTitle>
                    <Add />
                </>
            }
          />
      </Routes>
    )
}

export {Register}
