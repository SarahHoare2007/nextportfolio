"use client";
import { useState } from "react";
import styles from "../../app/page.module.css"
import { Alert, Box, Button, TextField, TextareaAutosize, styled } from "@mui/material";

const ContactForm = () => {
    const defaultSubmission = {
        status: null,
        message: null,
    }

    const [submission, setSubmission] = useState(defaultSubmission);

    const handleSubmit = async (formData: any) => {
        console.log(formData);
        let object: { [key: string]: any } = {};
        formData.forEach((value: string, key: string) => object[key] = value);
        await fetch('/contact/send', {
            method: 'POST',
            body: JSON.stringify(object),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("MY AWESOME RESPONSE", res);
                setSubmission(res);
            });
    }

    return (
        <div>
            {submission?.status ? (
                <Alert variant="filled" severity={submission.status}>
                    {submission.message}
                </Alert>
            ) : null}

            <form className={styles.contactForm} action={handleSubmit}>
                <Box sx={{ pb: { xs: 1, md: 1 } }}>
                    <StyledTextField name="name" id="name-basic" color="primary" label="Name" variant="outlined" type="text" />
                </Box>
                <Box sx={{ pb: { xs: 1, md: 1 } }}>
                    <StyledTextField name="email" id="email-basic" label="Email" variant="outlined" type="email" />
                </Box>
                <Box sx={{ pb: { xs: 1, md: 1 } }}>
                    <StyledTextArea name="message" id="message" placeholder="Enter message here!" minRows={5} />
                </Box>
                <StyledButton type="submit" variant="contained">Submit contact</StyledButton>
            </form>
        </div>

    );

}

export default ContactForm;

const StyledTextField = styled(TextField)`
background-color: white;
border: 2px black solid;
border-radius: 8px;
margin: 5px;
width: 500px;
color: black;
`

const StyledTextArea = styled(TextareaAutosize)`
background-color: white;
border: 2px black solid;
border-radius: 8px;
margin: 5px;
padding: 5px;
width: 500px;
color: black;
`

const StyledButton = styled(Button)`
background-color: rgb(71, 117, 111);
height: 50px;
width: 500px
`