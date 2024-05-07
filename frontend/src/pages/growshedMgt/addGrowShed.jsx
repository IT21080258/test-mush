import { FormControl, Grid, InputLabel, MenuItem, Select, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import TextField from '@mui/material/TextField';


const AddGrowShed = () => {
    
    const [ code,setCode ] = useState('');
    const [ condition,setCondition ] = useState('');
    const [ status,setStatus ] = useState('');
    // const [ rack,setRack ] = useState('');
    
    return(
        <Grid >
            <Typography variant="h3">
                Add Growsheds
            </Typography><br/>
            <hr/>
            <form noValidate autoComplete="off">
            
            <TextField 
                onChange={(e) => setCode(e.target.value)}
                label="Growshed Code" 
                variant="outlined" 
                color="secondary" 
                fullWidth
                required
                style={{margin: '8px 0px 0px'}}
            />
            <FormControl variant="standard" required style={{width:'400px',margin:'10px'}}>
                <InputLabel id="condition-label">Condition</InputLabel>
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
            </FormControl><br/>
            <FormControl variant="standard" required style={{width:'400px',margin:'10px'}}>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                    labelId = "status-label"
                    id="status"
                    value={status}
                    // onchange
                    label="status"
                >
                    <MenuItem Value="available">Available</MenuItem>
                    <MenuItem Value="full">Full</MenuItem>
                    <MenuItem Value="partial">Partial</MenuItem>
                </Select>
            </FormControl>
            <TextField 
                    onChange={(e) => setCode(e.target.value)}
                    label="Number of racks" 
                    variant="outlined" 
                    color="secondary" 
                    fullWidth
                    required
                    style={{margin: '8px 0px 0px'}}
            />
            <br/><br/>
            <Button variant="contained" style={{Margin:'30px 0px 0px',
                                                width: '400px'                        
                                                                        }}>
            Submit
            </Button>
            </form>        
        </Grid>
    )
}

export default AddGrowShed;