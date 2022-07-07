import React from "react"; 

import { Typography, Paper } from '@mui/material';
  
import  useStyles  from './styles';

import { Chart, PieSeries } from '@devexpress/dx-react-chart-material-ui';

//  import MaxHeightMenu from './max_height';
  import LongMenu from './longmenu';

  

export default function PieChart() {

  const classes = useStyles();

    const piedata = [
        { argument:'Monday', value:10 },
        { argument:'Tuesday', value:40 },
        { argument:'Wednesday', value:10 },
        { argument:'Thursday', value:20 },
        { argument:'Friday', value:20 },
      ];
      return (
<>
        <div  class={classes.titleBar}> 
        <Typography variant="h5">
            Pie Chart
        </Typography>

        <div  class={classes.titleBarRight}> 
                {/* <MaxHeightMenu />   */}

                <LongMenu />  

                 
            </div>

      </div>

      <div class={classes.tableList}>  


          <div class={classes.widgetContent}> 

              {/* <Container maxWidth="sm"> */}

              <Paper sx={{boxShadow:"none", height:"100%"}}>
              <Chart
                data={piedata} sx={{ innerHeight : "100%"}}
              >
                <PieSeries valueField="value" argumentField="argument" /> 
                {/* <Legend /> */}
              </Chart>
            </Paper>

              {/* </Container> */}
          </div>
      </div>  
        </> 
        );
    }