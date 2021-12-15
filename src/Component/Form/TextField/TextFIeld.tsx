import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { FieldHookConfig, useField } from "formik";

interface UseFieldHookType {
    name?: "string"
    options?: any
    label?: string
    id?:string
}
export type TextFieldWrapperProps = FieldHookConfig<UseFieldHookType> & TextFieldProps;

const TextFieldWrapper: React.FC<TextFieldWrapperProps> = ({name,...otherProps}) => {
    const [field,meta] =useField(name)
    
    const textFieldConfig = {
        ...field,
        ...otherProps,
        fullWidth: true,

    };


   

    if(meta&&meta.error&&meta.touched){
        textFieldConfig.error=true
        textFieldConfig.helperText= meta.error 
    }

    return <TextField {...textFieldConfig} variant='outlined'  />;
};

export default TextFieldWrapper;
