import React from "react";

import useForm from "../hooks/useForm.js";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Text from "./inputs/Text";
import Select from "./inputs/Select";
import DateTime from "./inputs/DateTime";
import CheckBox from "./inputs/CheckBox";
import RadioButtons from "./inputs/RadioButtons";
import SliderBar from "./inputs/SliderBar";
import Switcher from "./inputs/Switcher";
import Button from "@material-ui/core/Button";

import { formDefinition } from "../model/form-definitions/form.js";

function CustomForm() {
  const { formData, setFormData, actions } = useForm(formDefinition);

  const submitForm = () => {
    const { formIsValid, formDataValidated } = actions.validateForm();
    if (formIsValid) {
      console.log("formData = ", formData);
      return;
    }
    setFormData(formDataValidated);
  };

  return (
    <Card style={{ width: "50%" }}>
      <CardContent>
        <form noValidate>
          <Typography gutterBottom>Custom Form</Typography>
          <Text item={{ data: formData["username"], actions }} />
          <Text item={{ data: formData["password"], actions }} />
          <RadioButtons item={{ data: formData["food"], actions }} />
          <Select item={{ data: formData["city"], actions }} />
          <CheckBox item={{ data: formData["auth"], actions }} />
          <DateTime item={{ data: formData["date"], actions }} />
          <Text item={{ data: formData["bio"], actions }} />
          <SliderBar item={{ data: formData["love"], actions }} />
          <Switcher item={{ data: formData["music"], actions }} />
          <Button
            onClick={() => submitForm()}
            color='primary'
            variant='contained'
            fullWidth
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default CustomForm;
