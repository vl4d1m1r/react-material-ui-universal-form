import { useState } from "react";

const useForm = (formDefinition) => {
  const [formData, setFormData] = useState(formDefinition);

  function updateSliderValue(name, data) {
    setFormData((prevState) => {
      const nextState = prevState;
      nextState[name].value = data;
      return { ...nextState };
    });
  }

  function updateFieldValue(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevState) => {
      const nextState = prevState;
      if (type === "checkbox") {
        nextState[name].checked = checked;
        return { ...nextState };
      }
      nextState[name].value = value;
      return { ...nextState };
    });
  }

  function updateFieldValidation(e) {
    const { name } = e.target;
    const { error, helperText } = validateField(name);
    setFormData((prevState) => {
      const nextState = prevState;
      nextState[name].error = error;
      nextState[name].helperText = helperText;
      return { ...nextState };
    });
  }

  function validateForm() {
    let formIsValid = true;
    const keys = Object.keys(formData).map((objectKey) => {
      return objectKey;
    });
    const formDataValidated = keys.reduce((accumulator, key) => {
      accumulator[key] = formData[key];
      const { error, helperText } = validateField(key);
      accumulator[key].error = error;
      accumulator[key].helperText = helperText;
      if (error) {
        formIsValid = false;
      }
      return accumulator;
    }, {});
    return { formIsValid, formDataValidated };
  }

  function validateField(name) {
    const isFieldRequired = formData[name].required;
    const isFieldEmpty = formData[name].value === "";
    let patternMatched = true;
    if (formData[name].pattern) {
      patternMatched = formData[name].value.match(formData[name].pattern);
    }
    if (isFieldRequired && isFieldEmpty) {
      return { error: true, helperText: "This field is required!" };
    }
    if (!patternMatched) {
      return { error: true, helperText: "Please enter the correct value!" };
    }
    return { error: false, helperText: "" };
  }

  function resetForm(initialFormState) {
    return JSON.parse(JSON.stringify(initialFormState));
  }

  const formActions = {
    onChange: updateFieldValue,
    onBlur: updateFieldValidation,
    onSlide: updateSliderValue,
    validateForm,
    resetForm,
  };

  return { formData, setFormData, formActions };
};

export default useForm;
