import { Box, FormControl, Input, InputAdornment, InputLabel } from '@mui/material'
import React, { useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';


const Register = () => {
    const [user, setNewuser] = useState({
        full_name: "",
        gmail: "",
        mobile_number: "",
        qualification: "",
        clg_name: "",
        skills: "",
        password: "",
        year: ""
    })


    const handleChange = (e) => setNewuser({ ...user, [e.target.name]: e.target.value })
    const handleSubmit = () => {
        try {
            // axio
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Box className="container">
                <Box className="left_container">
                    <img src="./image/login.png" alt="logo" />
                </Box>
                <Box className="right_container" sx={{ '& > :not(style)': { m: 3 }, ml: 7 }}>
                    <h2>Register Yourself </h2>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Full Name
                        </InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            value={user.full_name}
                            onChange={handleChange}
                            name='full_name'
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Email
                        </InputLabel>
                        <Input
                            value={user.gmail}
                            onChange={handleChange}
                            name='gmail'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Year
                        </InputLabel>
                        <Input
                            value={user.year}
                            onChange={handleChange}
                            name='year'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Password
                        </InputLabel>
                        <Input
                            value={user.password}
                            onChange={handleChange}
                            name='password'
                            type='password'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Phone
                        </InputLabel>
                        <Input
                            value={user.mobile_number}
                            onChange={handleChange}
                            name='mobile_number'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <LocalPhoneIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Qualification
                        </InputLabel>
                        <Input
                            value={user.qualification}
                            onChange={handleChange}
                            name="qualification"
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <BorderColorIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                            College/ Institution
                        </InputLabel>
                        <Input
                            value={user.clg_name}
                            onChange={handleChange}
                            name="clg_name"
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <ApartmentIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Skills
                        </InputLabel>
                        <Input
                            value={user.skills}
                            onChange={handleChange}
                            name="skills"
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <CrisisAlertIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <textarea placeholder='Description here '
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                    <button className='btn' onSubmit={handleSubmit}>Register Now</button>
                </Box>
            </Box>
        </>
    )
}

export default Register