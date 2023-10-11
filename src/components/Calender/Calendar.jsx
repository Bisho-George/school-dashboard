import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
<<<<<<< HEAD

export default function DateCalendarValue() {
=======
export default function DateCalendarValue({ calenderBackgColor, buttonBackgColor ,borderStyle, selectedDateColor }) {
>>>>>>> Blog-page
  const [value, setValue] = React.useState(dayjs('2023-10-11'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer  sx={{
        '& .MuiDateCalendar-root': { bgcolor: calenderBackgColor },
        '& .MuiTouchRipple-root ': {display: 'none'},
        '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected': {color: selectedDateColor},
        '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected:focus': {color: selectedDateColor},
        "& .MuiPickersDay-root.Mui-selected": {
            bgcolor: buttonBackgColor,
            border: borderStyle,
        },
      }} components={['DateCalendar']}>
        <DemoItem>
          <DateCalendar sx={{}} value={value} onChange={(newValue) => setValue(newValue)} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}