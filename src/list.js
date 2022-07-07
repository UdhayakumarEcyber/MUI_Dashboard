import React from "react";  
import {Avatar, Typography, Card, Button, CardContent,  Box, List, Rating, ListItem, Divider, ListItemText, ListItemAvatar, InputLabel,  MenuItem,FormControl, Select, SelectChangeEvent  } from '@mui/material';
   
import  useStyles  from './styles'; 

// import MaterialUIPickers from './dateTime';
 

export default function ListCard() {
    const classes = useStyles();

    const [age, setAge] = React.useState(''); 
    const handleChange = (event: SelectChangeEvent) => { 
      setAge(event.target.value);
    };
  
    return (

        <>
        <div  class={classes.titleBar}> 
        <Typography variant="h5">
            Spaceworx Marketplace
        </Typography>

        <div  class={classes.titleBarRight}> 
           <Box sx={{ minWidth: 120, height: 10 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>  

          {/* <MaterialUIPickers/> */}


        </div>

    </div>


    <div  class={classes.widgetContent}> 
                    <Card>
                  
                    <CardContent> 

                      <List  className={classes.social_list}  sx={{ padding: '15px 0px' }}>

                        <ListItem alignItems="flex-start">
                         
                          <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://minimal-assets-api.vercel.app/assets/icons/ic_chrome.svg" />
                          </ListItemAvatar> 
                 

                            <ListItemText
                              primary="Chrome"
                              secondary={
                                <React.Fragment> 
                                  
                                  <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    Mac 
                                  </Typography>

                                  <Button variant="outlined" color="success" size="small" sx={{ marginLeft: 2 }} > Free </Button>
                                  
                                </React.Fragment>
                              }
                            /> 
                          <div className={classes.ratings}>
                              <Rating name="read-only" value={3} readOnly />
                              <Typography component="legend">53.10k reviews</Typography>
                          </div>

                    </ListItem>

                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://minimal-assets-api.vercel.app/assets/icons/ic_drive.svg" />
                      </ListItemAvatar>

                    

                    <ListItemText primary="Drive"
                      secondary={
                        <React.Fragment> 
                         
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Mac 
                        </Typography>

                        <Button variant="outlined" color="secondary" size="small" sx={{ marginLeft: 2 }} > $93.10 </Button>
                        
                      </React.Fragment>
                    }
                  /> 
                   <div className={classes.ratings}>
                       <Rating name="read-only" value={3} readOnly />
                       <Typography component="legend">53.10k reviews</Typography>
                   </div>

                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://minimal-assets-api.vercel.app/assets/icons/ic_evernote.svg" />
                  </ListItemAvatar>
 

                      <ListItemText
                        primary="Evernote"
                        secondary={
                          <React.Fragment>

                            {/* <Typography variant="h6" align="center" color="textPrimary" gutterBottom>Mac</Typography> */}
                            
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Mac 
                            </Typography>

                            <Button variant="outlined" color="success" size="small" sx={{ marginLeft: 2 }} > Free </Button>
                            
                          </React.Fragment>
                        }
                      /> 
                      <div className={classes.ratings}>
                          <Rating name="read-only" value={4} readOnly />
                          <Typography component="legend">75.2k reviews</Typography>
                      </div>

                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://minimal-assets-api.vercel.app/assets/icons/ic_dropbox.svg" />
                      </ListItemAvatar>

                    

                      <ListItemText
                        primary="Dropbox"
                        secondary={
                          <React.Fragment>

                            {/* <Typography variant="h6" align="center" color="textPrimary" gutterBottom>Mac</Typography> */}
                            
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Windows 
                            </Typography>

                            <Button variant="outlined" color="secondary" size="small" sx={{ marginLeft: 2 }} > $27.43 </Button>
                            
                          </React.Fragment>
                        }
                      /> 
                      <div className={classes.ratings}>
                          <Rating name="read-only" value={1} readOnly />
                          <Typography component="legend">153.10k reviews</Typography>
                      </div>

                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://minimal-assets-api.vercel.app/assets/icons/ic_github.svg" />
                      </ListItemAvatar>

                    

                      <ListItemText
                        primary="Github"
                        secondary={
                          <React.Fragment>
  
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Windows 
                            </Typography>

                            <Button variant="outlined" color="success" size="small" sx={{ marginLeft: 2 }} > Free </Button>
                            
                          </React.Fragment>
                        }
                      /> 
                      <div className={classes.ratings}>
                          <Rating name="read-only" value={2} readOnly />
                          <Typography component="legend">158.1k reviews</Typography>
                      </div>

                    </ListItem> 
                  </List>
                        
                        
                      </CardContent> 
                    </Card>
    </div> 
        
    </>

);
}