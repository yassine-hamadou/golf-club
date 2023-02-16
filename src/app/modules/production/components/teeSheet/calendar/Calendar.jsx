// import {L10n} from '@syncfusion/ej2-base'
// import {
//   ScheduleComponent,
//   Day,
//   Week,
//   Month,
//   Agenda,
//   Inject, TimelineViews, TimelineMonth, ViewsDirective, ViewDirective, HeaderRowsDirective, HeaderRowDirective
// } from "@syncfusion/ej2-react-schedule";
// import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'
// import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns'
// import { useQueryClient} from 'react-query'
// import '@syncfusion/ej2-base/styles/material.css'
// import '@syncfusion/ej2-calendars/styles/material.css'
// import '@syncfusion/ej2-dropdowns/styles/material.css'
// import '@syncfusion/ej2-inputs/styles/material.css'
// import '@syncfusion/ej2-lists/styles/material.css'
// import '@syncfusion/ej2-navigations/styles/material.css'
// import '@syncfusion/ej2-popups/styles/material.css'
// import '@syncfusion/ej2-splitbuttons/styles/material.css'
// import '@syncfusion/ej2-react-schedule/styles/material.css'
// import '@syncfusion/ej2-buttons/styles/material.css'
// import {message} from 'antd'
//
// /**
//  *  Schedule editor custom fields sample
//  */
//
// //Editing editor buttons
// L10n.load({
//   'en-US': {
//     schedule: {
//       saveButton: 'Book',
//       cancelButton: 'Cancel',
//       deleteButton: 'Remove',
//       newEvent: 'Book a Tee-Time',
//     },
//   },
// })
//
// const Calendar = () => {
//   let scheduleObj
//   //Access the same location query from cycle details component
//   const locationQuery = useQueryClient().getQueryData('Locations')
//
//     let dropDownListObject; //to access the dropdownlist component
//   function editorTemplate(props) {
//     console.log('props', props)
//     function getFleetModel(e) {}
//     return props !== undefined ? (
//       <table className='custom-event-editor' style={{width: '100%'}} cellPadding={5}>
//         <tbody>
//           <tr>
//             <td className='e-textlabel'>Membership</td>
//             <td colSpan={4}>
//               <DropDownListComponent
//                 id='Location'
//                 placeholder='Select Membership'
//                 data-name='serviceTypeId'
//                 className='e-field'
//                 ref={(scope) => (dropDownListObject = scope)}
//                 style={{width: '100%'}}
//                 fields={{text: 'text', value: 'value'}}
//                 value={props?.Location}
//                 dataSource={[
//                   {text: 'Member', value: 'Member'},
//                   {text: 'Non-Member', value: 'Non-Member'},
//                 ]}
//               />
//             </td>
//           </tr>
// <tr>
//           <td className='e-textlabel'>Number of players</td>
//           <td colSpan={4}>
//             <DropDownListComponent
//               id='serviceTypeId'
//               placeholder='Select Number of Player'
//               data-name='serviceTypeId'
//               className='e-field'
//               ref={(scope) => (dropDownListObject = scope)}
//               style={{width: '100%'}}
//               fields={{text: 'text', value: 'value'}}
//               value={props?.serviceTypeId}
//               dataSource={[
//                 {text: '1', value: '1'},
//                 {text: '2', value: '2'},
//                 {text: '3', value: '3'},
//                 {text: '4', value: '4'},
//               ]}
//             />
//           </td>
//         </tr>
//
//           <tr>
//             <td className='e-textlabel'>Number of Holes</td>
//             <td colSpan={4}>
//               <DropDownListComponent
//                 id='serviceTypeId'
//                 placeholder='Select Number of Holes'
//                 data-name='serviceTypeId'
//                 className='e-field'
//                 ref={(scope) => (dropDownListObject = scope)}
//                 style={{width: '100%'}}
//                 fields={{text: 'text', value: 'value'}}
//                 value={props?.serviceTypeId}
//                 dataSource={[
//                   {text: '9 Holes', value: '9 Holes'},
//                   {text: '18 Holes', value: '18 Holes'},
//                 ]}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td className='e-textlabel'>Tee Time</td>
//             <td colSpan={4}>
//               <DateTimePickerComponent
//                 id='StartTime'
//                 format='dd/MM/yy hh:mm a'
//                 data-name='timeStart'
//                 value={props && props.timeStart ? new Date(props?.timeStart) : props?.StartTime}
//                 className='e-field'
//                 readonly={true}
//               ></DateTimePickerComponent>
//             </td>
//           </tr>
//           <tr className={'d-none'}>
//             <td className='e-textlabel'>To</td>
//             <td colSpan={4}>
//               <DateTimePickerComponent
//                 id='EndTime'
//                 format='dd/MM/yy hh:mm a'
//                 data-name='timeEnd'
//                 readonly={true}
//                 value={props && props.timeEnd ? new Date(props?.timeEnd) : props?.EndTime}
//                 className='e-field'
//               ></DateTimePickerComponent>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     ) : (
//       message.error('Please select an event')
//     )
//   }
//   function onActionBegin(args) {
//     if (args.requestType === 'eventCreate' && args.data.length > 0) {
//       let eventData = args.data[0];
//       let eventField = scheduleObj.eventFields;
//       let startDate = eventData[eventField.startTime];
//       let endDate = eventData[eventField.endTime];
//       args.cancel = !scheduleObj.isSlotAvailable(startDate, endDate);
//       if (args.cancel) {
//         message.error('The selected time slot is not available. Please choose another slot').then(r => r);
//       }
//     }
//   }
//
//   function onEventRendered(args) {
//     let eventData = args.data;
//     let eventField = scheduleObj.eventFields;
//     let startDate = eventData[eventField.startTime];
//     let endDate = eventData[eventField.endTime];
//     let isSlotAvailable = scheduleObj.isSlotAvailable(startDate, endDate);
//     if (!isSlotAvailable) {
//       args.element.style.borderLeftColor = '#ff4040';
//       args.element.style.borderLeftWidth = '5px';
//
//     }
//   }
//   return (
//     <div className='schedule-control-section'>
//       <div className='col-lg-12 control-section'>
//         <div className='control-wrapper'>
//           <ScheduleComponent
//               width='100%'
//               height='500px'
//               ref={t => scheduleObj = t}
//               // eventSettings={{ dataSource: data }}
//               eventRendered={onEventRendered.bind(this)}
//               id='schedule'
//               editorTemplate={editorTemplate}
//               timeScale={{enable: true, interval: 10, slotCount: 1}}
//               actionBegin={onActionBegin}
//           >
//             <ViewsDirective>
//               <ViewDirective option='Agenda' displayName='Time Booked'></ViewDirective>
//               <ViewDirective option='Day' displayName='Tee Time' startHour='6:00' endHour={'16:00'} interval={1}></ViewDirective>
//             </ViewsDirective>
//           <Inject services={[Day, Agenda]} />
//         </ScheduleComponent>
//         </div>
//       </div>
//     </div>
//   )
//
//
//
// }
// export {Calendar}

import { Card, Col, Row } from 'antd';
import axios from 'axios';
import { BASE_URL } from "../../../../../urls";
import { KTCard, KTCardBody } from "../../../../../../_metronic/helpers";
import { cellClick } from "@syncfusion/ej2-react-schedule";

// get data from api
const getData = async () => {
  const response = await axios.get(`${BASE_URL}/teeSheetDate`);
  console.log(response);
};


function clickCell(args) {
  //get cell that what click
  console.log(args);
  document.querySelector("#myTable td").forEach((td) => {
    td.addEventListener("click", (e) => {
      console.log(e.target);
    });
  });
}

const Tee = () => {

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Row gutter={[8, 8]}>
            {/*//map through the api*/}
            <Col span={12}>
              <Card title="3/25/2022" bordered={true}>
                Number of Tees: 3
              </Card>
            </Col>
            <Col span={12}>
              <Card title="3/26/2022" bordered={true}>
                Number of Tees: 4
              </Card>
            </Col>
            <Col span={12}>
              <Card title="3/25/2022" bordered={true}>
                Number of Tees: 3
              </Card>
            </Col>
            <Col span={12}>
              <Card title="3/26/2022" bordered={true}>
                Number of Tees: 4
              </Card>
            </Col>
            <Col span={12}>
              <Card title="3/25/2022" bordered={true}>
                Number of Tees: 3
              </Card>
            </Col>
            <Col span={12}>
              <Card title="3/26/2022" bordered={true}>
                Number of Tees: 4
              </Card>
            </Col>
            <Col span={12}>
              <Card title="3/25/2022" bordered={true}>
                Number of Tees: 3
              </Card>
            </Col>
            <Col span={12}>
              <Card title="3/26/2022" bordered={true}>
                Number of Tees: 4
              </Card>
            </Col>
            <Col span={12}>
              <Card title="3/25/2022" bordered={true}>
                Number of Tees: 3
              </Card>
            </Col>
            <Col span={12}>
              <Card title="3/26/2022" bordered={true}>
                Number of Tees: 4
              </Card>
            </Col>
            <Col span={12}>
              <Card title="3/25/2022" bordered={true}>
                Number of Tees: 3
              </Card>
            </Col>
            <Col span={12}>
              <Card title="3/26/2022" bordered={true}>
                Number of Tees: 4
              </Card>
            </Col>
            <Col span={12}>
              <Card title="3/25/2022" bordered={true}>
                Number of Tees: 3
              </Card>
            </Col>
            <Col span={12}>
              <Card title="3/26/2022" bordered={true}>
                Number of Tees: 4
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          <KTCard>
            <KTCardBody>
              <div className="table-responsive">
                <table className="table table-rounded table-striped border gy-7 gs-7" id={"myTable"} onClick={clickCell}>
                  <thead className="border">
                  <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                    <th className="min-w-50px"></th>
                    <th className="min-w-100px">0</th>
                    <th className="min-w-100px">10</th>
                    <th className="min-w-100px">20</th>
                    <th className="min-w-100px">30</th>
                    <th className="min-w-100px">40</th>
                    <th className="min-w-100px">50</th>
                  </tr>
                  </thead>
                  <tbody
                  className="border"
                  onc
                  >
                  <tr>
                    <th className="fw-bold fs-6 text-gray-800">6:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="fw-bold fs-6 text-gray-800">7:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="fw-bold fs-6 text-gray-800">8:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="fw-bold fs-6 text-gray-800">9:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="fw-bold fs-6 text-gray-800">10:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="fw-bold fs-6 text-gray-800">11:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="fw-bold fs-6 text-gray-800">12:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="fw-bold fs-6 text-gray-800">13:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="fw-bold fs-6 text-gray-800">14:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="fw-bold fs-6 text-gray-800">15:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th className="fw-bold fs-6 text-gray-800">16:00</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </KTCardBody>
          </KTCard>
        </Col>
      </Row>
    </div>
  );
};


export { Tee };



// import { Table, theme } from 'antd';
// import classNames from 'classnames';
// import ResizeObserver from 'rc-resize-observer';
// import { useEffect, useRef, useState } from 'react';
// import { VariableSizeGrid as Grid } from 'react-window';
// const VirtualTable = (props) => {
//   const { columns, scroll } = props;
//   const [tableWidth, setTableWidth] = useState(0);
//   const { token } = theme.useToken();
//   const widthColumnCount = columns.filter(({ width }) => !width).length;
//   const mergedColumns = columns.map((column) => {
//     if (column.width) {
//       return column;
//     }
//     return {
//       ...column,
//       width: Math.floor(tableWidth / widthColumnCount),
//     };
//   });
//   const gridRef = useRef();
//   const [connectObject] = useState(() => {
//     const obj = {};
//     Object.defineProperty(obj, 'scrollLeft', {
//       get: () => {
//         if (gridRef.current) {
//           return gridRef.current?.state?.scrollLeft;
//         }
//         return null;
//       },
//       set: (scrollLeft) => {
//         if (gridRef.current) {
//           gridRef.current.scrollTo({
//             scrollLeft,
//           });
//         }
//       },
//     });
//     return obj;
//   });
//   const resetVirtualGrid = () => {
//     gridRef.current?.resetAfterIndices({
//       columnIndex: 0,
//       shouldForceUpdate: true,
//     });
//   };
//   useEffect(() => resetVirtualGrid, [tableWidth]);
//   const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
//     ref.current = connectObject;
//     const totalHeight = rawData.length * 54;
//     return (
//       <Grid
//         ref={gridRef}
//         className="virtual-grid"
//         columnCount={mergedColumns.length}
//         columnWidth={(index) => {
//           const { width } = mergedColumns[index];
//           return totalHeight > scroll.y && index === mergedColumns.length - 1
//             ? width - scrollbarSize - 1
//             : width;
//         }}
//         height={scroll.y}
//         rowCount={rawData.length}
//         rowHeight={() => 54}
//         width={tableWidth}
//         onScroll={({ scrollLeft }) => {
//           onScroll({
//             scrollLeft,
//           });
//         }}
//       >
//         {({ columnIndex, rowIndex, style }) => (
//           <div
//             className={classNames('virtual-table-cell', {
//               'virtual-table-cell-last': columnIndex === mergedColumns.length - 1,
//             })}
//             style={{
//               ...style,
//               boxSizing: 'border-box',
//               padding: token.padding,
//               borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
//               background: token.colorBgContainer,
//             }}
//           >
//             {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
//           </div>
//         )}
//       </Grid>
//     );
//   };
//   return (
//     <ResizeObserver
//       onResize={({ width }) => {
//         setTableWidth(width);
//       }}
//     >
//       <Table
//         {...props}
//         className="virtual-table"
//         columns={mergedColumns}
//         onCell={(record, rowIndex) => ({
//           onClick: (event) => {
//             console.log("props" ,record, rowIndex, event);
//             props.onCellClick?.(record, rowIndex, event);
//             console.log("Oncell click",record, rowIndex, event);
//           },
//         })}
//         pagination={false}
//         bordered
//         components={{
//           body: renderVirtualList,
//         }}
//       />
//     </ResizeObserver>
//   );
// };
//
// // Usage
// const columns = [
//   {
//     title: ' ',
//     dataIndex: 'key',
//   },
//   {
//     title: '10',
//     dataIndex: 'key',
//   },
//   {
//     title: '20',
//     dataIndex: 'key',
//   },
//   {
//     title: '30',
//     dataIndex: 'key',
//   },
//   {
//     title: '40',
//     dataIndex: 'key',
//   },
//   {
//     title: '50',
//     dataIndex: 'key',
//   },
// ];
// const data = Array.from(
//   {
//     length: 10,
//   },
//   (_, key) => ({
//     key,
//   }),
// );
// export const Tee = () => (
//   <VirtualTable
//     columns={columns}
//     dataSource={data}
//     scroll={{
//       y: 300,
//       x: '100vw',
//     }}
//   />
// );
