import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

function SliderBar(props) {
  const item = props.item;
  return (
    <React.Fragment>
      <Typography gutterBottom>{item.formData.label}</Typography>
      <Slider
        id={item.formData.name}
        name={item.formData.name}
        min={item.formData.min}
        max={item.formData.max}
        step={item.formData.step}
        value={item.formData.value}
        onChange={(e, value) =>
          item.formActions.onNamedChange(item.formData.name, value)
        }
        valueLabelDisplay={item.formData.valueLabelDisplay}
        className={item.formData.className}
      />
    </React.Fragment>
  );
}

export default SliderBar;
