import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Register} from "./components/register/Register";
import {GamePlanning} from "./components/gamePlanning/gameSchedule";
import { Gameplay } from "./components/teeSheet/Gameplay";
import { Setup } from './components/teeSheet/setup/Setup';
import { Reports } from "./components/reports/MembersReport";
import { Shop } from './components/shop/Shop';
import { TeeSheet } from './components/teeSheet/teeSheet';
import { AccountPage } from './components/teeSheet/setup/AccountPage';
import {History} from "./components/teeSheet/setup/History";
const accountBreadCrumbs: Array<PageLink> = []

const ProductionPage: React.FC = () => {
  // @ts-ignore
  return (
    <Routes>
      <Route
        path='/register/*'
        element={
          <>
            <PageTitle>Members</PageTitle>
            <Register />
          </>
        }
      />
      <Route
        path='/planning/*'
        element={
          <>
            <PageTitle>Planning</PageTitle>
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
        <Route
        path='/score-history/*'
        element={
          <>
            <PageTitle>Score History</PageTitle>
            <History />
          </>
        }
      />
        <Route
          path='/account/*'
          element={
              <>
                  <Outlet />
              </>
          }
        >
            <Route
                path=''
                element={
                    <>
                        <PageTitle>Account</PageTitle>
                        <AccountPage />
                    </>
                }
            />
        </Route>
      <Route
        path='/gameplay/*'
        element={
          <>
            <PageTitle>Gameplay</PageTitle>
            <Gameplay />
          </>
        }
      />
      <Route
        path='/shop/*'
        element={
          <>
            <PageTitle>Shop</PageTitle>
            <Shop />
          </>
        }
      />
      <Route
        path='/setup/*'
        element={
          <>
            <PageTitle>Setup</PageTitle>
            <Setup />
          </>
        }
      />
      <Route path='/reports/*' element={
        <>
          <PageTitle>Reports</PageTitle>
          <Reports/>
        </>
      } />
      <Route path='*' element={<Navigate to='/error/404' />} />

    </Routes>
  )
}
export default ProductionPage
