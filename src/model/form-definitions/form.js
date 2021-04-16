export const formDefinition = {
  // ------------------- INPUT ELEMENTS -------------------

  // 1a. TEXT
  username: {
    // REQUIRED
    name: "username",
    type: "text",
    label: "Enter username (CONTAINING UPPERCASE LETTER(S))",
    // OPTIONAL
    required: true,
    pattern: "[A-Z]+",
    value: "",
    error: false,
    helperText: "",
    variant: "outlined", // "filled","outlined","standard"
    margin: "none", // "dense","none","normal"
    fullWidth: true,
    size: "medium", // "medium","small"
    className: "username-text-custom-class",
  },
  // 1b. TEXT (PASSWORD)
  password: {
    // REQUIRED
    name: "password",
    type: "password",
    label: "Enter password",
    // OPTIONAL
    required: true,
    pattern: "",
    value: "",
    error: false,
    helperText: "",
    variant: "outlined", // "filled","outlined","standard"
    margin: "none", // "dense","none","normal"
    fullWidth: true,
    size: "medium", // "medium","small"
    className: "password-text-custom-class",
  },
  // 1c. TEXT (MULTILINE)
  bio: {
    // REQUIRED
    name: "bio",
    type: "text",
    label: "Enter your short biography",
    // OPTIONAL
    required: true,
    pattern: "",
    value: "",
    error: false,
    helperText: "",
    variant: "outlined", // "filled","outlined","standard"
    margin: "none", // "dense","none","normal"
    fullWidth: true,
    size: "medium", // "medium","small"
    multiline: true,
    rows: 4,
    className: "bio-multi-text-custom-class",
  },
  // 2. RADIO
  food: {
    // REQUIRED
    name: "food",
    type: "radio",
    label: "What is your favorite food?",
    options: [
      { value: "brocoli", label: "Tasty brocoli" },
      { value: "pesto", label: "Pesto Genovese" },
      { value: "croissant", label: "Freshly baked croissant" },
    ],
    // OPTIONAL
    required: true,
    value: "",
    error: false,
    helperText: "",
    className: "food-radio-custom-class",
  },
  // 3. SELECT
  city: {
    // REQUIRED
    name: "city",
    type: "select",
    label: "Pick up your favorite city",
    options: ["New York", "Lima", "Cancun", "Belgrade", "Hamburg"],
    // OPTIONAL
    required: true,
    value: "",
    error: false,
    helperText: "",
    variant: "outlined", // "filled","outlined","standard"
    margin: "none", // "dense","none","normal"
    fullWidth: true,
    size: "medium", // "medium","small"
    className: "city-select-custom-class",
  },
  // 4. SWITCHER
  music: {
    // REQUIRED
    name: "music",
    type: "switch",
    label: "Switch the music On/Off",
    checked: false,
    // OPTIONAL
    color: "secondary", // "default","primary","secondary"
    className: "music-switch-custom-class",
  },
  // 5. DATE/TIME
  date: {
    // REQUIRED
    name: "date",
    type: "date",
    label: "Enter some date",
    // OPTIONAL
    required: true,
    value: "",
    error: false,
    helperText: "",
    variant: "outlined", // "filled","outlined","standard"
    margin: "none", // "dense","none","normal"
    fullWidth: true,
    size: "medium", // "medium","small"
    className: "date-time-custom-class",
  },
  // 6. CHECKBOX
  auth: {
    // REQUIRED
    name: "auth",
    type: "checkbox",
    label: "User is authenticated",
    checked: false,
    // OPTIONAL
    color: "secondary", // "default","primary","secondary"
    className: "auth-select-custom-class",
  },
  // 7. SLIDER
  love: {
    // REQUIRED
    name: "love",
    type: "slider",
    label: "How much you love your wife?",
    value: 50,
    min: 0,
    max: 100,
    step: 10,
    // OPTIONAL
    valueLabelDisplay: "auto", // "on","auto","off"
    className: "love-slider-custom-class",
  },

  // ------------------- NO-GRID FORM ELEMENTS -------------------
  //     SAME AS ELEMENTS ABOVE BUT WITH margin SET TO "normal"

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

  // ------------------- EXAMPLE ELEMENTS -------------------

  // SELECT with most of the optional elements omitted
  age: {
    // REQUIRED
    name: "age",
    type: "select",
    label: "How old are you?",
    options: ["<20", "21-30", "31-40", "41-50", "50>"],
    fullWidth: true,
    // OPTIONAL
    margin: "none", // "dense","none","normal"
  },
  // SELECT with most of the optional elements omitted
  color: {
    // REQUIRED
    name: "color",
    type: "select",
    label: "What is your favorite color?",
    options: ["Blue", "Green", "Yellow", "Red"],
    fullWidth: true,
    // OPTIONAL
    margin: "none", // "dense","none","normal"
  },
};
