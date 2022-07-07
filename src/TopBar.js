import React from "react"; 

import { Typography,    Toolbar, Button, Avatar, Box, List, ListItem, ListItemText, Badge, AvatarGroup, IconButton, Drawer,  createTheme, ThemeProvider, useTheme  } from '@mui/material';
   
import  useStyles  from './styles';

// import { Typography, AppBar,CssBaseline,  Toolbar, Button, Avatar, Box, List, ListItem, ListItemText, Badge, AvatarGroup, IconButton, Drawer,  createTheme, ThemeProvider, useTheme  } from '@mui/material';
   
import ListIcon from '@material-ui/icons/List';  
import InboxIcon from '@material-ui/icons/MoveToInbox';  
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';  
import MailIcon from '@material-ui/icons/Mail'; 
import NotificationsIcon from '@material-ui/icons/Notifications'; 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';  

  
  

export default function TopBar() {
 

const classes = useStyles();
    
type Anchor =  'left' ; 

 

const [state, setState] = React.useState({ 
    left: false 
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event).key === 'Tab' ||
          (event).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (

    // sx={{ bgcolor: 'secondary.main', marginLeft: '300px' }}
    <Box  
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
       >
      <List >
        {['Book A Facility', 'Request AC Extension', 'Pending Requests', 'Rejected Requests', 'Book A Desk', 'Register Visitor', 'My QR Badges'].map((text, index) => (
          <ListItem button key={text}>
            <ListIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListIcon>
 

            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </Box>
  );
 
 
   
      return (  

            <> 
                                        
                <Toolbar class={classes.topBar} >  

                    <Typography variant="h6" >
                        MUI Sample dashboard
                    </Typography>


                <div class={classes.social_iconlist}>   

                    <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                    </AvatarGroup> 


                    <div class={classes.notification_list}>  
                        <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                        >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                        </IconButton>
                        
                        <Badge color="secondary" badgeContent={100}>
                        <MailIcon /> 
                        </Badge>

                        <Badge color="primary">
                            <AccountCircleIcon />
                        </Badge>
                    </div>

                </div>  


                </Toolbar> 
 

            </> 
        
        );
    }