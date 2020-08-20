import { daysEvents } from '../actionTypes';

export function addEvent(event) {
  return {
    type: daysEvents.SET_USER,
    event: event,
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

