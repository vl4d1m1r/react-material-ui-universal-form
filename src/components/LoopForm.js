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

const inputFields = {
  text: Text,
  password: Text,
  select: Select,
  checkbox: CheckBox,
  switch: Switcher,
  date: DateTime,
  radio: RadioButtons,
  slider: SliderBar,
};

function LoopForm() {
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
          <Typography gutterBottom>"Loop" Form</Typography>
          {Object.keys(formData).map((objectKey) => {
            const Input = inputFields[formData[objectKey].type];
            return (
              <Input
                key={formData[objectKey].name}
                item={{ data: formData[objectKey], actions }}
              />
            );
          })}
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

export default LoopForm;
