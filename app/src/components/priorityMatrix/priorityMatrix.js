import React from "react";
import PropTypes from "prop-types";
import "./priorityMatrix.css";
import Grid from "@mui/material/Grid";
import List from "../list/list";

const PriorityMatrix = () => (
  <Grid
    item
    container
    md={9}
    direction="column"
    sx={{ height: 1, minHeight: 1 }}
  >
    <Grid container sx={{ height: 4 / 100 }}>
      <Grid item className="hiddenHorizontal">
        
      </Grid>
      <Grid
        item
        className="div-horizontal"
        sx={{ width: 45 / 100, height: 1 }}
        md={true}
      >
        IMPORTANTE
      </Grid>
      <Grid
        item
        className="div-horizontal"
        sx={{ width: 45 / 100, height: 1}}
        md={true}
      >
        NO IMPORTANTE
      </Grid>
    </Grid>
    <Grid container sx={{ height: 48 / 100 }}>
      <Grid item className="div-vertical" sx={{ height: 1}}>
        URGENTE
      </Grid>
      <Grid item className="primero" sx={{ height: 1 }} md={true}>
        <List id={1}></List>
      </Grid>
      <Grid item className="segundo" sx={{ height: 1}} md={true}>
        <List id={2}></List>
      </Grid>
    </Grid>
    <Grid container sx={{ height: 48 / 100 }}>
      <Grid item className="div-vertical" sx={{ height: 1}}>
        NO URGENTE
      </Grid>
      <Grid item className="tercero" sx={{ height: 1}} md={true}>
        <List id={3}></List>
      </Grid>
      <Grid item className="cuarto" sx={{ height: 1 }} md={true}>
        <List id={4}></List>
      </Grid>
    </Grid>
  </Grid>
);

PriorityMatrix.propTypes = {};

PriorityMatrix.defaultProps = {};

export default PriorityMatrix;
