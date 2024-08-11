import { useState } from 'react';
import {FormControl,FormLabel, FormHelperText, Input, Button, Box,Stack,Heading,Text,} from '@chakra-ui/react';
export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email.includes('@')) {
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

        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            return;
        } else {
            setConfirmPasswordError('');
        }

        if (username.length > 20) {
            setUsernameError('Username should be less than 20 characters');
            return;
        } else {
            setUsernameError('');
        }

        if (mobilenumber.length !== 10) {
            setMobileNumberError('Mobile number should contain 10 digits');
            return;
        } else {
            setMobileNumberError('');
        }

        // Handle sign-up logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Username:', username);
        console.log('Mobile Number:', mobilenumber);
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
                shadow="lg"
                width="100%"
                maxWidth="lg"
            >
                <Stack spacing={4} mb={6}>
                    <Heading as="h1" size="xl" textAlign="center">
                        Sign Up
                    </Heading>
                    <Text textAlign="center" color="gray.600">
                        Create your account and start using our services
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
                        <FormControl isInvalid={!!confirmPasswordError}>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input
                                type='password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                            />
                            {confirmPasswordError && <FormHelperText color="red.500">{confirmPasswordError}</FormHelperText>}
                        </FormControl>
                        <FormControl isInvalid={!!usernameError}>
                            <FormLabel>Username</FormLabel>
                            <Input
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                            />
                            {usernameError && <FormHelperText color="red.500">{usernameError}</FormHelperText>}
                        </FormControl>
                        <FormControl isInvalid={!!mobileNumberError}>
                            <FormLabel>Mobile Number</FormLabel>
                            <Input
                                type='text'
                                value={mobilenumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                                placeholder="Enter your mobile number"
                                maxLength={10} // Optional: limits input to 10 characters
                            />
                            {mobileNumberError && <FormHelperText color="red.500">{mobileNumberError}</FormHelperText>}
                        </FormControl>
                        <Button colorScheme='teal' type='submit'>
                            Sign Up
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Box>
    );
};
