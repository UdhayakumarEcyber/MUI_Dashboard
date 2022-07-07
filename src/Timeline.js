import React from "react"; 

import { Typography } from '@mui/material'; 
  
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';

import  useStyles  from './styles';

import LightModeIcon from '@mui/icons-material/LightMode';

import EventRoundedIcon from '@mui/icons-material/EventRounded';

import LocalDiningIcon from '@mui/icons-material/LocalDining';

import LaptopMacIcon from '@mui/icons-material/LaptopMac';

import LocalHotelIcon from '@mui/icons-material/LocalHotel';

import RepeatIcon from '@mui/icons-material/Repeat';
 

export default function TimeLine() {
    
  const classes = useStyles();  
   
      return (

        <>

                <div class={classes.titleBar}> 

                        <Typography variant="h5" component="h5">
                            Time Line
                        </Typography>   
                        
                      </div>

                      <div class={classes.tableList}>    

                          <div  class={classes.widgetContent}>  

                              <div className={classes.timeLine}> 
                                                          
                              <Timeline position="alternate">

                             
                                <TimelineItem>
                                        <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                        >
                                        6:30 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot  color="secondary" variant="outlined">
                                            <LightModeIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Start New Day
                                        </Typography>
                                        <Typography>Because you need Start</Typography>
                                        </TimelineContent>
                                    </TimelineItem>


                                    <TimelineItem>
                                        <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                        >
                                        9:30 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot color="primary">
                                            <LocalDiningIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Eat
                                        </Typography>
                                        <Typography>Because you need strength</Typography>
                                        </TimelineContent>
                                    </TimelineItem>


                                    <TimelineItem>
                                        <TimelineOppositeContent
                                        sx={{ m: 'auto 0' }}
                                        variant="body2"
                                        color="text.secondary"
                                        >
                                        10:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot color="secondary"  variant="outlined">
                                            <LaptopMacIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Code
                                        </Typography>
                                        <Typography>Because it&apos;s awesome!</Typography>
                                        </TimelineContent>
                                    </TimelineItem>

                                    


                                    <TimelineItem>
                                        <TimelineOppositeContent
                                            sx={{ m: 'auto 0' }}
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                        10:00 pm
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot color="primary">
                                            <LocalHotelIcon />
                                        </TimelineDot>
                                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Sleep
                                        </Typography>
                                        <Typography>Because you need rest</Typography>
                                        </TimelineContent>
                                    </TimelineItem>


                                    <TimelineItem> 
                                        <TimelineSeparator>
                                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                        <TimelineDot color="secondary"  variant="outlined">
                                            <RepeatIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <Typography variant="h6" component="span">
                                            Repeat
                                        </Typography>
                                        <Typography>Because this is the life you love!</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                    </Timeline>


                              </div>

                          </div>
                           
                      </div>  

        </>
          
        
        );
    }