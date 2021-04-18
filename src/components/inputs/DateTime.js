import React from "react";
import TextField from "@material-ui/core/TextField";
import normalize from "./normalize";

function DateTime(props) {
  const item = normalize(props.item);
  return (
    <TextField
      id={item.formData.name}
      name={item.formData.name}
      type={item.formData.type}
      label={item.formData.label}
      required={item.formData.required}
      value={item.formData.value}
      error={item.formData.error}
      helperText={item.formData.helperText}
      onChange={item.formActions.onChange}
      onBlur={item.formActions.onBlur}
      variant={item.formData.variant}
      margin={item.formData.margin}
      fullWidth={item.formData.fullWidth}
      size={item.formData.size}
      className={item.formData.className}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

export default DateTime;
