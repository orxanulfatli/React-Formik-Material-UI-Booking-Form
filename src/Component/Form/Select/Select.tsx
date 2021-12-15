import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { TextFieldWrapperProps } from "../TextField/TextFIeld";

const Select: React.FC<any> = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };
  const selectConfig = {
    ...field,
    ...otherProps,
    select: true,
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.error && meta.touched) {
    selectConfig.error = true;
    selectConfig.helperText = meta.error;
  }
  return (
    <TextField
      {...selectConfig}
      variant={"outlined"}
      SelectProps={{
        multiple: true,
        value: [],
      }}
    >
      {options
        ? Object.keys(options).map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {options[item]}
              </MenuItem>
            );
          })
        : null}
    </TextField>
  );
};

export default Select;
