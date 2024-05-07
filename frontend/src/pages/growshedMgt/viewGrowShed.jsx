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


const ViewGrowShed = () =>  {

    function createData(code, condition, enviorenment, racks) {
        return { code, condition, enviorenment, racks };
      }
      const rows = [
        createData('GH1', 'Full', 'Cold', 10),
        createData('TH1', 'Full','Cold', 10),
        createData('GH2', 'Empty','Natural', 15),
        createData('GH3', 'Full','Natural', 15),
        createData('TH2', 'Partial','Cold', 10),
      ];
    
return(
    <Grid>
        <div>
            <Typography variant="h3">
                Growsheds
            </Typography><br/>
            <hr/>
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
                        <TableCell align="right">Code</TableCell>
                        <TableCell align="right">Condition</TableCell>
                        <TableCell align="right">Enviorenmrnt</TableCell>
                        <TableCell align="right">No. of racks(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.code}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >   
                            <TableCell component="th" scope="row">{row.code}</TableCell>      
                            <TableCell align="right">{row.condition}</TableCell>
                            <TableCell align="right">{row.enviorenment}</TableCell>
                            <TableCell align="right">{row.racks}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </Grid>
)
}

export default ViewGrowShed;