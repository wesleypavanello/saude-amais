import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";
import Stack from "@mui/material/Stack";

export default function SelectDatePicker({  value, onChange, error, helperText, id}) {

  return (
    <Stack direction="column" width="100%">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          id={id}
          label="Data de Nascimento"
          /*maxlength="14"*/
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField
            fullWidth
            {...params}
            variant="filled"
            error={error}
            helperText={helperText}
            />}
        />
      </LocalizationProvider>
    </Stack>
  );
}
