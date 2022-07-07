import React from "react"; 

import { Typography, Paper, Button, Box, Grid } from '@mui/material';
import  useStyles  from './styles';

import { ArgumentAxis, ValueAxis, Chart, BarSeries } from '@devexpress/dx-react-chart-material-ui';

import LongMenu from './longmenu';

import { styled } from '@mui/material/styles';
  
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';

 
const Input = styled(MuiInput)`
  width: 42px;
`;


export default function TopWidget() {

    const classes = useStyles();

    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
        setValue(0);
        } else if (value > 100) {
        setValue(100);
        }
    };

  
const list = [
    {
        id: 'a',
        name: 'Revenue Content', 
        icon : "./images/revenue.png",
        count : '$36k',
        sub_parcent :'10.23' 
    },
    {
        id: 'b',
        name: 'Repeat Purchase', 
        icon : "./images/purchase.png",
        count : '$13k',
        sub_parcent :'10.23'
    },
    {
        id: 'c',
        name: 'Average Order', 
        icon : "./images/shopping-bag.png",
        count : '$42k',
        sub_parcent :'10.23'
    },
    {
        id: 'd',
        name: 'New Customers', 
        icon : "./images/customer.png",
        count : '$689',
        sub_parcent :'10.23'
    },
  ];
  
      return (
            <>

                <div className="topwidget_lft">
                    <div className="widget"> 
                        <div className='widget_lft'>
                            <h2>Congratulations Watson!</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                            <h1>$42.8k</h1>

                            {/* <Button variant="contained">Contained</Button> */}



                            <Box sx={{ width: 250 }}>
                                
                                <Grid container spacing={2} alignItems="center">
                                     
                                    <Grid item xs>
                                    <Slider
                                        value={typeof value === 'number' ? value : 0}
                                        onChange={handleSliderChange}
                                        aria-labelledby="input-slider"
                                    />
                                    </Grid>
                                    <Grid item>
                                    <Input
                                        value={value}
                                        size="small"
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        inputProps={{
                                        step: 10,
                                        min: 0,
                                        max: 100,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                        }}
                                    />
                                    </Grid>
                                </Grid>
                                </Box>


                        </div>  
                        <div className='widget_rgt'>
                            <div className="trophy"></div>
                        </div>
                    </div>
                </div>
                <div className="topwidget_rgt">   
                                
                                {list.map((item) => (
                                    <div key={item.id} className="widget"> 
                                        <div className='widget_lft'>
                                            <div className="icon"><img src={item.icon}></img></div>
                                            <p>{item.name}</p>
                                            <h3>{item.count}</h3>
                                        </div>  
                                        <div className='widget_rgt'>
                                            <p>  +{item.sub_parcent}%</p> 
                                        </div>
                                    </div>
                                ))}  
                        
                </div> 
            </>
                
      );
}