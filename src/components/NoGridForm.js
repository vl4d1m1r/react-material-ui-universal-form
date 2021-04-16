import React from "react";

import useForm from "../hooks/useForm.js";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Text from "./inputs/Text";
import Select from "./inputs/Select";
import Button from "@material-ui/core/Button";

import { formDefinition } from "../model/form-definitions/form.js";

function NoGridForm() {
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
          <Typography>
            No-grid Form (you need to set the margin of the elements to normal).
          </Typography>
          <Text item={{ data: formData["nickname"], actions }} />
          <Select item={{ data: formData["height"], actions }} />
          <Text item={{ data: formData["pet"], actions }} />
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
        </form>
      </CardContent>
    </Card>
  );
}

export default NoGridForm;
