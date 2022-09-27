import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Container from '@mui/material/Container';


import './listBox.css';

const ListBox = () => (
  <Container className="listBox">
    <Button variant="contained" ><AddCircleOutlineIcon /></Button>
    ListBox Component
  </Container>
);

ListBox.propTypes = {};

ListBox.defaultProps = {};

export default ListBox;
