import React from 'react'
import { TextField } from "@mui/material"
import {useField} from "formik"

const DatePicker: React.FC<any> = ({ name, ...otherprops }) => {
    const[field,meta] = useField(name)
    const configDatePicker = {
        ...field,
        ...otherprops,
        type: 'date',
        fullWidth:true,
        variant: 'outlined',
        InputLabelProps: {
            shrink:true
        }
    }
    if (meta && meta.error && meta.touched) {
        configDatePicker.error = true
        configDatePicker.helperText =meta.error
    }
    return (
      <>
        <TextField {...configDatePicker} />
      </>
    );
}

export default DatePicker
