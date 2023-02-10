/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItemWithSub to='' title='MAIN NAVIGATION' fontIcon='bi-archive' icon='/media/icons/duotune/general/gen022.svg'>
        <AsideMenuItem to='register' icon='/media/icons/duotune/general/gen055.svg' title='Register' />
        <AsideMenuItem to='deposit' fontIcon='bi-archive' icon='/media/icons/duotune/finance/fin010.svg' title='Deposit Money' />
        <AsideMenuItem to='shop' fontIcon='bi-archive' icon='/media/icons/duotune/ecommerce/ecm001.svg' title='Shop' />
        <AsideMenuItem to='planning' fontIcon='bi-archive' icon='/media/icons/duotune/general/gen014.svg' title='Calendar' />
        <AsideMenuItem to='tee-sheet' fontIcon='bi-archive' icon='/media/icons/duotune/general/gen022.svg' title='Tee Times' />
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

    </>
  )
}
