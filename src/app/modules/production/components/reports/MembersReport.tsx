import {PageTitle} from '../../../../../_metronic/layout/core'
import {Route, Routes} from 'react-router-dom'

export const Reports: any = () => {
  let accountBreadCrumbs: any = []
  return (
    <Routes>
      <Route
        path='members-report'
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>Members Report</PageTitle>
            {/*<Members />*/}
          </>
        }
      />
    </Routes>
  )
}
