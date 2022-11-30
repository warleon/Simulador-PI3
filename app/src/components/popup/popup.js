import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import './popup.css';

function Popup(props) {
    

    return(props.trigger) ? (
        <Grid className='popup'>
            <Grid className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>Cerrar</button>
                {props.children}
            </Grid>
        </Grid>
    ) : "";
}
    
export default Popup