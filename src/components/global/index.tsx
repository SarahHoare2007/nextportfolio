"use client"
import use from 'React';
import styles from '../../app../page.module.css';
import { Box, Button, TextField, TextareaAutosize } from '@mui/material';


const ContactForm = () => {

    const handleSubmit = async (formDate: any) => {
        console.log(formData);
        var object = {};
        formData.forEach((value: string, key: string) => object[key] = value);
        await fetch('/contact/send', {
            method: 'POST',
            body: JSON.stringify(object),
        })

            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            });
    }



    return (

        <>

            {submission?.status ? (
                <Alert varient="filled" severity={submission.status}>
                    {submission.message}
                </Alert>
            )
            <form className={styles.contactform} action={handleSubmit}>
                <Box sx={{ pb: { xs: 1, md: 1 } }}>
                    <TextField id="name-basic" color="primary" label="Name" variant="outlined" type="name" /></Box>
                <Box sx={{ pb: { xs: 1, md: 1 } }}>
                    <TextField id="email-basic" label="Email" variant="outlined" type="email" /></Box>
                <Box sx={{ pb: { xs: 1, md: 1 } }}>
                    <TextareaAutosize id="message-basic" placeholder="Message" minRows={3} /></Box>
                <Button type="submit" variant="contained" color="secondary">Submit contact</Button>
            </form>
        </>

    );
}

export default ContactForm;
