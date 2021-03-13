import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import normalize from "./normalize";

function Select(props) {
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
      select
    >
      {item.data.options.map((option) => {
        return (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        );
      })}
    </TextField>
  );
}

export default Select;
