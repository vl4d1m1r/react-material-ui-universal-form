import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

function SliderBar(props) {
  const item = props.item;
  return (
    <React.Fragment>
      <Typography gutterBottom>{item.data.label}</Typography>
      <Slider
        id={item.data.name}
        name={item.data.name}
        min={item.data.min}
        max={item.data.max}
        step={item.data.step}
        value={item.data.value}
        onChange={(e, data) => item.actions.onSlide(item.data.name, data)}
        valueLabelDisplay={item.data.valueLabelDisplay}
        className={item.data.className}
      />
    </React.Fragment>
  );
}

export default SliderBar;
