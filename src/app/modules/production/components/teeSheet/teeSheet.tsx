import { KTCard, KTCardBody } from '../../../../../_metronic/helpers'
import { PageLink } from "../../../../../_metronic/layout/core";
import { Tee } from "./calendar/Calendar";
const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Register',
    path: 'register',
    isSeparator: false,
    isActive: false,
  }
]

const TeeSheet = () => {
  // let dropDownListObj: any
  //set the data to dataSource property

  return (
    <>
          <Tee />
    </>
  )
}

export {TeeSheet}
