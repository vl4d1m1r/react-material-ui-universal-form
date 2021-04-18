# Universal Form hook (with validation) written in React with Material UI

by Vladimir Jankovic

Read more about this project in my article [here](https://doctypeadventures.netlify.app/post/my-open-source-universal-form).

This is universal, customizable form with field validation written in React with Material UI library. Main features are:

- Two possible types of validation - required field and RegEx validation.
- 8 types of input fields including: Slider, Date/Time, Autocomplete multi-select and Switch fields.
- Total modularity. You can use it any way you want in your React/Material-UI projects.
- You can even loop through your form definition and display each input field with automatic validation and state-controlled value.

## Dependencies

The only dependency is Material Ui library, so you must have it (already or) installed on your project:

`npm install @material-ui/core`
`npm install @material-ui/icon`
`npm install @material-ui/lab`

## Demo Installation

This is not npm package, so you can not install it with (like) `npm install material-ui-react-universal-form`. For now, you must unpack this project to any folder, do `npm install` to install dependencies and thats it. Start the project with "npm start", and check out the demo files: `CustomForm.js`, `LoopForm.js` and `StructuredForm.js`. You can chop any part of the code and use it in your project(s) and change it at your will to better fit your custom design or code-flow.

PLEASE NOTE: You must have Node.js installed on your computer.

## Usage

There are three major parts of this universal form:

1. Input field modules, located in './components/inputs'.

2. Form hook (useForm.js) located in './hooks'.

3. Form definition(s). Demo form definition with all "unique" input fields is located in './model/form-definitions/form.js'.

As I said, this is not the npm package. Check out the demo files and use modules and hook however you like. One of the ways you can use this universal form is:

- Copy all input field modules ('./components/inputs') to your project.

- Copy form hook (useForm.js) located in './hooks' to your project.

- Make form definition.

- Use form! (Check out how to do it in the demo files: `CustomForm.js`, `LoopForm.js` and `StructuredForm.js`).

## Input types and definitions

1. TEXT

```
[name]: {
  // REQUIRED
  name: [name],
  type: "text",
  label: String,
  // OPTIONAL
  required: Boolean,
  pattern: String (RegEx),
  value: String,
  error: Boolean,
  helperText: String,
  variant: String, // "filled","outlined","standard"
  margin: String, // "dense","none","normal"
  fullWidth: Boolean,
  size: String, // "medium","small"
  multiline: Boolean,
  rows: Number,
  className: String,
}
```

2. SELECT

```
[name]: {
  // REQUIRED
  name: [name],
  type: "select",
  label: String,
  options: Array,
  // OPTIONAL
  required: Boolean,
  value: String,
  error: Boolean,
  helperText: String,
  variant: String, // "filled","outlined","standard"
  margin: String, // "dense","none","normal"
  fullWidth: Boolean,
  size: String, // "medium","small"
  className: String,
}
```

3. AUTOCOMPLETE MULTI SELECT

```
[name]: {
  // REQUIRED
  name: [name],
  type: "autocompleteMs",
  label: String,
  placeholder: String,
  options: [{name: string}], // options MUST have name key (among the others)
  // OPTIONAL
  required: Boolean,
  value: Array,
  error: Boolean,
  helperText: String,
  variant: String, // "filled","outlined","standard"
  margin: String, // "dense","none","normal"
  fullWidth: Boolean,
  size: String, // "medium","small"
  className: String,
}
```

4. RADIO

```
[name]: {
  // REQUIRED
  name: [name],
  type: "radio",
  label: String,
  options: Array,
  // OPTIONAL
  required: Boolean,
  value: String,
  error: Boolean,
  helperText: String,
  className: String,
}
```

5. SWITCH

```
[name]: {
  // REQUIRED
  name: [name],
  type: "switch",
  label: String,
  checked: Boolean,
  // OPTIONAL
  color: String, // "default","primary","secondary"
  className: String,
}
```

6. DATE/TIME

```
[name]: {
  // REQUIRED
  name: [name],
  type: "date",
  label: String,
  // OPTIONAL
  required: Boolean,
  value: String,
  error: Boolean,
  helperText: String,
  variant: String, // "filled","outlined","standard"
  margin: String, // "dense","none","normal"
  fullWidth: Boolean,
  size: String, // "medium","small"
  className: String,
}
```

7. CHECKBOX

```
[name]: {
  // REQUIRED
  name: [name],
  type: "checkbox",
  label: String,
  checked: Boolean,
  // OPTIONAL
  color: String, // "default","primary","secondary"
  className: String,
}
```

8. SLIDER

```
[name]: {
  // REQUIRED
  name: [name],
  type: "slider",
  label: String,
  value: Number,
  min: Number,
  max: Number,
  step: Number,
  // OPTIONAL
  valueLabelDisplay: String, // "on","auto","off"
  className: String,
}
```

## Copyright Information

MIT License

Copyright (c) 2021 Vladimir Jankovic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
