import { Button, Checkbox, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const Registration = () => {

    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        name: yup.string().required("Enter Your Name"),
        checkbox: yup.boolean().oneOf([true], "Check This Box"),
        email: yup.string().required("Enter Your E-mail"),
        radio: yup.string().required("Select Your Gender"),
        password: yup.string().min(6, "Minimum six characters").required("Required"),

    })

    const formik = useFormik({
        initialValues: {
            name: "",
            checkbox: false,
            email: "",
            radio: "",
            password: "",
        },
        validationSchema,

        onSubmit: (values) => {
            console.log(values);
            // localStorage.setItem("name", values.name);
            // localStorage.setItem("email", values.email);

            navigate("/login");
        }
    })



    return (
        <>
            <Container maxWidth="xs" style={{ background: "white", height: "100vh", marginTop: "50px", border: "1px solid white" }}>
                <div className="center bgcolr text-light">
                    <Typography variant="h4" align="center">
                        Register Here
                    </Typography>
                    <form onSubmit={formik.handleSubmit} style={{ height: "550px", padding: "10px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    className="custom-input"
                                    autoComplete="off"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    className="custom-input"
                                    autoComplete="off"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    className="custom-input"
                                    autoComplete="off"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset" error={formik.touched.radio && Boolean(formik.errors.radio)}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup
                                        name="radio"
                                        value={formik.values.radio}
                                        onChange={formik.handleChange}
                                        row
                                    >
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                    <p className="text-danger p-text">{formik.touched.radio && formik.errors.radio}</p>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="checkbox"
                                            color="primary"
                                            checked={formik.values.checkbox}
                                            onChange={formik.handleChange}
                                        />
                                    }
                                    label="All information correct"
                                />
                                <p className="text-danger p-text">{formik.touched.checkbox && formik.errors.checkbox}</p>
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            Register
                        </Button>
                    </form>
                </div>
            </Container>
        </>
    )
}
export default Registration;