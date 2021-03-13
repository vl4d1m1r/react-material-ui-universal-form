const normalize = (item) => {
  // DOES APPLY FOR ANY INPUT
  if (!item.data.className) {
    item.data.className = "";
  }
  // DOES APPLY FOR ALL INPUTS EXCEPT: SWITCH, CHECKBOX
  if (item.data.type !== "switch" || item.data.type !== "checkbox") {
    if (!item.data.value) {
      item.data.value = "";
    }
  }
  // DOES APPLY FOR ALL INPUTS EXCEPT: RADIO, SWITCH, CHECKBOX and SLIDER
  if (
    item.data.type !== "radio" ||
    item.data.type !== "switch" ||
    item.data.type !== "checkbox" ||
    item.data.type !== "slider"
  ) {
    if (!item.data.variant) {
      item.data.variant = "outlined";
    }
    if (!item.data.margin) {
      item.data.margin = "normal";
    }
    if (!item.data.size) {
      item.data.size = "medium";
    }
    if (!item.data.multiline) {
      item.data.multiline = false;
    }
    if (!item.data.rows) {
      item.data.rows = 1;
    }
  }
  // APPLY ONLY FOR: SWITCH, CHECKBOX
  if (item.data.type === "switch" || item.data.type === "checkbox") {
    if (!item.data.color) {
      item.data.color = "primary";
    }
  }
  // APPLY ONLY FOR: SLIDER
  if (item.data.type === "slider") {
    if (!item.data.valueLabelDisplay) {
      item.data.valueLabelDisplay = "auto";
    }
  }
  return item;
};

export default normalize;
