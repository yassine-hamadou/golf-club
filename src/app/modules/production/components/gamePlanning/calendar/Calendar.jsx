import {L10n} from '@syncfusion/ej2-base'
import {
  ScheduleComponent,
  Month,
  Agenda,
  Inject,
  ViewsDirective,
  ViewDirective,
} from '@syncfusion/ej2-react-schedule'
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns'
import {useMutation, useQuery, useQueryClient} from 'react-query'
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
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import {Alert, message, Space, Spin} from 'antd'
import axios from "axios";
import {API_URL} from "../../../../../urls";

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
  let queryClient = useQueryClient()

    //get game types
  const {data: gameType} = useQuery('gameType', () => {
    return axios.get(`${API_URL}/gameTypes`).then((res) => res.data)
  })

  //get game schedule
  const {data: calendarData} = useQuery('calendarData', () => {
    return axios.get(`${API_URL}/gameSchedules`)
  })

    //post game schedule
    const postGame = (gameSchedule) => {
        return axios.post(`${API_URL}/gameSchedules`, gameSchedule)
    }

  //add game schedule
  const {mutate: mutateGameSchedule} = useMutation('addGame', postGame,{
    onSuccess: () => {
        message.success('Game Scheduled').then(r => r)
        queryClient.invalidateQueries('calendarData').then(r => r)
    },
    onError: () => {
        message.error("Err").then(r => r)
    }
  })

  //delete game schedule
  const {mutate: deleteGameSchedule} = useMutation((gameSchedule) =>
      axios.delete(`${API_URL}/gameSchedules/${gameSchedule.id}`), {
      onSuccess: () => {
          message.success('Game Deleted').then(r => r)
          queryClient.invalidateQueries('calendarData').then(r => r)
      },
      onError: (error) => {
          message.error(error.message).then(r => r)
          message.error("Error deleting the schedule").then(r => r)
      }
  })

    //update game schedule
    const {mutate: updateGameSchedule} = useMutation((gameSchedule) =>
        axios.put(`${API_URL}/gameSchedules/${gameSchedule.id}`, gameSchedule), {
        onSuccess: () => {
            message.success('Game Updated').then(r => r)
            queryClient.invalidateQueries('calendarData').then(r => r)
        },
        onError: (error) => {
            message.error(error.message).then(r => r)
        }})


const  onActionBegin = (args) => {
    console.log('first args', args)
  // args.cancel = true
  console.log('args', args)
  if (args.data !== undefined) {
    const data = args.data[0] ? args.data[0] : args.data

    if (args.requestType === 'eventCreate') {
      const gameSchedule = {
        subject: data.Subject,
        startTime: data.StartTime,
        endTime: data.EndTime,
        description: data.Description,
        gameTypeId: data.gameType,
      }

      console.log('gameSchedule', gameSchedule)
      mutateGameSchedule(gameSchedule)
    }

    if (args.requestType === 'eventChange') {
      console.log('gameSchedule Edit', args)
      const gameSchedule = {
        id: data.id,
        subject: data.Subject,
        startTime: data.StartTime,
        endTime: data.EndTime,
        description: data.Description,
        gameTypeId: data.gameType,
      }
      updateGameSchedule(gameSchedule)
    }

    if (args.requestType === 'eventRemove') {
      deleteGameSchedule(data)
    }
  }
}
  console.log('gameType', gameType)
  let dropDownListObject //to access the dropdownlist component
  function editorTemplate(props) {
    console.log('props in editor ', props)
    return props !== undefined ? (
      <table className='custom-event-editor' style={{width: '100%'}} cellPadding={5}>
        <tbody>
          <tr>
            <td className='e-textlabel'>Title</td>
            <td colSpan={4}>
              <input
                id='title'
                placeholder='Title'
                data-name='Subject'
                name='Subject'
                className='e-field e-input'
                type='text'
                style={{width: '100%'}}
                defaultValue={props && props.subject ? props.subject : ''}
              />
            </td>
          </tr>
          <tr>
            <td className='e-textlabel'>Game Type</td>
            <td colSpan={4}>
              <DropDownListComponent
                id='gameType'
                placeholder='Choose Type of Game'
                data-name='gameType'
                className='e-field'
                dataSource={gameType}
                fields={{text: 'name', value: 'id'}}
                value={props && props.gameTypeId ? props.gameTypeId : null}
                style={{width: '100%'}}
              />
            </td>
          </tr>
          <tr>
            <td className='e-textlabel'>Description</td>
            <td colSpan={4}>
              {/* Render Multiline TextBox */}
              <TextBoxComponent
                  id='Description'
                  data-name='Description'
                  name='Description'
                  className='e-field e-input'
                  floatLabelType={'Auto'}
                  placeholder="Enter a Description"
                  value={props && props.description ? props.description : ''}
              />
            </td>
          </tr>
          <tr>
            <td className='e-textlabel'>First Tee</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                id='StartTime'
                format='dd/MM/yy hh:mm a'
                data-name='StartTime'
                name={'StartTime'}
                value={props && props.startTime ? props.startTime : props?.startTime}
                className='e-field'
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className='e-textlabel'>Last Tee</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                id='EndTime'
                format='dd/MM/yy hh:mm a'
                data-name='EndTime'
                name={'EndTime'}
                value={props && props.endTime ? new Date(props?.endTime) : props?.endTime}
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

  let onCellClick = (args) => {
    // scheduleObj?.openEditor(args, 'Add', false) //open the editor on empty cell click
    //do not open the quick info popup on cell click
    args.cancel = true
    scheduleObj?.openEditor(args, 'Add', false)
  }

  return calendarData !== undefined ? (
    <div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent
            width='100%'
            height='650px'
            ref={(t) => (scheduleObj = t)}
            eventSettings={{
              dataSource: calendarData.data,
              fields: {
                id: 'id',
                subject: {name: 'subject'},
                startTime: {name: 'startTime'},
                endTime: {name: 'endTime'},
                description: {name: 'description'},
                gameTypeId: {name: 'gameTypeId'}
              },
            }}
            currentView='Month'
            id='schedule'
            actionBegin={onActionBegin}
            editorTemplate={editorTemplate}
            cellClick={onCellClick} //to open the editor on empty cell click
            loading={true}
          >
            <ViewsDirective>
              <ViewDirective option='Month'></ViewDirective>
            </ViewsDirective>
            <Inject services={[Month, Agenda]} />
          </ScheduleComponent>
        </div>
      </div>
    </div>
  ) : (
      <Space size="middle">
        <Spin size="large" />
      </Space>
  )
}
export {Calendar}

