import React from "react";
import { Form, Formik } from "formik";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SIGN_UP_VALIDATION } from "./validation/SignUpValidation";

import TextField from "./Component/Form/TextField/TextFIeld";
import Select from "./Component/Form/Select/Select";
import DatePicker from "./Component/Form/DatePicker/DatePicker";
import CheckBox from "./Component/Form/CheckBox/CheckBox";
import Button from "./Component/Form/Button/Button";

import countries from "./data/countries.json";
const useStyles = makeStyles({
  formWrapper: {
    marginTop: "5px",
    marginBottom: "5px",
  },
});
const INIT_FORM_STATE = {
  firstname: "",
  lastname: "",
  email: "",
  country: "",
  arrivealDate: "",
  departureDate: "",
  termsOfService: false,
};

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent={"center"} spacing={2}>
      <Grid item xs={12}>
        <Typography
          textAlign={"center"}
          variant="h2"
          component={"header"}
          color="initial"
        >
          Sign Up
        </Typography>

        <Grid justifyContent={"center"} item xs={12}>
          <Container maxWidth={"md"}>
            <div className={classes.formWrapper}>
              <Formik
                initialValues={{ ...INIT_FORM_STATE }}
                validationSchema={SIGN_UP_VALIDATION}
                onSubmit={(values) => {console.log(values)}}
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4" component={"header"}>
                        Your details
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        name="firstname"
                        label="First name"
                      ></TextField>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField name="lastname" label="Last name"></TextField>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="h4" component={"header"}>
                        Address
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Select
                        name="country"
                        label="Country"
                        options={countries}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="h4" component={"header"}>
                        Booking Information
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <DatePicker name="arrivealDate" label="Arrival Date" />
                    </Grid>

                    <Grid item xs={6}>
                      <DatePicker name="departureDate" label="Departure Date" />
                    </Grid>

                    <Grid item xs={12}>
                      <CheckBox
                        name="termsOfService"
                        legend="Terms Of Service"
                        label="I agree"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button>Submit Form</Button>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </div>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
