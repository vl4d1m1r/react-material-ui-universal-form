import React from "react";
// Material-UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// Components
import Text from "./inputs/Text";
import Select from "./inputs/Select";
import AutocompleteMs from "./inputs/AutocompleteMs";
import DateTime from "./inputs/DateTime";
import CheckBox from "./inputs/CheckBox";
import RadioButtons from "./inputs/RadioButtons";
import SliderBar from "./inputs/SliderBar";
import Switcher from "./inputs/Switcher";
import Button from "@material-ui/core/Button";
// Hooks and definitions
import useForm from "../hooks/useForm.js";
import { formDefinition } from "../model/form-definitions/form.js";

function StructuredForm() {
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
    <Card style={{ width: "100%" }}>
      <CardContent>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography gutterBottom>Custom Form</Typography>
            </Grid>
            <Grid item xs={12}>
              <Text item={{ formData: formData["username"], formActions }} />
            </Grid>
            <Grid item xs={12}>
              <AutocompleteMs
                item={{ formData: formData["favoriteAnimals"], formActions }}
              />
            </Grid>
            <Grid item xs={12}>
              <Text item={{ formData: formData["password"], formActions }} />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Select item={{ formData: formData["color"], formActions }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Select item={{ formData: formData["age"], formActions }} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <RadioButtons
                item={{ formData: formData["food"], formActions }}
              />
            </Grid>
            <Grid item xs={12}>
              <Select item={{ formData: formData["city"], formActions }} />
            </Grid>
            <Grid item xs={12}>
              <CheckBox item={{ formData: formData["auth"], formActions }} />
            </Grid>
            <Grid item xs={12}>
              <DateTime item={{ formData: formData["date"], formActions }} />
            </Grid>
            <Grid item xs={12}>
              <SliderBar item={{ formData: formData["love"], formActions }} />
            </Grid>
            <Grid item xs={12}>
              <Switcher item={{ formData: formData["music"], formActions }} />
            </Grid>
            <Grid item xs={12}>
              <Text item={{ formData: formData["bio"], formActions }} />
            </Grid>
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

export default StructuredForm;
