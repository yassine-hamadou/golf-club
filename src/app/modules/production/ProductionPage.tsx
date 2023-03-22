import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Register} from './components/register/Register'
import {GamePlanning} from './components/gamePlanning/gameSchedule'
import {Reports} from './components/reports/MembersReport'
import {Shop} from './components/shop/Shop'
import {TeeSheet} from './components/teeSheet/teeSheet'
import {CourseSetup} from './components/teeSheet/setup/CourseSetup'
import AddCourseSetup from './components/teeSheet/setup/AddCourseSetup'
import {Fees} from './components/teeSheet/setup/Fees'
import {CaddiesTable} from './components/teeSheet/setup/caddies/CaddiesTable'
import AddCaddy from './components/teeSheet/setup/caddies/AddCaddy'
import {AddFeeSetup} from './components/teeSheet/setup/AddFeeSetup'
import {GameTypeTable} from './components/teeSheet/setup/GameTypeTable'
import {AddGameTypeSetup} from './components/teeSheet/setup/AddGameTypeSetup'
import ScoreBoard from "./components/scoreBoard/ScoreBoard";
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
            <PageTitle breadcrumbs={accountBreadCrumbs}>Calendar</PageTitle>
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
        path='/gameplay/*'
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Gameplay</PageTitle>
            <ScoreBoard />
          </>
        }
      />
      <Route
        path='/shop/*'
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Shop</PageTitle>
            <Shop />
          </>
        }
      />
      <Route
        path='/setup/*'
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Setup</PageTitle>
            <Outlet />
          </>
        }
      >
        <Route
          path='course-setup/*'
          element={
            <>
              {/*<PageTitle breadcrumbs={accountBreadCrumbs}>Course Setup</PageTitle>*/}
              {/*  <CourseSetup />*/}
              <Outlet />
            </>
          }
        >
          <Route
            path=''
            element={
              <>
                <PageTitle breadcrumbs={accountBreadCrumbs}>Course Setup</PageTitle>
                <CourseSetup />
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
          path='fees/*'
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
                <PageTitle breadcrumbs={accountBreadCrumbs}>Fees Setup</PageTitle>
                <Fees />
              </>
            }
          />
          <Route
            path='add'
            element={
              <>
                <PageTitle breadcrumbs={accountBreadCrumbs}>Add Fee Setup</PageTitle>
                <AddFeeSetup />
              </>
            }
          />
        </Route>
        <Route
          path='game-type/*'
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
                <PageTitle breadcrumbs={accountBreadCrumbs}>Game Type Setup</PageTitle>
                <GameTypeTable />
              </>
            }
          />
          <Route
            path='add'
            element={
              <>
                <PageTitle breadcrumbs={accountBreadCrumbs}>Add Game Type Setup</PageTitle>
                <AddGameTypeSetup />
              </>
            }
          />
        </Route>
        <Route
          path='caddies/*'
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
                <PageTitle breadcrumbs={accountBreadCrumbs}>Caddies Setup</PageTitle>
                <CaddiesTable />
              </>
            }
          />
          <Route
            path='add'
            element={
              <>
                <PageTitle breadcrumbs={accountBreadCrumbs}>Add Caddy</PageTitle>
                <AddCaddy />
              </>
            }
          />
        </Route>
      </Route>
      <Route
        path='/reports/*'
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Reports</PageTitle>
            <Reports />
          </>
        }
      />
      <Route path='*' element={<Navigate to='/error/404' />} />
    </Routes>
  )
}
export default ProductionPage
