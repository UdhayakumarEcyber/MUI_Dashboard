import React from "react"; 
// import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, ButtonGroup, Button, makeStyles } from '@mui/material';
  
//  import { MakeStyles } from '@material-ui/core';

//  const useStyles = MakeStyles((theme) => ({
//     container : {
//         backgroundColor: theme.palettebackground.paper,
//         padding :theme.spacing(8, 0, 6)
//     }
//  })); 

 import {   AppBar,CssBaseline  } from '@mui/material'; 
  
import  useStyles  from './styles';

// import { ResponsiveBar } from '@nivo/bar'
// import { ResponsivePie } from '@nivo/pie'  
  
  
// import LongMenu from './longmenu'; 

import TopBar from './TopBar';
import ListCard from './list';
import Barchart from './BarChart';
import PieChart from './PieChart';
import TimeLine from './Timeline';
import PhotoFrame from './PhotoFrame';
import StickyHeadTable from './StickyTable'; 
// import DisableFilteringGridSomeColumns from './tableDataFilter'; 
import AppOriginal from './App_original'; 

const App = () => { 
  const classes = useStyles(); 
  
 
  
 
    return (
        <>
            <CssBaseline />

                <AppBar position ="relative"  class={classes.topBar}>
                    <TopBar /> 
                </AppBar>

            <main>
 
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

                {/* <div class={"widget7 " + classes.widget } >  
                    <DisableFilteringGridSomeColumns />  
                </div> */}


                <div class={"widget8 " + classes.widget } >  
                    <AppOriginal />  
                </div>



                
                  

            </main>
 
           

 
        </>
    );
}

export default App;