import React, { useState } from "react";

import moment from "moment";
import DateTest from "./DateTest";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

export default function CallDate() {
    const [selectedDate, handleDateChange] = useState(moment());
    console.log('selectedDate:', selectedDate)

    return (
        <>
                <MuiPickersUtilsProvider utils={DateTest} locale="th">
                    <DatePicker
                        views={["year", "month", "date"]}
                        format="DD-MM-YYYY"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </MuiPickersUtilsProvider>
            <p>1. output form datepicker Public :: {selectedDate.format('DD/MM/YYYY')}</p>
            <p>2. output form datepicker TH :: {moment(selectedDate).add(543, 'year').format('DD/MM/YYYY')}</p>
        </>
    );
}




// import React, { useState } from "react";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import { TextField } from "@mui/material";
// import moment from "moment";

// export default function CallDate() {
//     const [selectedDate, setSelectedDate] = useState(moment());
//     console.log('selectedDate:', selectedDate)

//     return (
//         <>
//             <LocalizationProvider dateAdapter={AdapterMoment} locale="th">
//                 <DatePicker
//                     views={["year", "month", "day"]}
//                     inputFormat="DD-MM-YYYY"
//                     value={selectedDate}
//                     onChange={(newDate) => setSelectedDate(newDate)}
//                     renderInput={(params) => <TextField {...params} />}
//                 />
//             </LocalizationProvider>
//             <p>1. Output from DatePicker Public :: {selectedDate.format('DD/MM/YYYY')}</p>
//             <p>2. Output from DatePicker TH :: {moment(selectedDate).add(543, 'year').format('DD/MM/YYYY')}</p>
//         </>
//     );
// }