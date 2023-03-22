//Object to inject in the Calendar
export const localData = (dataFromApi: any) => {
  return {
    dataSource: dataFromApi,
    fields: {
      id: 'entryId',
      subject: {name: 'fleetId', default: 'No Fleet ID'},
      location: {name: 'locationId'},
      startTime: {name: 'timeStart'},
      endTime: {name: 'timeEnd'},
    },
  }
}
