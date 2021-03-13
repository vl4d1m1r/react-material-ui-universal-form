import React from "react";
import TextField from "@material-ui/core/TextField";
import normalize from "./normalize";

function Text(props) {
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
      multiline={item.data.multiline}
      rows={item.data.rows}
      className={item.data.className}
    />
  );
}

export default Text;
