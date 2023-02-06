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
        <AsideMenuItem to='' fontIcon='bi-archive' icon='/media/icons/duotune/general/gen055.svg' title='Register' />
        <AsideMenuItem to='' fontIcon='bi-archive' icon='/media/icons/duotune/finance/fin010.svg' title='Deposit Money' />
        <AsideMenuItem to='' fontIcon='bi-archive' icon='/media/icons/duotune/ecommerce/ecm001.svg' title='Shop' />
        <AsideMenuItem to='' fontIcon='bi-archive' icon='/media/icons/duotune/general/gen014.svg' title='Calendar' />
        <AsideMenuItem to='' fontIcon='bi-archive' icon='/media/icons/duotune/general/gen022.svg' title='Tee Times' />
        <AsideMenuItem to='' fontIcon='bi-archive' icon='/media/icons/duotune/finance/fin007.svg' title='POS' />
        <AsideMenuItem to='' fontIcon='bi-archive' icon='/media/icons/duotune/technology/teh010.svg' title='Partners' />
        <AsideMenuItem to='' fontIcon='bi-archive' icon='/media/icons/duotune/finance/fin002.svg' title='Card Management' />

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
        <AsideMenuItem to='/setup/fleet' title='Fleet' hasBullet={true} />
        <AsideMenuItem to='/setup/down-type' title='Down Type' hasBullet={true} />
        <AsideMenuItem to='/setup/custodian' title='Custodian' hasBullet={true} />
        <AsideMenuItem to='/setup/location' title='Location' hasBullet={true} />
        <AsideMenuItem to='/setup/work-type' title='Work Type' hasBullet={true} />

        <AsideMenuItemWithSub to='/setup/lube' title='Lube' hasBullet={true}>
          <AsideMenuItem to='/setup/compartment' title='Compartment' hasBullet={true} />
          <AsideMenuItem to='/setup/lube-brand' title='Brand' hasBullet={true} />
          <AsideMenuItem to='/setup/lube-config' title='Lube Config' hasBullet={true} />
          <AsideMenuItem to='/setup/refill' title='Refill Type' hasBullet={true} />
        </AsideMenuItemWithSub>

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
