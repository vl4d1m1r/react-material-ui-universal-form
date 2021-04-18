import React from "react";
// Material-UI
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
// Components
import Text from "./inputs/Text";
import Select from "./inputs/Select";
import AutocompleteMs from "./inputs/AutocompleteMs";
import Button from "@material-ui/core/Button";
// Hooks and definitions
import useForm from "../hooks/useForm.js";
import { formDefinition } from "../model/form-definitions/other-forms/no-grid-form.js";

function NoGridForm() {
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
        {formData && (
          <form noValidate>
            <Typography>
              No-grid Form (you need to set the margin of the elements to
              normal).
            </Typography>
            <Text item={{ formData: formData["nickname"], formActions }} />
            <Select item={{ formData: formData["height"], formActions }} />
            <Text item={{ formData: formData["pet"], formActions }} />
            <AutocompleteMs
              item={{ formData: formData["favoriteNames"], formActions }}
            />
            <Box mt={2}>
              <Button
                onClick={() => submitForm()}
                color='primary'
                variant='contained'
                fullWidth
              >
                Submit
              </Button>
            </Box>
            <Box mt={2}>
              <Button
                onClick={() => resetForm()}
                color='secondary'
                variant='contained'
                fullWidth
              >
                Reset form
              </Button>
            </Box>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

export default NoGridForm;
