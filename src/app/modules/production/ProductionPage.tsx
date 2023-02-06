import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {EquipmentDetail} from './components/entries/equipment/EquipmentSchedule'
const accountBreadCrumbs: Array<PageLink> = []

const ProductionPage: React.FC = () => {
  return (
    <Routes>
      <Route
        path='/entries/*'
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route
          path='schedule'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Equipment Schedule</PageTitle>
              {/*<Overview />*/}
              <EquipmentDetail />
            </>
          }
        />
      </Route>
    </Routes>
  )
}
export default ProductionPage
