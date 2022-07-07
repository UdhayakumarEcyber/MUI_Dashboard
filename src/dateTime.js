import * as React from 'react';
 
//   import {Stack,TextField, AdapterDateFns, LocalizationProvider, TimePicker,  DesktopDatePicker, MobileDatePicker} from '@mui/material'; 
  
  import {Stack,TextField  } from '@mui/material'; 
  
//   import { DateTimePicker } from '@mui/x-date-pickers';

 
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';

//  import { AdapterDateFns } from '@mui/x-date-pickers'; 

//import { AdapterDateFns } from '@mui/x-date-pickers';


import { LocalizationProvider } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { MobileDatePicker } from '@mui/x-date-pickers';
 
 


export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <MobileDatePicker
          label="Date mobile"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}