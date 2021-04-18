import React from "react";
// Material-UI
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
// Components
import Text from "./inputs/Text";
import Select from "./inputs/Select";
import AutocompleteMultiSelect from "./inputs/AutocompleteMultiSelect";
import DateTime from "./inputs/DateTime";
import CheckBox from "./inputs/CheckBox";
import RadioButtons from "./inputs/RadioButtons";
import SliderBar from "./inputs/SliderBar";
import Switcher from "./inputs/Switcher";
import Button from "@material-ui/core/Button";
// Hooks and definitions
import useForm from "../hooks/useForm.js";
import { formDefinition } from "../model/form-definitions/form.js";

const inputFields = {
  text: Text,
  password: Text,
  select: Select,
  autocompleteMultiSelect: AutocompleteMultiSelect,
  checkbox: CheckBox,
  switch: Switcher,
  date: DateTime,
  radio: RadioButtons,
  slider: SliderBar,
};

function LoopForm() {
  const formInitialState = JSON.parse(JSON.stringify(formDefinition));
  const { formData, setFormData, formActions } = useForm(formInitialState);

  function submitForm() {
    const { formIsValid, formDataValidated } = formActions.validateForm();
    if (formIsValid) {
      console.log("[SUBMIT FORM - FORM IS VALID] = ", formData);
      setFormData(formActions.resetForm(formDefinition));
      return;
    }
    setFormData(formDataValidated);
  }

  function resetForm() {
    setFormData(formActions.resetForm(formDefinition));
  }

  return (
    <Card style={{ width: "50%" }}>
      <CardContent>
        <form noValidate>
          <Grid container spacing={2}>
            <Typography>"Loop" Form</Typography>
            {Object.keys(formData).map((objectKey) => {
              const Input = inputFields[formData[objectKey].type];
              return (
                <Grid item key={formData[objectKey].name} xs={12}>
                  <Input
                    item={{ formData: formData[objectKey], formActions }}
                  />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <Button
                onClick={() => submitForm()}
                color='primary'
                variant='contained'
                fullWidth
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={() => resetForm()}
                color='secondary'
                variant='contained'
                fullWidth
              >
                Reset form
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoopForm;
