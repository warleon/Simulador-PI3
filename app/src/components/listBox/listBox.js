import React from "react";
// import PropTypes from "prop-types";
import Container from "@mui/material/Container";

import "./listBox.css";

const ListBox = (props) => (
  <Container sx={{ width: 1, height: 1 }} className="listBox">
    {props.title}
    <ul>{props.children}</ul>
  </Container>
);

ListBox.propTypes = {};

ListBox.defaultProps = {};

export default ListBox;
