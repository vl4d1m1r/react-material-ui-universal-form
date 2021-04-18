export const formDefinition = {
  // ------------------- NO-GRID FORM ELEMENTS -------------------
  //   SAME AS STANDARD ELEMENTS BUT WITH margin SET TO "normal"

  // TEXT with margin: "normal"
  nickname: {
    // REQUIRED
    name: "nickname",
    type: "text",
    label: "Enter your nickname",
    // OPTIONAL
    required: true,
    pattern: "",
    value: "",
    error: false,
    helperText: "",
    variant: "outlined", // "filled","outlined","standard"
    margin: "normal", // "dense","none","normal"
    fullWidth: true,
    size: "medium", // "medium","small"
    className: "nickname-text-custom-class",
  },
  // TEXT with margin: "normal"
  pet: {
    // REQUIRED
    name: "pet",
    type: "text",
    label: "What is your pet?",
    // OPTIONAL
    required: true,
    pattern: "",
    value: "",
    error: false,
    helperText: "",
    variant: "outlined", // "filled","outlined","standard"
    margin: "normal", // "dense","none","normal"
    fullWidth: true,
    size: "medium", // "medium","small"
    className: "pet-text-custom-class",
  },
  // SELECT with margin: "normal"
  height: {
    // REQUIRED
    name: "height",
    type: "select",
    label: "What is your height?",
    options: ["<150", "151-170", "171-190", "191-210", "211>"],
    // OPTIONAL
    required: true,
    value: "",
    error: false,
    helperText: "",
    variant: "outlined", // "filled","outlined","standard"
    margin: "normal", // "dense","none","normal"
    fullWidth: true,
    size: "medium", // "medium","small"
    className: "height-select-custom-class",
  },
};
