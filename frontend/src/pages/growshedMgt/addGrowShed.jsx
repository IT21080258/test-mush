import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const AddGrowShed = () => {
    
    // const [ code,setCode ] = useState('');
    const [ condition,setCondition ] = useState('');
    // const [ enviorenment,setEnviorenment ] = useState('');
    // const [ rack,setRack ] = useState('');
    
    return(
        <Grid xs={12}>
            <FormControl variant="standard" required style={{width:'400px',margin:'10px'}}>
                <InputLabel id="condition-label">Code</InputLabel>
                <Select
                    labelId = "condition-label"
                    id="condition"
                    value={condition}
                    // onchange
                    label="condition"
                >
                    <MenuItem Value="cold">Cold</MenuItem>
                    <MenuItem Value="natural">Natural</MenuItem>
                </Select>
            </FormControl>        
        </Grid>
    )
}

export default AddGrowShed;