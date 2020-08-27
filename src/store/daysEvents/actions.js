import { daysEvents } from '../actionTypes';

export function setDay(day) {
  return {
    type: daysEvents.SET_DAY,
    day: day,
  };
}
export function deleteEvent(event) {
  return {
    type: daysEvents.DELETE_EVENT,
    event: event,
  };
}
export function setEvents(event) {
  return {
    type: daysEvents.SET_EVENTS,
    event: event,
  };
}

