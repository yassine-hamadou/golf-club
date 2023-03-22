import {PageTitle} from '../../../../../_metronic/layout/core'
import {Route, Routes} from 'react-router-dom'

export const Shop: any = () => {
  let accountBreadCrumbs
  return (
    <Routes>
      <Route
        path='all-products'
        element={
          <>
            <PageTitle breadcrumbs={accountBreadCrumbs}>All products</PageTitle>
            {/*<Shop />*/}
          </>
        }
      />
    </Routes>
  )
}
