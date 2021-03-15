// import * as React from "react";
// import TextField from "@material-ui/core/TextField";
// import {
//     DateRangePicker,
//     DateRangeDelimiter,
//     LocalizationProvider
//   } from "@material-ui/pickers";
//   import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";

// export default function BasicDateRangePicker() {
//     const [value, setValue] = React.useState([null, null]);
  
//     return (
//         <LocalizationProvider dateAdapter={DateFnsUtils}>
//         <DateRangePicker
//             startText="Check-in"
//             endText="Check-out"
//             value={value}
//             onChange={(newValue) => setValue(newValue)}
//             renderInput={(startProps, endProps) => (
//             <React.Fragment>
//                 <TextField {...startProps} />
//                 <DateRangeDelimiter> to </DateRangeDelimiter>
//                 <TextField {...endProps} />
//             </React.Fragment>
//             )}
//         />
//       </LocalizationProvider>
//     );
//   }