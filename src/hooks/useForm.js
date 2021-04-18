import { useState } from "react";
const requiredHelperText = "This field is required!";
const regexHelperText = "Please enter the correct value!";

const useForm = (formDefinition) => {
  const [formData, setFormData] = useState(formDefinition);

  // Update values for: Slider and Autocomplete
  function updateNamedValue(name, value) {
    setFormData((prevState) => {
      const nextState = JSON.parse(JSON.stringify(prevState));
      nextState[name].value = value;
      return { ...nextState };
    });
  }

  // Validate fields for: Slider and Autocomplete
  function updateNamedValidation(name) {
    const { error, helperText } = validateField(name);
    setFormData((prevState) => {
      const nextState = JSON.parse(JSON.stringify(prevState));
      nextState[name].error = error;
      nextState[name].helperText = helperText;
      return { ...nextState };
    });
  }

  // Update values for event managed input fields
  function updateValue(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevState) => {
      const nextState = JSON.parse(JSON.stringify(prevState));
      if (type === "checkbox") {
        nextState[name].checked = checked;
        return { ...nextState };
      }
      nextState[name].value = value;
      return { ...nextState };
    });
  }

  // Validate event managed input fields
  function updateValidation(e) {
    const { name } = e.target;
    const { error, helperText } = validateField(name);
    setFormData((prevState) => {
      const nextState = JSON.parse(JSON.stringify(prevState));
      nextState[name].error = error;
      nextState[name].helperText = helperText;
      return { ...nextState };
    });
  }

  // Validate whole form
  function validateForm() {
    let formIsValid = true;
    const names = Object.keys(formData).map((name) => {
      return name;
    });
    const formDataValidated = names.reduce((accumulator, name) => {
      accumulator[name] = formData[name];
      const { error, helperText } = validateField(name);
      accumulator[name].error = error;
      accumulator[name].helperText = helperText;
      if (error) {
        formIsValid = false;
      }
      return accumulator;
    }, {});
    return { formIsValid, formDataValidated };
  }

  // Validate single input field
  function validateField(name) {
    const isFieldRequired = formData[name].required;
    const isFieldEmpty =
      formData[name].value === "" ||
      formData[name].value === 0 ||
      formData[name].value.length === 0;
    let patternMatched = true;
    if (formData[name].pattern) {
      patternMatched = formData[name].value.match(formData[name].pattern);
    }
    if (isFieldRequired && isFieldEmpty) {
      return { error: true, helperText: requiredHelperText };
    }
    if (!patternMatched) {
      return { error: true, helperText: regexHelperText };
    }
    return { error: false, helperText: "" };
  }

  function resetForm(initialFormState) {
    return JSON.parse(JSON.stringify(initialFormState));
  }

  const formActions = {
    onChange: updateValue,
    onNamedChange: updateNamedValue,
    onBlur: updateValidation,
    onNamedBlur: updateNamedValidation,
    validateForm,
    resetForm,
  };

  return { formData, setFormData, formActions };
};

export default useForm;
