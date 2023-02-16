import { Link, Route, Routes } from "react-router-dom";
import { PageTitle } from "../../../../../../_metronic/layout/core";
import { KTCard, KTCardBody, KTSVG } from "../../../../../../_metronic/helpers";
import { Button, Input, Space, Table } from "antd";
import AddCourseSetup from "./AddCourseSetup";
  let accountBreadCrumbs: any = [];

export const CourseSetup: any = () => {
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
    {

    },
    {
      title: 'Handicap',
      sorter: (a: any, b: any) => a.downTime - b.downTime,
    },
    {
      title: 'Game type',
    }
  ]
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Course Setup</PageTitle>
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
                />
              </KTCardBody>
            </KTCard>
          </>
        }
      />
      <Route
        path="add"
        element={
          <>
            <PageTitle breadcrumbs={
              [
                ...accountBreadCrumbs,
                {
                  title: 'Add',
                  path: '/course-setup/add',
                  isActive: true,
                }
              ]
            }>Add Course Setup</PageTitle>
            <AddCourseSetup />
          </>
        }
      />
    </Routes>
  );
}
