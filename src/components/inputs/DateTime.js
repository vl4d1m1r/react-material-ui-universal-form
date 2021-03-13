import React from "react";
import TextField from "@material-ui/core/TextField";
import normalize from "./normalize";

function DateTime(props) {
  const item = normalize(props.item);
  return (
    <TextField
      id={item.data.name}
      name={item.data.name}
      type={item.data.type}
      label={item.data.label}
      required={item.data.required}
      value={item.data.value}
      error={item.data.error}
      helperText={item.data.helperText}
      onChange={item.actions.onChange}
      onBlur={item.actions.onBlur}
      variant={item.data.variant}
      margin={item.data.margin}
      fullWidth={item.data.fullWidth}
      size={item.data.size}
      className={item.data.className}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

export default DateTime;
