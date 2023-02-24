import { Button, Input, Space, Table } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { KTCard, KTCardBody, KTSVG } from "../../../../../../../_metronic/helpers";


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
    title: 'Fist Name',
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
    title: 'Email',
  },
  {
    title: 'Phone',
  },
  {
    title: 'Address',
  },
  {
    title: 'Gender',
  }
]

export function CaddiesTable() {
  const [loading, setLoading] = useState(false)

  return (
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
  );
}
