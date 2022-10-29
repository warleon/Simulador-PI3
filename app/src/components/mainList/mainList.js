import React from "react";
import PropTypes from "prop-types";
import "./mainList.css";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "../list/list";

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
const items = [...Array(10).keys()].map((_, i) => ({
  id: i,
  name: "curso " + i,
  date: randomDate(new Date("2022/07/10"), new Date("2022/10/29")),
  color: "red",
}));

const MainList = () => (
  <Grid
    item
    className="cursos"
    md={3}
    sx={{
      width: 1,
      height: 1,
      minHeight: 1,
      border: 1,
    }}
  >
    <List id={0} sx={{ height: 1 }}>
      {items}
    </List>
  </Grid>
);

MainList.propTypes = {};

MainList.defaultProps = {};

export default MainList;
