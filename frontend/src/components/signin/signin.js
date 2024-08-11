

import { useState } from 'react';
import {FormControl, FormLabel, FormHelperText, Input, Button, Box, Stack, Heading, Text} from '@chakra-ui/react';
import {axios} from 'axios';
export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const signin = async() =>{
    await axios.post(api+"/signin",{email,password})
    .then((res)=>{
        if(res?.data?.message){
            console.log(res.data.values)
            alert("login sucessfully")
        } else {
            alert("user not found")
            window.location.href="/signup"
        }
    })
    .catch((e)=>console.log(e))
}
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email.includes('@gmail.com')) {
            setEmailError('Invalid email address');
            return;
        } else {
            setEmailError('');
        }

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            return;
        } else {
            setPasswordError('');
        }

        // Handle sign-in logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            backgroundColor="gray.50"
            p={4}
        >
            <Box
                bg="white"
                p={8}
                borderRadius="md"
                shadow="md"
                width="100%"
                maxWidth="400px"
            >
                <Stack spacing={4} mb={6}>
                    <Heading as="h1" size="xl" textAlign="center">
                        Sign In
                    </Heading>
                    <Text textAlign="center" color="gray.600">
                        Enter your credentials to access your account
                    </Text>
                </Stack>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <FormControl isInvalid={!!emailError}>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                            {emailError && <FormHelperText color="red.500">{emailError}</FormHelperText>}
                        </FormControl>
                        <FormControl isInvalid={!!passwordError}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                            {passwordError && <FormHelperText color="red.500">{passwordError}</FormHelperText>}
                        </FormControl>
                        <Button colorScheme='teal' type='submit' onClick={signin}>
                            Sign In
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Box>
    );
};


