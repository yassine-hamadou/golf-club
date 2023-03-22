import {
    ScheduleComponent,
    Month,
    Agenda,
    Inject, ViewsDirective, ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import {useQuery} from 'react-query'
import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-calendars/styles/material.css'
import '@syncfusion/ej2-dropdowns/styles/material.css'
import '@syncfusion/ej2-inputs/styles/material.css'
import '@syncfusion/ej2-lists/styles/material.css'
import '@syncfusion/ej2-navigations/styles/material.css'
import '@syncfusion/ej2-popups/styles/material.css'
import '@syncfusion/ej2-splitbuttons/styles/material.css'
import '@syncfusion/ej2-react-schedule/styles/material.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import axios from "axios";
import {API_URL} from "../../../../../urls";
import {Space, Spin} from "antd";

/**
 *  Schedule editor custom fields sample
 */

//Editing editor buttons
// L10n.load({
//   'en-US': {
//     schedule: {
//       saveButton: 'Schedule Game',
//       cancelButton: 'Cancel',
//       deleteButton: 'Remove',
//       newEvent: 'Schedule Game',
//     },
//   },
// })

const Calendar = () => {

  let dropDownListObject; //to access the dropdownlist component
  // function editorTemplate(props) {
  //   console.log('props', props)
  //   function getFleetModel(e) {}
  //   return props !== undefined ? (
  //     <table className='custom-event-editor' style={{width: '100%'}} cellPadding={5}>
  //       <tbody>
  //         <tr>
  //           <td className='e-textla bel'>Game</td>
  //           <td colSpan={4}>
  //             <DropDownListComponent
  //               id='Summary'
  //               // placeholder='Choose Employee Code'
  //               data-name='fleetId'
  //               className='e-field'
  //               style={{width: '100%'}}
  //               fields={{text: 'text', value: 'value'}}
  //               value={props && props.fleetId ? `${props.fleetId}` : null}
  //               change={getFleetModel}
  //             />
  //           </td>
  //         </tr>
  //         <tr>
  //
  //           <td className='e-textlabel'>Type of Game</td>
  //           <td colSpan={4}>
  //             <DropDownListComponent
  //               id='serviceTypeId'
  //               placeholder='Choose Type of Game'
  //               data-name='serviceTypeId'
  //               className='e-field'
  //               ref={(scope) => (dropDownListObject = scope)}
  //               style={{width: '100%'}}
  //               fields={{text: 'text', value: 'value'}}
  //               value={props?.serviceTypeId}
  //             />
  //           </td>
  //         </tr>
  //         <tr>
  //           <td className='e-textlabel'>From</td>
  //           <td colSpan={4}>
  //             <DateTimePickerComponent
  //               id='StartTime'
  //               format='dd/MM/yy hh:mm a'
  //               data-name='timeStart'
  //               value={props && props.timeStart ? new Date(props?.timeStart) : props?.StartTime}
  //               className='e-field'
  //             ></DateTimePickerComponent>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td className='e-textlabel'>To</td>
  //           <td colSpan={4}>
  //             <DateTimePickerComponent
  //               id='EndTime'
  //               format='dd/MM/yy hh:mm a'
  //               data-name='timeEnd'
  //               value={props && props.timeEnd ? new Date(props?.timeEnd) : props?.EndTime}
  //               className='e-field'
  //             ></DateTimePickerComponent>
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   ) : (
  //     message.error('Please select an event')
  //   )
  // }
    const {data: calendarData, isLoading, isError} = useQuery('calendarData', () => {
        return axios.get(`${API_URL}/gameSchedules`)
    })
  return !isLoading ? (
    <div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent
              width='100%'
              height='650px'
              eventSettings={{dataSource: calendarData?.data,
                fields: {
                    id: 'id',
                    subject: {name: 'subject'},
                    startTime: {name: 'startTime'},
                    endTime: {name: 'endTime'},
                    description: {name: 'description'},
                    gameTypeId: {name: 'gameTypeId'},
                }
              }}
              currentView='Month'
              readonly={true}
              id='schedule'
              agendaDaysCount={367}
          >
                <ViewsDirective>
                    <ViewDirective option='Month' />
                    <ViewDirective option="Agenda" allowVirtualScrolling={false}/>
                </ViewsDirective>
          <Inject services={[Month, Agenda]} />
        </ScheduleComponent>
        </div>
      </div>
    </div>
  ) : (
      <>
          <Space size="middle">
              <Spin size="large" />
          </Space>
      </>
  )
}
export {Calendar}
