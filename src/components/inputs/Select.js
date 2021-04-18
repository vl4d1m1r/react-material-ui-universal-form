import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import normalize from "./normalize";

function Select(props) {
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
      select
    >
      {item.formData.options.map((option) => {
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
