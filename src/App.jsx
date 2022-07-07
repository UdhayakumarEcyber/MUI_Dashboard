import * as React from 'react';
import { Box, Drawer, CssBaseline, Toolbar, List, Typography, Divider, IconButton, ListItem, styled, useTheme, ListItemText  } from '@mui/material'; 
import MuiAppBar from '@mui/material/AppBar'; 


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'; 
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail'; 
import MenuIcon from '@material-ui/icons/Menu';  
import ListItemIcon from '@material-ui/icons/FormatListBulleted';
// import ListItemText from '@material-ui/icons/FormatColorText'; 
import ListIcon from '@material-ui/icons/List';  



import AddCardIcon from '@mui/icons-material/AddCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ComputerIcon from '@mui/icons-material/Computer'; 
import QrCodeIcon from '@mui/icons-material/QrCode';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
 
// import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
// import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
//  import DisplaySettingsIcon from '@material-ui/icons/DisplaySettings';

/***************************************************/
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'; 

// import Brightness4Icon from '@material-ui/icons/Notifications'; 
// import Brightness7Icon from '@material-ui/icons/AccountCircle'; 


/**************************************************/


  import TopBar from './TopBar';
  import TopWidget from './Top_widget';
  

import ListCard from './list';
import Barchart from './BarChart';
import PieChart from './PieChart';
import TimeLine from './Timeline';
import PhotoFrame from './PhotoFrame';
import StickyHeadTable from './StickyTable';
import DataGridPremiumDemo from './Datagrid';

//import ToggleColorModel from './dark_theme';


import  useStyles  from './styles';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AppOriginal() {

    const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', paddingRight:0 }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}  sx={{ bgcolor:"#1565c0" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton > 

          <TopBar />  

     
          
          

        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
         
 

<List >
        {[ 'Request AC Extension' ].map((text, index) => (
          <ListItem button key={text}>
            <AddCardIcon >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </AddCardIcon> 

            <ListItemText primary={text} />
          </ListItem>
        ))}
       
        {['Book A Facility'].map((text, index) => (
          <ListItem button key={text}>
            <CalendarMonthIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </CalendarMonthIcon> 

            <ListItemText primary={text} />
          </ListItem>
        ))}

        {[ 'Pending Requests' ].map((text, index) => (
          <ListItem button key={text}>
            <PendingActionsIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </PendingActionsIcon> 

            <ListItemText primary={text} />
          </ListItem>
        ))}
       
        {['Rejected Requests'].map((text, index) => (
          <ListItem button key={text}>
            <LibraryBooksIcon >
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </LibraryBooksIcon> 

            <ListItemText primary={text} />
          </ListItem>
        ))}

        {['Book A Desk'].map((text, index) => (
          <ListItem button key={text}>
            <ComputerIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ComputerIcon> 

            <ListItemText primary={text} />
          </ListItem>
        ))}

        {['Register Visitor'].map((text, index) => (
          <ListItem button key={text}>
            <WysiwygIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </WysiwygIcon> 

            <ListItemText primary={text} />
          </ListItem>
        ))}

        {['My QR Badges'].map((text, index) => (
          <ListItem button key={text}>
            <QrCodeIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </QrCodeIcon> 

            <ListItemText primary={text} />
          </ListItem>
        ))}


      </List>
         
      </Drawer>
      
      

      <Main open={open} sx={{ marginTop: '3em', width: '100%', paddingLeft:0, paddingRight:0 }}>


              <div className="topWidget">
                    <TopWidget />   
              </div>


                <div class={"widget1 " + classes.widget } >  
                    <ListCard/> 
                </div>  

                <div class={"widget2 " + classes.widget } > 
                    <Barchart />    
                </div>  

                <div class={"widget3 " + classes.widget } >  
                    <PieChart />  
                </div>  

                <div class={"widget4 " + classes.widget } >  
                      <StickyHeadTable />  
                </div> 

                <div class={"widget5 " + classes.widget } >   
                    <PhotoFrame /> 
                </div>  

                <div class={"widget6 " + classes.widget } >  
                    <TimeLine />  
                </div> 

                 <div class={"widget7 " + classes.widget } >  
                    <DataGridPremiumDemo />  
                </div>  

                
      </Main>

       

    

               


     

       

      

      

      
      


    </Box>
  );
}
