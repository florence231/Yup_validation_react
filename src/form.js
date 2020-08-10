import React from "react";
import { TextField, Box } from '@material-ui/core'

class FormInput extends React.Component {
  render() {
    return (
      <form>
        <Box>
          <TextField autoComplete='off'
            id="nom"
            label="Nom"
            value={this.props.formik.values[this.props.names[1]]}
            onChange={this.props.formik.handleChange}
            helperText={this.props.formik.errors[this.props.names[1]]}
          />
        </Box>
        <Box>
          <TextField autoComplete='off'
            id="tache"
            label="Tache"
            value={this.props.formik.values[this.props.names[0]]}
            onChange={this.props.formik.handleChange}
            helperText={this.props.formik.errors[this.props.names[0]]}
          />
        </Box>
      </form>

    );
  }
}

export default FormInput;