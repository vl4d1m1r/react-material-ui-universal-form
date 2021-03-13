import { useState } from "react";

const useForm = (initialFormDefinition) => {
  const [formData, setFormData] = useState(initialFormDefinition);

  const updateSliderValue = (name, data) => {
    setFormData((prevState) => {
      const nextState = prevState;
      nextState[name].value = data;
      return { ...nextState };
    });
  };

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

  const updateFieldValidation = (e) => {
    const { name } = e.target;
    const { error, helperText } = validateField(name);
    setFormData((prevState) => {
      const nextState = prevState;
      nextState[name].error = error;
      nextState[name].helperText = helperText;
      return { ...nextState };
    });
  };

  const validateForm = () => {
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
  };

  const validateField = (name) => {
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
  };

  const actions = {
    onChange: updateFieldValue,
    onBlur: updateFieldValidation,
    onSlide: updateSliderValue,
    validateForm,
  };

  return { formData, setFormData, actions };
};

export default useForm;
