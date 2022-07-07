import React from "react"; 

import { Typography, Paper } from '@mui/material';
import  useStyles  from './styles';

import { ArgumentAxis, ValueAxis, Chart, BarSeries } from '@devexpress/dx-react-chart-material-ui';

import LongMenu from './longmenu';

export default function Barchart() {

    const classes = useStyles();

    const bardata = [
        { argument: 'Monday', value: 30 },
        { argument: 'Tuesday', value: 20 },
        { argument: 'Wednesday', value: 10 },
        { argument: 'Thursday', value: 50 },
        { argument: 'Friday', value: 60 },
      ];
      return (
<>
        <div  class={classes.titleBar}> 
                        <Typography variant="h5">
                            Bar Chart
                        </Typography>
 
                          <div  class={classes.titleBarRight}> 
                            <LongMenu /> 
                          </div>

                      </div>

                      <div class={classes.barChart}>  

                            <div  class={classes.widgetContent}> 

                                {/* <Container maxWidth="sm"> */}

                                <Paper>
                                    <Chart  sx={{
                                        height: '100%' 
                                    }}
                                        data={bardata}
                                    >
                                        <ArgumentAxis />
                                        <ValueAxis />
                                    
                                        <BarSeries valueField="value" argumentField="argument" />
                                    </Chart>
                                    </Paper>

                                {/* </Container> */}
                            </div>  
                      </div> 
</>
         
      );
}