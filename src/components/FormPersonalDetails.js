import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
//import RadioButton from 'material-ui/RadioButton';
import { RaisedButton } from 'material-ui';

export class FormPersonalDetails extends Component {
    continue = e => {
        //e.preventDefeault();
        this.props.nextStep();
    }

    back = e => {
        //e.preventDefeault();
        this.props.prevStep();
    }



  render() {
    const {values, handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Enter Personal Details" />
            <TextField 
              hintText = "Enter Your Occupation"
              floatingLabelText = "Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
            />
            <br></br>
            <TextField 
              hintText = "Enter Your City"
              floatingLabelText = "City"
              onChange={handleChange('city')}
              defaultValue={values.city}
            />
            <br></br>
            <TextField 
              hintText = "Enter Your Bio"
              floatingLabelText = "Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
            />
            <br></br>
            <RaisedButton 
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
            <RaisedButton 
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button:{
    margin: 15
  }
}

export default FormPersonalDetails;
