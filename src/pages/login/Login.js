import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import * as yup from 'yup';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        email: yup.string().required("Enter Your Email"),
        password: yup.string().min(6, "Min 6").required("Enter your password")

    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            // console.log(values);
            localStorage.setItem("email", values.email);

            navigate("/");
        }
    })

    return (
        <>
            <Container maxWidth="xs" className="containerLogin" style={{ background: "white", height: "100vh", marginTop: "80px" }}>
                <div className="center bgcolor text-light">
                    <Typography variant="h4" align="center">
                        Login Here
                    </Typography>
                    <form onSubmit={formik.handleSubmit} style={{ height: "300px", padding: "10px" }}>
                        <Grid container spacing={2}>
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
                                    autoComplete="off"
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: "50px" }}>
                            Login
                        </Button>
                    </form>
                </div>
            </Container>
        </>
    )
}
export default Login;