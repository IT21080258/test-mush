import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined} from '@material-ui/icons';


export default function appDrawer({children}){

    const menuItems = [
        { 
          text: 'Dashboard', 
          icon: <SubjectOutlined color="secondary" />, 
          path: '/' 
        },
        { 
          text: 'Add Users', 
          icon: <AddCircleOutlineOutlined color="secondary" />, 
          path: '/user/adduser' 
        },
        { 
            text: 'List Users', 
            icon: <AddCircleOutlineOutlined color="secondary" />, 
            path: '/user/listuser' 
        },
        { 
            text: 'Add Growshed', 
            icon: <AddCircleOutlineOutlined color="secondary" />, 
            path: '/grow/addgrowshed' 
        },
        { 
            text: 'Manage Growsheds', 
            icon: <AddCircleOutlineOutlined color="secondary" />, 
            path: '/grow/growsheds' 
        },
        { 
            text: 'Add Racks', 
            icon: <AddCircleOutlineOutlined color="secondary" />, 
            path: '/grow/addrack' 
        },
        { 
            text: 'Manage Racks', 
            icon: <AddCircleOutlineOutlined color="secondary" />, 
            path: '/grow/racks' 
        },
        { 
            text: 'Bincards', 
            icon: <AddCircleOutlineOutlined color="secondary" />, 
            path: '/grow/bincard' 
        },
        { 
            text: 'Contamination', 
            icon: <AddCircleOutlineOutlined color="secondary" />, 
            path: '/grow/contamination' 
        },
        { 
            text: 'Demand', 
            icon: <AddCircleOutlineOutlined color="secondary" />, 
            path: '/supply/demand' 
        },
      ];

    return(
        <Drawer 
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
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