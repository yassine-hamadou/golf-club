import { KTCard, KTCardBody } from '../../../../../_metronic/helpers'
import {Calendar} from './calendar/Calendar'
import { PageLink } from "../../../../../_metronic/layout/core";
const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Register',
    path: 'register',
    isSeparator: false,
    isActive: false,
  }
]

const GamePlanning = () => {
  // let dropDownListObj: any
  //set the data to dataSource property

  return (
    <>
      <KTCard>
        <KTCardBody className='py-5 px-2'>
          <Calendar />
        </KTCardBody>
      </KTCard>
    </>
  )
}

export {GamePlanning}
