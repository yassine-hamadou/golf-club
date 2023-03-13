/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {BarChart} from './BarChart'
import {KTCard, KTCardBody, KTSVG, toAbsoluteUrl} from "../../../_metronic/helpers";
import {Card4} from "../../../_metronic/partials/content/cards/Card4";
import {Link} from "react-router-dom";
import {Dropdown1} from "../../../_metronic/partials";
import {Button} from "antd";

const DashboardPage: FC = () => (
  <>
      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
          <div className='card mb-5 mb-xl-10'>
              <div className='card-body pt-9 pb-0'>
                  <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
                      <div className='me-7 mb-4'>
                          <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                              <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='Yassine' />
                              <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
                          </div>
                      </div>

                      <div className='flex-grow-1'>
                          <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                              <div className='d-flex flex-column'>
                                  <div className='d-flex align-items-center mb-2'>
                                      <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                                          Yassine Hamadou Mounkaila
                                          <span className={'badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'}>ID: AGC007</span>
                                      </a>
                                      {/*<a href='#'>*/}
                                      {/*  <KTSVG*/}
                                      {/*    path='/media/icons/duotune/general/gen026.svg'*/}
                                      {/*    className='svg-icon-1 svg-icon-primary'*/}
                                      {/*  />*/}
                                      {/*</a>*/}
                                  </div>

                                  <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                                      <a
                                        href='#'
                                        className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                                      >
                                          <KTSVG
                                            path='/media/icons/duotune/communication/com006.svg'
                                            className='svg-icon-4 me-1'
                                          />
                                          Handicap: 0
                                      </a>
                                      <a
                                        href='#'
                                        className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                                      >
                                          <KTSVG
                                            path='/media/icons/duotune/general/gen018.svg'
                                            className='svg-icon-4 me-1'
                                          />
                                          GH, Greater Accra
                                      </a>
                                      <a
                                        href='#'
                                        className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                                      >
                                          <KTSVG
                                            path='/media/icons/duotune/communication/com011.svg'
                                            className='svg-icon-4 me-1'
                                          />
                                          yassinehamadou1@gmail.com
                                      </a>
                                  </div>
                              </div>

                              <Link to={'/account'} className={'btn btn-primary'}
                              >Account</Link>
                          </div>

                          {/*<div className='d-flex flex-wrap flex-stack'>*/}
                          {/*<div className='d-flex flex-column flex-grow-1 pe-8'>*/}
                          {/*<div className='d-flex flex-wrap'>*/}
                          {/*  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>*/}
                          {/*    <div className='d-flex align-items-center'>*/}
                          {/*      <KTSVG*/}
                          {/*        path='/media/icons/duotune/arrows/arr066.svg'*/}
                          {/*        className='svg-icon-3 svg-icon-success me-2'*/}
                          {/*      />*/}
                          {/*      <div className='fs-2 fw-bolder'>4500$</div>*/}
                          {/*    </div>*/}

                          {/*    <div className='fw-bold fs-6 text-gray-400'>Earnings</div>*/}
                          {/*  </div>*/}

                          {/*  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>*/}
                          {/*    <div className='d-flex align-items-center'>*/}
                          {/*      <KTSVG*/}
                          {/*        path='/media/icons/duotune/arrows/arr065.svg'*/}
                          {/*        className='svg-icon-3 svg-icon-danger me-2'*/}
                          {/*      />*/}
                          {/*      <div className='fs-2 fw-bolder'>75</div>*/}
                          {/*    </div>*/}

                          {/*    <div className='fw-bold fs-6 text-gray-400'>Projects</div>*/}
                          {/*  </div>*/}

                          {/*  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>*/}
                          {/*    <div className='d-flex align-items-center'>*/}
                          {/*      <KTSVG*/}
                          {/*        path='/media/icons/duotune/arrows/arr066.svg'*/}
                          {/*        className='svg-icon-3 svg-icon-success me-2'*/}
                          {/*      />*/}
                          {/*      <div className='fs-2 fw-bolder'>60%</div>*/}
                          {/*    </div>*/}

                          {/*    <div className='fw-bold fs-6 text-gray-400'>Success Rate</div>*/}
                          {/*  </div>*/}
                          {/*</div>*/}
                          {/*</div>*/}

                          {/*<div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>*/}
                          {/*  <div className='d-flex justify-content-between w-100 mt-auto mb-2'>*/}
                          {/*    <span className='fw-bold fs-6 text-gray-400'>Profile Compleation</span>*/}
                          {/*    <span className='fw-bolder fs-6'>50%</span>*/}
                          {/*  </div>*/}
                          {/*  <div className='h-5px mx-3 w-100 bg-light mb-3'>*/}
                          {/*    <div*/}
                          {/*      className='bg-success rounded h-5px'*/}
                          {/*      role='progressbar'*/}
                          {/*      style={{width: '50%'}}*/}
                          {/*    ></div>*/}
                          {/*  </div>*/}
                          {/*</div>*/}
                          {/*</div>*/}
                      </div>
                  </div>

                  {/*<div className='d-flex overflow-auto h-55px'>*/}
                  {/*  <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>*/}
                  {/*    <li className='nav-item'>*/}
                  {/*      <Link*/}
                  {/*        className={*/}
                  {/*          `nav-link text-active-primary me-6 ` +*/}
                  {/*          (location.pathname === '/crafted/pages/profile/overview' && 'active')*/}
                  {/*        }*/}
                  {/*        to='/crafted/pages/profile/overview'*/}
                  {/*      >*/}
                  {/*        Overview*/}
                  {/*      </Link>*/}
                  {/*    </li>*/}
                  {/*    <li className='nav-item'>*/}
                  {/*      <Link*/}
                  {/*        className={*/}
                  {/*          `nav-link text-active-primary me-6 ` +*/}
                  {/*          (location.pathname === '/crafted/pages/profile/projects' && 'active')*/}
                  {/*        }*/}
                  {/*        to='/crafted/pages/profile/projects'*/}
                  {/*      >*/}
                  {/*        Projects*/}
                  {/*      </Link>*/}
                  {/*    </li>*/}
                  {/*    <li className='nav-item'>*/}
                  {/*      <Link*/}
                  {/*        className={*/}
                  {/*          `nav-link text-active-primary me-6 ` +*/}
                  {/*          (location.pathname === '/crafted/pages/profile/campaigns' && 'active')*/}
                  {/*        }*/}
                  {/*        to='/crafted/pages/profile/campaigns'*/}
                  {/*      >*/}
                  {/*        Campaigns*/}
                  {/*      </Link>*/}
                  {/*    </li>*/}
                  {/*    <li className='nav-item'>*/}
                  {/*      <Link*/}
                  {/*        className={*/}
                  {/*          `nav-link text-active-primary me-6 ` +*/}
                  {/*          (location.pathname === '/crafted/pages/profile/documents' && 'active')*/}
                  {/*        }*/}
                  {/*        to='/crafted/pages/profile/documents'*/}
                  {/*      >*/}
                  {/*        Documents*/}
                  {/*      </Link>*/}
                  {/*    </li>*/}
                  {/*    <li className='nav-item'>*/}
                  {/*      <Link*/}
                  {/*        className={*/}
                  {/*          `nav-link text-active-primary me-6 ` +*/}
                  {/*          (location.pathname === '/crafted/pages/profile/connections' && 'active')*/}
                  {/*        }*/}
                  {/*        to='/crafted/pages/profile/connections'*/}
                  {/*      >*/}
                  {/*        Connections*/}
                  {/*      </Link>*/}
                  {/*    </li>*/}
                  {/*  </ul>*/}
                  {/*</div>*/}
              </div>
          </div>
      </div>
      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
          <Link to='/calendar' className='col-6 col-sm-6 col-xl'>
              <Card4 icon='/media/icons/egolf/golfBall.png' title='Calendar' description='' />
          </Link>
          <Link to='/tee-sheet' className='col-6 col-sm-6 col-xl'>
              <Card4 icon='/media/icons/egolf/golfBall.png' title='Book Tee Time' description='' />
          </Link>
      </div>
      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
          <Link to='/gameplay' className='col-6 col-sm-6 col-xl'>
              <Card4 icon='/media/icons/egolf/golfBall.png' title='Score Board' description='' />
          </Link>
          <Link to='/score-history' className='col-6 col-sm-6 col-xl'>
              <Card4 icon='/media/icons/egolf/golfBall.png' title='Score History' description='' />
          </Link>
      </div>

    {/* begin::Row */}
    {/*<div className='row gy-5 g-xl-8'> */}
    {/*  <div className='col-xl-6'>*/}
    {/*    <BarChart*/}
    {/*      className='card-xxl-stretch mb-5 mb-xl-8'*/}
    {/*      chartColor='danger'*/}
    {/*      chartHeight='200px'*/}
    {/*        barcolor='#278119FF'*/}
    {/*    />*/}
    {/*  </div>*/}
    {/*</div>*/}
    {/* end::Row */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
