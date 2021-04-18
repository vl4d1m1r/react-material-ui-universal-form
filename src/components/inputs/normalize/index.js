const normalize = (item) => {
  // DOES APPLY FOR ANY INPUT
  if (!item.formData.className) {
    item.formData.className = "";
  }
  // DOES APPLY FOR ALL INPUTS EXCEPT: SWITCH, CHECKBOX
  if (item.formData.type !== "switch" || item.formData.type !== "checkbox") {
    if (!item.formData.value) {
      item.formData.value = "";
    }
  }
  // DOES APPLY FOR ALL INPUTS EXCEPT: RADIO, SWITCH, CHECKBOX and SLIDER
  if (
    item.formData.type !== "radio" ||
    item.formData.type !== "switch" ||
    item.formData.type !== "checkbox" ||
    item.formData.type !== "slider"
  ) {
    if (!item.formData.variant) {
      item.formData.variant = "outlined";
    }
    if (!item.formData.margin) {
      item.formData.margin = "normal";
    }
    if (!item.formData.size) {
      item.formData.size = "medium";
    }
    if (!item.formData.multiline) {
      item.formData.multiline = false;
    }
    if (!item.formData.rows) {
      item.formData.rows = 1;
    }
  }
  // APPLY ONLY FOR: SWITCH, CHECKBOX
  if (item.formData.type === "switch" || item.formData.type === "checkbox") {
    if (!item.formData.color) {
      item.formData.color = "primary";
    }
  }
  // APPLY ONLY FOR: SLIDER
  if (item.formData.type === "slider") {
    if (!item.formData.valueLabelDisplay) {
      item.formData.valueLabelDisplay = "auto";
    }
  }
  return item;
};

export default normalize;
