import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';



export default function appDrawer({children}){

    const menuItems = [
        { 
          text: 'Dashboard', 
          path: '/' 
        },
        { 
          text: 'Add Users', 
          th: '/user/adduser' 
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

    return(
        <Drawer 
        variant="permanent"
        anchor="left">
            
            <div>
                <Typography variant="h5">
                    MushroomMatrix
                </Typography>
            </div>

            <List>
                {menuItems.map((item) => (
                <ListItem 
                    button 
                    key={item.text} 
                    // onClick={() => history.push(item.path)}
                    // className={location.pathname == item.path ? classes.active : null}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItem>
          ))}
        </List>

        </Drawer>
    )        
    
}