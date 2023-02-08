/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import {Link} from 'react-router-dom'
import clsx from 'clsx'
import {checkIsActive, KTSVG} from '../../../helpers'
import {useLocation} from 'react-router'

export function AsideMenuMain() {
  const intl = useIntl()
  const {pathname} = useLocation()
  const isDashboardActive = checkIsActive(pathname, '/dashboard')

  return (
    <>
      {/*<div className='menu-item'>*/}
      {/*  <Link*/}
      {/*    className={clsx('menu-link without-sub ml0', {active: isDashboardActive})}*/}
      {/*    to='/dashboard'*/}
      {/*  >*/}
      {/*    <span className='menu-icon'>*/}
      {/*      <KTSVG path='/media/icons/duotune/art/art002.svg' className='svg-icon-2' />*/}
      {/*    </span>*/}
      {/*    <span className='menu-title'>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</span>*/}
      {/*  </Link>*/}
      {/*</div>*/}
      <AsideMenuItemWithSub to='' title='MAIN NAVIGATION' fontIcon='bi-archive' icon='/media/icons/duotune/general/gen022.svg'>
        <AsideMenuItem to='register' icon='/media/icons/duotune/general/gen055.svg' title='Register' />
        <AsideMenuItem to='deposit' fontIcon='bi-archive' icon='/media/icons/duotune/finance/fin010.svg' title='Deposit Money' />
        <AsideMenuItem to='shop' fontIcon='bi-archive' icon='/media/icons/duotune/ecommerce/ecm001.svg' title='Shop' />
        <AsideMenuItem to='calendar' fontIcon='bi-archive' icon='/media/icons/duotune/general/gen014.svg' title='Calendar' />
        <AsideMenuItem to='tee' fontIcon='bi-archive' icon='/media/icons/duotune/general/gen022.svg' title='Tee Times' />
        <AsideMenuItem to='pos' fontIcon='bi-archive' icon='/media/icons/duotune/finance/fin007.svg' title='POS' />
        <AsideMenuItem to='partners' fontIcon='bi-archive' icon='/media/icons/duotune/technology/teh010.svg' title='Partners' />
        <AsideMenuItem to='card-management' fontIcon='bi-archive' icon='/media/icons/duotune/finance/fin002.svg' title='Card Management' />

      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='#'
        title='Setup'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/coding/cod009.svg'
      >
        <AsideMenuItem to='/setup/location' title='Location' hasBullet={true} />
      </AsideMenuItemWithSub>

      {/*<div className='menu-item'>*/}
      {/*  <Link*/}
      {/*    className={clsx('menu-link without-sub ml0', {active: isDashboardActive})}*/}
      {/*    to='/dashboard'*/}
      {/*  >*/}
      {/*    <span className='menu-icon'>*/}
      {/*      <KTSVG path='/media/icons/duotune/general/gen055.svg' className='svg-icon-2' />*/}
      {/*    </span>*/}
      {/*    <span className='menu-title'>Configuration</span>*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </>
  )
}
