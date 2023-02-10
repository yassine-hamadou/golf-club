import {createRoot} from 'react-dom/client'
import {registerLicense} from '@syncfusion/ej2-base'

// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
// Apps
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/plugins.scss'
import './_metronic/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS35ad0VjUH1ecHNXQw==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEVqWH9eeXZVRmhbVA==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjUH5ecH1XRmFcUkE=;MTA5ODcyMUAzMjMwMmUzNDJlMzBYWXhsREh0bjFiT3R2YU9tVmM2ZjUxcThybmhhU2RaVVdCNEQrclBjM2c4PQ==;MTA5ODcyMkAzMjMwMmUzNDJlMzBGd3VVbjVUSWRBOC9pQWpBQjF1YlY3bk50MW5PRU1Malc4VE9Dc2ZPL3hZPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhWXZfcHRcRGBdWUVz;MTA5ODcyNEAzMjMwMmUzNDJlMzBic1JWTGpnTkpFK0RxU2xmWW9VNlRwWFE3RXBTZlNWeWdqN3RTaTJoY0g0PQ==;MTA5ODcyNUAzMjMwMmUzNDJlMzBLY2F6R1h0TzQxUmlHaGtxYi9QNXlrWlhVM1NQSjh5QmhVQnFSaWtxV1pzPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjUH5ecH1XRmJaVEI=;MTA5ODcyN0AzMjMwMmUzNDJlMzBFQW5jY2NPS3VXVkZkYlh4OUlDSXhqL2RKMnZuMjZxQjNza0thMmdPY1A4PQ==;MTA5ODcyOEAzMjMwMmUzNDJlMzBSUCtvWVJsUnU2ZXlObXUyU1FJZ1dJYkdRVXNjUjZna2hyN3Q5R0U5UmhrPQ==;MTA5ODcyOUAzMjMwMmUzNDJlMzBic1JWTGpnTkpFK0RxU2xmWW9VNlRwWFE3RXBTZlNWeWdqN3RTaTJoY0g0PQ==')
setupAxios(axios)
Chart.register(...registerables)

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <MetronicI18nProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </MetronicI18nProvider>
  )
}
