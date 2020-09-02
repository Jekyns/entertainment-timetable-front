import { daysGrid } from '../actionTypes';

export function setDay(day) {
  return {
    type: daysGrid.SET_DAY,
    day: day,
  };
}
export function deleteEvent(event) {
  return {
    type: daysGrid.DELETE_EVENT,
    event: event,
  };
}
export function setEvents(event) {
  return {
    type: daysGrid.SET_EVENTS,
    event: event,
  };
}

export function calculateColumns(name,days) {
  return {
    type: daysGrid.CALC_COLUMNS,
    name: name,
    days: days,
  };
}

export function setGridSettings(settings) {
  return {
    type: daysGrid.SET_GRID_SETTINGS,
    settings: settings,
  }
}
