import React from "react";

import useForm from "../hooks/useForm.js";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
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

function StructuredForm() {
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
    <Card style={{ width: "100%" }}>
      <CardContent>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography gutterBottom>Structured Form</Typography>
            </Grid>
            <Grid item xs={12}>
              <Text item={{ data: formData["username"], actions }} />
            </Grid>
            <Grid item xs={12}>
              <Text item={{ data: formData["password"], actions }} />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Select item={{ data: formData["color"], actions }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Select item={{ data: formData["age"], actions }} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <RadioButtons item={{ data: formData["food"], actions }} />
            </Grid>
            <Grid item xs={12}>
              <Select item={{ data: formData["city"], actions }} />
            </Grid>
            <Grid item xs={12}>
              <CheckBox item={{ data: formData["auth"], actions }} />
            </Grid>
            <Grid item xs={12}>
              <DateTime item={{ data: formData["date"], actions }} />
            </Grid>
            <Grid item xs={12}>
              <SliderBar item={{ data: formData["love"], actions }} />
            </Grid>
            <Grid item xs={12}>
              <Switcher item={{ data: formData["music"], actions }} />
            </Grid>
            <Grid item xs={12}>
              <Text item={{ data: formData["bio"], actions }} />
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
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default StructuredForm;
