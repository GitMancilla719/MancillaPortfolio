import React from 'react'
import { Box, Typography, Grid, TextField, Button  } from '@material-ui/core'
import {ContactStyle} from './Contact.style'
import emailjs from 'emailjs-com'
import { Fade   } from 'react-reveal'

const Contact = () => {

    const cls = ContactStyle()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('akosiemem19', 'portfolio-email-template', e.target, 'user_45uVLkV5TnUZxICZW4w5q')
        .then((result) => {
            //console.log('result', result.text)
            alert('Message Sent')
        }, (error) => {
            //console.log('error', error.text)
            alert('Something went wrong')
        })
        e.target.reset()
    }

    return (
        <div className={cls.container}>
            <Grid container justify='center' direction='row'>
                <Grid item xs={12} sm={8} md={5} className={cls.Greeter}>
                    <Fade top delay={800}>
                        <Typography variant='h4' align='center' className={cls.greeterText}>Contact</Typography>
                        <Typography className={cls.greeterTextSub}>
                            If you want to get in touch, leave some feedbacks, 
                            talk about projects or employment opportunities
                            ~send me an email and let's talk
                        </Typography>
                    </Fade>
                </Grid>
                <Grid item xs={12} sm={8} md={5}>
                <Fade bottom delay={1000}>
                    <form className={cls.Form} onSubmit={sendEmail} autoComplete="off">
                        <Box display='flex' flexDirection='row'>
                            <TextField className={cls.inputs} style={{width : '100%'}} variant="outlined" label="Name" name="name" required/>
                            <TextField className={cls.inputs} style={{width : '100%'}} type='email' variant="outlined" label="Email" name="email" required/>
                        </Box>
                        <Box display='flex' flexDirection='column'>
                            <TextField className={cls.inputs} variant="outlined" label="Subject" name="subject"/>
                            <TextField className={cls.inputs} variant="outlined" label="Message" name="message" multiline rows={5} required/>
                        </Box>
                        <Button className={cls.sendBtn} type='submit' variant='outlined'>Send</Button>
                    </form>
                    
                </Fade>
                </Grid>
                
            </Grid>
            <Fade delay={2000}>
                <Typography variant='body2' align='center' style={{color:'white', width : '100vw', marginTop : '5em'}}>© Marwel Mancilla 2020</Typography>
            </Fade>
        </div>
    )
}

export default Contact
