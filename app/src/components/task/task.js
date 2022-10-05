import React from 'react';
import PropTypes from 'prop-types';
import './task.css';
import { Container } from '@mui/material';

const Task = (props) => (
  <Container className="task">
    <span>{props.id}</span>
    <span>{props.name}</span>
    <span>{props.date}</span>
  </Container>
);

Task.propTypes = {};

Task.defaultProps = {};

export default Task;
