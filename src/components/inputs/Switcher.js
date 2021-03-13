import React from "react";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import normalize from "./normalize";

function CheckBox(props) {
  const item = normalize(props.item);
  return (
    <Box>
      <FormControlLabel
        control={
          <Switch
            name={item.data.name}
            id={item.data.name}
            checked={item.data.checked}
            onChange={item.actions.onChange}
            color={item.data.color}
            className={item.data.className}
          />
        }
        label={item.data.label}
      />
    </Box>
  );
}

export default CheckBox;
