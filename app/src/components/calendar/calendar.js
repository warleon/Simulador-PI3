import React from 'react';
import PropTypes from 'prop-types';
import './calendar.css';
import Container from '@mui/material/Container';

const Calendar = () => (
  <Container sx={{ width: 1, height: 1 }} className="calendar">
    Calendar Component
  </Container>
);

Calendar.propTypes = {};

Calendar.defaultProps = {};

export default Calendar;
