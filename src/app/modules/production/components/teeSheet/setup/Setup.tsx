import {Outlet, Route, Routes} from 'react-router-dom'
import {PageTitle} from '../../../../../../_metronic/layout/core'
import {Fees} from './Fees'
import {CaddiesTable} from './caddies/CaddiesTable'
import AddCourseSetup from './AddCourseSetup'
import {Course} from "./CourseSetup";
let accountBreadCrumbs: any = []

export const Setup: any = () => {
  return (
    <Routes>
      <Route
        path='course-setup'
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route
          path='/'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Course Setup</PageTitle>
              <Course />
            </>
          }
        />
        <Route
          path='add'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Add Course Setup</PageTitle>
              <AddCourseSetup />
            </>
          }
        />
      </Route>
      <Route
        path='fees'
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Fees Setup</PageTitle>
            <Fees />
          </>
        }
      />
      <Route
        path='caddies'
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Caddies Setup</PageTitle>
            <CaddiesTable />
          </>
        }
      />
    </Routes>
  )
}
