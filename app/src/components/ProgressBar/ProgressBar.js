import { useEffect, useState } from "react";
import "./ProgressBar.css"
import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";



export default function ProgressBar({percent = '0%'}){
    return <Grid className="outer-container">
        <Grid className="inner-container" style={{'--width': percent}}>
            {percent} 
        </Grid>
    </Grid>;
}