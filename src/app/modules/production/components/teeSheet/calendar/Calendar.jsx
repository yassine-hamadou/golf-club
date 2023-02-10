import {L10n} from '@syncfusion/ej2-base'
import {
  ScheduleComponent,
  Day,
  Week,
  Month,
  Agenda,
  Inject, TimelineViews, TimelineMonth, ViewsDirective, ViewDirective, HeaderRowsDirective, HeaderRowDirective
} from "@syncfusion/ej2-react-schedule";
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns'
import { useQueryClient} from 'react-query'
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
import {message} from 'antd'

/**
 *  Schedule editor custom fields sample
 */

//Editing editor buttons
L10n.load({
  'en-US': {
    schedule: {
      saveButton: 'Schedule Game',
      cancelButton: 'Cancel',
      deleteButton: 'Remove',
      newEvent: 'Schedule Game',
    },
  },
})

const Calendar = () => {
  let scheduleObj
  //Access the same location query from cycle details component
  const locationQuery = useQueryClient().getQueryData('Locations')

    let dropDownListObject; //to access the dropdownlist component
  function editorTemplate(props) {
    console.log('props', props)
    function getFleetModel(e) {}
    return props !== undefined ? (
      <table className='custom-event-editor' style={{width: '100%'}} cellPadding={5}>
        <tbody>
          <tr>
            <td className='e-textlabel'>Game</td>
            <td colSpan={4}>
              <DropDownListComponent
                id='Summary'
                // placeholder='Choose Employee Code'
                data-name='fleetId'
                className='e-field'
                style={{width: '100%'}}
                fields={{text: 'text', value: 'value'}}
                value={props && props.fleetId ? `${props.fleetId}` : null}
                change={getFleetModel}
              />
            </td>
          </tr>
          <tr>

            <td className='e-textlabel'>Player 2</td>
            <td colSpan={4}>
              <DropDownListComponent
                id='serviceTypeId'
                placeholder='Choose Player'
                data-name='serviceTypeId'
                className='e-field'
                ref={(scope) => (dropDownListObject = scope)}
                style={{width: '100%'}}
                fields={{text: 'text', value: 'value'}}
                value={props?.serviceTypeId}
              />
            </td>
          </tr>
          <tr>

            <td className='e-textlabel'>Player 3</td>
            <td colSpan={4}>
              <DropDownListComponent
                id='serviceTypeId'
                placeholder='Choose Player'
                data-name='serviceTypeId'
                className='e-field'
                ref={(scope) => (dropDownListObject = scope)}
                style={{width: '100%'}}
                fields={{text: 'text', value: 'value'}}
                value={props?.serviceTypeId}
              />
            </td>
          </tr>
          <tr>

            <td className='e-textlabel'>Player 4</td>
            <td colSpan={4}>
              <DropDownListComponent
                id='serviceTypeId'
                placeholder='Choose Player'
                data-name='serviceTypeId'
                className='e-field'
                ref={(scope) => (dropDownListObject = scope)}
                style={{width: '100%'}}
                fields={{text: 'text', value: 'value'}}
                value={props?.serviceTypeId}
              />
            </td>
          </tr>
          <tr>

            <td className='e-textlabel'>Format</td>
            <td colSpan={4}>
              <DropDownListComponent
                id='serviceTypeId'
                placeholder='Choose Number of Holes'
                data-name='serviceTypeId'
                className='e-field'
                ref={(scope) => (dropDownListObject = scope)}
                style={{width: '100%'}}
                fields={{text: 'text', value: 'value'}}
                value={props?.serviceTypeId}
              />
            </td>
          </tr>

          <tr>
            <td className='e-textlabel'>From</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                id='StartTime'
                format='dd/MM/yy hh:mm a'
                data-name='timeStart'
                value={props && props.timeStart ? new Date(props?.timeStart) : props?.StartTime}
                className='e-field'
                readonly={true}
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className='e-textlabel'>To</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                id='EndTime'
                format='dd/MM/yy hh:mm a'
                data-name='timeEnd'
                readonly={true}
                value={props && props.timeEnd ? new Date(props?.timeEnd) : props?.EndTime}
                className='e-field'
              ></DateTimePickerComponent>
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      message.error('Please select an event')
    )
  }
  function onActionBegin(args) {
    if (args.requestType === 'eventCreate' && args.data.length > 0) {
      let eventData = args.data[0];
      let eventField = scheduleObj.eventFields;
      let startDate = eventData[eventField.startTime];
      let endDate = eventData[eventField.endTime];
      args.cancel = !scheduleObj.isSlotAvailable(startDate, endDate);
      if (args.cancel) {
        message.error('The selected time slot is not available. Please choose another slot').then(r => r);
      }
    }
  }

  function onEventRendered(args) {
    let eventData = args.data;
    let eventField = scheduleObj.eventFields;
    let startDate = eventData[eventField.startTime];
    let endDate = eventData[eventField.endTime];
    let isSlotAvailable = scheduleObj.isSlotAvailable(startDate, endDate);
    if (!isSlotAvailable) {
      args.element.style.borderLeftColor = '#ff4040';
      args.element.style.borderLeftWidth = '5px';

    }
  }
  return (
    <div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent
              width='100%'
              height='500px'
              ref={t => scheduleObj = t}
              // eventSettings={{ dataSource: data }}
              eventRendered={onEventRendered.bind(this)}
              id='schedule'
              editorTemplate={editorTemplate}
              timeScale={{enable: true, interval: 10, slotCount: 1}}
              actionBegin={onActionBegin}
          >
            <ViewsDirective>
              <ViewDirective option='Agenda' displayName='Time Booked'></ViewDirective>
              <ViewDirective option='Day' displayName='Tee Time' startHour='6:00' endHour={'16:00'}></ViewDirective>
            </ViewsDirective>
          <Inject services={[Day, Agenda]} />
        </ScheduleComponent>
        </div>
      </div>
    </div>
  )
}
export {Calendar}
