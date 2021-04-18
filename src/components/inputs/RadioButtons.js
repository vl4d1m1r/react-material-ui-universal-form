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
    <Box className={item.formData.className}>
      <FormControl component='fieldset' error={item.formData.error}>
        <FormLabel component='legend'>{item.formData.label}</FormLabel>
        <RadioGroup
          name={item.formData.name}
          value={item.formData.value}
          onChange={item.formActions.onChange}
          onBlur={item.formActions.onBlur}
        >
          {item.formData.options.map((option) => {
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
        {item.formData.helperText && (
          <FormHelperText>{item.formData.helperText}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
}

export default CheckBox;
