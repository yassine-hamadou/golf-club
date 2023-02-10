import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Register} from "./components/register/Register";
import {GamePlanning} from "./components/gamePlanning/gameSchedule";
import { TeeSheet } from './components/teeSheet/teeSheet';
const accountBreadCrumbs: Array<PageLink> = []

const ProductionPage: React.FC = () => {
  // @ts-ignore
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
      <Route
        path='/planning/*'
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Planning</PageTitle>
            <GamePlanning />
          </>
        }
      />
      <Route
        path='/tee-sheet/*'
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Tee Sheet</PageTitle>
            <TeeSheet />
          </>
        }
      />
      <Route path='*' element={<Navigate to='/error/404' />} />

    </Routes>
  )
}
export default ProductionPage
