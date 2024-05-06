import Typography from '@mui/material/Typography';
import React from 'react';


export default function dashboard(){

    return(
        <div style={{
            display:'flex',
            border:'5px',
            padding:'3px'
        }}> 
        <Typography variant="h3">
            Dashboard
        </Typography>
        </div>
    );

}