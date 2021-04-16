import React from "react";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import normalize from "./normalize";

function CheckBox(props) {
  const item = normalize(props.item);
  return (
    <Box className={item.data.className}>
      <FormControl component='fieldset' error={item.data.error}>
        <FormLabel component='legend'>{item.data.label}</FormLabel>
        <RadioGroup
          name={item.data.name}
          value={item.data.value}
          onChange={item.actions.onChange}
          onBlur={item.actions.onBlur}
        >
          {item.data.options.map((option) => {
            return (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            );
          })}
        </RadioGroup>
        {item.data.helperText && (
          <FormHelperText>{item.data.helperText}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
}

export default CheckBox;
