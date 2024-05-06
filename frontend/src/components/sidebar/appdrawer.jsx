import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// import { Link } from 'react-router-dom';

const drawerWidth = 240

export default function appDrawer({children}){

    // const History  = ()=> useNavigate();

    const menuItems = [
        { 
          text: 'Dashboard', 
          path: '/dashboard' 
        },
        { 
          text: 'Add Users', 
          path: '/user/adduser' 
        },
        { 
            text: 'List Users', 
            path: '/user/listuser' 
        },
        { 
            text: 'Add Growshed', 
            path: '/grow/addgrowshed' 
        },
        { 
            text: 'Manage Growsheds', 
            path: '/grow/growsheds' 
        },
        { 
            text: 'Add Racks', 
            path: '/grow/addrack' 
        },
        { 
            text: 'Manage Racks', 
            path: '/grow/racks' 
        },
        { 
            text: 'Bincards', 
            path: '/grow/bincard' 
        },
        { 
            text: 'Contamination', 
            path: '/grow/contamination' 
        },
        { 
            text: 'Demand', 
            path: '/supply/demand' 
        },
      ];

    //   const handleMenuItemClick = (path) => {
    //     history.push(path);
    // };

    return(
        
        <Grid container spacing={2}>
        <Grid>   
        <Drawer 
        variant="permanent"
        anchor="left"
        style={{ 
            width: drawerWidth,
            display: 'flex'
         }}
        >
            
            <div style={{
                padding:'10px 10px 2px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant="h5" style={{alignItems: 'center'}}>
                    MushroomMatrix
                </Typography>
            </div>
            <List>
                {menuItems.map((item) => (
                <ListItem 
                    button 
                    key={item.text} 
                    // onClick={() => Link}
                    // className={location.pathname == item.path ? classes.active : null}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <a href={item.path}>
                    <ListItemText primary={item.text} />
                    </a>
                </ListItem>
          ))}
        </List>
        </Drawer>
        </Grid> 
        
        <Grid>            
            {children}            
        </Grid>
        </Grid>
        
        
    )        
    
}