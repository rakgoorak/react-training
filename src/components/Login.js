import React, { useState } from 'react';
import './Login.css';
import { Grid, TextField, Button, Container, Avatar, Typography, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import user_icon from '../Assets/person.png';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    const [action, setAction] = useState("Login");

    return (
        <Container component="main" maxWidth="xs" className='container'>
            <Grid container direction="column" alignItems="center" spacing={2}>
                <Grid item>
                    <Avatar className='avatar'>
                        <LockOutlinedIcon />
                    </Avatar>
                </Grid>
                <Grid item>
                    <Typography component="h1" variant="h5" className='text'>
                        {action}
                    </Typography>
                </Grid>
                <Grid item>
                    <div className='underline'></div>
                </Grid>
                <Grid item xs={12}>
                    <div className='inputs'>
                        {action === "Login" ? <div></div> : <div className='input'>
                            <img src={user_icon} alt="" />
                            <TextField type="text" placeholder='Name' fullWidth />
                        </div>}

                        <div className='input'>
                            <Button startIcon ={<MailIcon/>}/>
                            <TextField type="email" placeholder='Email' fullWidth />
                        </div>
                        <div className='input'>
                            <Button startIcon ={<LockIcon/>}/>
                            <TextField type="password" placeholder='Password' fullWidth />
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    {action === "Sign Up" ? <div></div> : <div className='forgot-password'>Lost Password? <Link href="#">Click Here!</Link></div>}
                </Grid>
                <Grid item container justifyContent="space-between">
                    <Button className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</Button>
                    <Button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login;
