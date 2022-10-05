import React from 'react';
import PropTypes from 'prop-types';
import './list.css';
import { Container } from '@mui/material';


const List = (props) => (
  <Container className="list" >
    {props.children}
  </Container>
);

List.propTypes = {};

List.defaultProps = {};

export default List;
