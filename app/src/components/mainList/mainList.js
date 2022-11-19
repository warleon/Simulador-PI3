import React from "react";
import PropTypes from "prop-types";
import "./mainList.css";

import Grid from "@mui/material/Grid";
import List from "../list/list";

const MainList = (props) => {
  return (
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
      <List
        id={0}
        sx={{ height: 1 }}
        setLists={props.setLists}
        lists={props.lists}
        day={props.day}
      ></List>
    </Grid>
  );
};

MainList.propTypes = {};

MainList.defaultProps = {};

export default MainList;
