/* eslint-disable no-use-before-define */

import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import normalize from "./normalize";

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

function AutocompleteMs(props) {
  const item = normalize(props.item);

  return (
    <Autocomplete
      multiple
      id={item.formData.name}
      name={item.formData.name}
      value={item.formData.value}
      options={item.formData.options}
      className={item.formData.className}
      disableCloseOnSelect
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      onChange={(event, value) =>
        item.formActions.onNamedChange(item.formData.name, value)
      }
      onBlur={() => item.formActions.onNamedBlur(item.formData.name)}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          [{option.id}] {option.name}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant={item.formData.variant}
          label={item.formData.label}
          placeholder={item.formData.placeholder}
          margin={item.formData.margin}
          error={item.formData.error}
          fullWidth={item.formData.fullWidth}
          size={item.formData.size}
          helperText={item.formData.helperText}
        />
      )}
    />
  );
}

export default AutocompleteMs;
