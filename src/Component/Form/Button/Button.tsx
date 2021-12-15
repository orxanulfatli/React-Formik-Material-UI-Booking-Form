import React from "react";
import  Button  from "@mui/material/Button/Button";
import { useFormikContext } from "formik";

const ButtonWrapper:React.FC<any> = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    // variant: "contained",
    // color: "primary",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return <Button {...configButton} variant={'contained'} color={'primary'} >{children}</Button>;
};

export default ButtonWrapper;
