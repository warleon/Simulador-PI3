import React from "react";
import PropTypes from "prop-types";
import "./calendar.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Calendar = (props) => (
  <Container>
    <Container>{props.title}</Container>
    <Grid
      container
      spacing={0.5}
      sx={{ width: 1, height: 1 }}
      columns={7}
      className="calendar"
    >
      <Grid item md={1}></Grid>
      <Grid item md={1}></Grid>
      <Grid item md={1}></Grid>
      <Grid item md={1}></Grid>
      <Grid item md={1}></Grid>
      <Grid item md={1}></Grid>
      <Grid item md={1}></Grid>
    </Grid>
  </Container>
);

Calendar.propTypes = {};

Calendar.defaultProps = {};

export default Calendar;
