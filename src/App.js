import React from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';

import './App.css';
import Calendar from './components/calendar/Calendar';
import { setEvents } from './store/daysGrid/actions';

function App(props) {
  React.useEffect(() => {
    // props.setEvents();
  }, []);
  return (
    <div className="App">
      <Calendar/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    daysGrid: state.daysGrid.daysGrid,
  };
};

const mapDispatchToProps = {
  setEvents
};

const enchancer = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enchancer(App);

