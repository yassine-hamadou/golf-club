/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
        <AsideMenuItemWithSub to='' title='MAIN NAVIGATION' fontIcon='bi-archive' icon='/media/icons/duotune/general/gen022.svg'>
            <AsideMenuItem to='register' icon='/media/icons/duotune/general/gen055.svg' title='Membership' />
            <AsideMenuItem to='planning' fontIcon='bi-archive' icon='/media/icons/duotune/general/gen014.svg' title='Calendar' />
            <AsideMenuItem to='tee-sheet' fontIcon='bi-archive' icon='/media/icons/duotune/ecommerce/ecm009.svg' title='Tee Sheet' />
            <AsideMenuItem to='gameplay' fontIcon='bi-archive' icon='/media/icons/duotune/communication/com001.svg' title='Gameplay' />
            <AsideMenuItem to='shop' fontIcon='bi-archive' icon='/media/icons/duotune/ecommerce/ecm001.svg' title='Shop' />
            {/*<AsideMenuItem to='pos' fontIcon='bi-archive' icon='/media/icons/duotune/finance/fin007.svg' title='POS' />*/}
            {/*<AsideMenuItem to='partners' fontIcon='bi-archive' icon='/media/icons/duotune/technology/teh010.svg' title='Partners' />*/}
            {/*<AsideMenuItem to='card-management' fontIcon='bi-archive' icon='/media/icons/duotune/finance/fin002.svg' title='Card Management' />*/}

        </AsideMenuItemWithSub>
        <div className='menu-item'>
            <div className='menu-content'>
                <div className='separator mx-1 my-4'></div>
            </div>
        </div>
        <AsideMenuItemWithSub
            to='#'
            title='Reports'
            fontIcon='bi-archive'
            icon='/media/icons/duotune/general/gen005.svg'>
            <AsideMenuItem
                to='/reports/members-report'
                title='Members report'
                fontIcon='bi-archive'
                icon='/media/icons/duotune/communication/com014.svg'
                hasBullet={false} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
            to='#'
            title='Setup'
            fontIcon='bi-archive'
            icon='/media/icons/duotune/coding/cod009.svg'
        >
            <AsideMenuItem
                to='/setup/course-setup'
                title='Course Setup'
                fontIcon='bi-archive'
                icon='/media/icons/duotune/maps/map003.svg'
                hasBullet={false} />
            <AsideMenuItem
                to='/setup/fees'
                fontIcon='bi-archive'
                icon='/media/icons/duotune/finance/fin010.svg' title='Fees Setup' />
            <AsideMenuItem
                to='/setup/caddies'
                title='Caddies'
                fontIcon='bi-archive'
                icon='/media/icons/duotune/communication/com013.svg'
                hasBullet={false} />

        </AsideMenuItemWithSub>
    </>
  )
}
