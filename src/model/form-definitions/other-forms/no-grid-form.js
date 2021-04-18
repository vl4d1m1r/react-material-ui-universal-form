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
  // AUTOCOMPLETE MULTI SELECT with margin: "normal"
  favoriteNames: {
    // REQUIRED
    name: "favoriteNames",
    type: "autocompleteMs",
    label: "What is/are your favorite name/s?",
    placeholder: "Pick up your favorite name/s",
    // options: ["John", "George", "Paul", "Ringo"],
    options: [
      { id: 1, name: "Oscar" },
      { id: 2, name: "John" },
      { id: 3, name: "Robert" },
      { id: 4, name: "Michael" },
      { id: 5, name: "Peter" },
      { id: 6, name: "Parker" },
    ], // options MUST have name key among the others
    // OPTIONAL
    required: true,
    value: [],
    error: false,
    helperText: "",
    variant: "outlined", // "filled","outlined","standard"
    margin: "normal", // "dense","none","normal"
    fullWidth: true,
    size: "medium", // "medium","small"
    className: "favorite-names-multi-select-custom-class",
  },
};
