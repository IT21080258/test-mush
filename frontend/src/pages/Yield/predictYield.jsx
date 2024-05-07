import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControl from "@mui/material";
import InputLabel from "@mui/material";
import Select from "@mui/material";
import Button from "@mui/material";


const PredictYield = () =>  {

    function createData(Date, growShed, tempIn, co2In, humidIn, tempOut, Co2Out, humidOut, Yield) {
        return {Date, growShed, tempIn, co2In, humidIn, tempOut, Co2Out, humidOut, Yield};
      }
      const rows = [
        createData('2024/05/05','GH1','32', '123', '135', '32', '123', '135', 500),
        createData('2024/05/05','GH1','32', '123', '135', '32', '123', '135', 500),
        createData('2024/05/05','GH2','32', '123', '135', '32', '123', '135', 500),
        
      ];
    
return(
    <Grid>
        <div>
            <Typography variant="h3">
                Yield
            </Typography><br/>
            <hr/>
        </div>
        <div>
            <form>
                
            </form>
        </div>
        <div>
            <>
            </>
        </div>
        <Grid xs={12}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{width:'100%'}}>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Grow Shed</TableCell>
                        <TableCell align="right">Temp Inside</TableCell>
                        <TableCell align="right">CO2 Inside</TableCell>
                        <TableCell align="right">Humidity Inside</TableCell>
                        <TableCell align="right">Temp Outside</TableCell>
                        <TableCell align="right">CO2 Outside</TableCell>
                        <TableCell align="right">Humidity Outside</TableCell>
                        <TableCell align="right">Yield</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.code}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >   
                            <TableCell component="th" scope="row">{row.Date}</TableCell>      
                            <TableCell align="right">{row.growShed}</TableCell>
                            <TableCell align="right">{row.tempIn}</TableCell>
                            <TableCell align="right">{row.humidIn}</TableCell>
                            <TableCell align="right">{row.co2In}</TableCell>
                            <TableCell align="right">{row.tempOut}</TableCell>
                            <TableCell align="right">{row.Co2Out}</TableCell>
                            <TableCell align="right">{row.humidOut}</TableCell>
                            <TableCell align="right">{row.Yield}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </Grid>
)
}

export default PredictYield;