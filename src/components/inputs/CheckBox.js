import React from "react";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import normalize from "./normalize";

function CheckBox(props) {
  const item = normalize(props.item);
  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            name={item.formData.name}
            id={item.formData.name}
            checked={item.formData.checked}
            onChange={item.formActions.onChange}
            color={item.formData.color}
            className={item.formData.className}
          />
        }
        label={item.formData.label}
      />
    </Box>
  );
}

export default CheckBox;
