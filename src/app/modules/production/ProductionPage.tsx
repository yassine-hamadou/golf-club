import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import Add from './components/register/add/Registration';
import {Register} from "./components/register/Register";
const accountBreadCrumbs: Array<PageLink> = []

const ProductionPage: React.FC = () => {
  return (
    <Routes>
      <Route
        path='/register/*'
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Members</PageTitle>
            <Register />
          </>
        }
      />
      <Route path='*' element={<Navigate to='/error/404' />} />

    </Routes>
  )
}
export default ProductionPage
