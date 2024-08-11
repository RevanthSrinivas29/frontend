// import { useState } from 'react';
// import { FormControl, FormLabel, FormHelperText, Input, Button, Box, Stack } from '@chakra-ui/react';

// export const SignIn = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Basic validation
//         if (!email.includes('@')) {
//             setEmailError('Invalid email address');
//             return;
//         } else {
//             setEmailError('');
//         }

//         if (password.length < 6) {
//             setPasswordError('Password must be at least 6 characters long');
//             return;
//         } else {
//             setPasswordError('');
//         }

//         // Handle sign-in logic here
//         console.log('Email:', email);
//         console.log('Password:', password);
//     };

//     return (
        
//         <Box
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             minHeight="100vh"
//             backgroundColor="gray.50"
//             p={4}
//         >
//             <Box
//                 bg="white"
//                 p={8}
//                 borderRadius="md"
//                 shadow="md"
//                 width="100%"
//                 maxWidth="400px"
//                 boxShadow="lg"
//             >
//                 <form onSubmit={handleSubmit}>
//                     <Stack spacing={4}>
//                         <FormControl isInvalid={!!emailError}>
//                             <FormLabel>Email address</FormLabel>
//                             <Input
//                                 type='email'
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 placeholder="Enter your email"
//                             />
//                             {emailError && <FormHelperText color="red.500">{emailError}</FormHelperText>}
//                         </FormControl>
//                         <FormControl isInvalid={!!passwordError}>
//                             <FormLabel>Password</FormLabel>
//                             <Input
//                                 type='password'
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 placeholder="Enter your password"
//                             />
//                             {passwordError && <FormHelperText color="red.500">{passwordError}</FormHelperText>}
//                         </FormControl>
//                         <Button colorScheme='teal' type='submit'>
//                             Sign In
//                         </Button>
//                     </Stack>
//                 </form>
//             </Box>
//         </Box>
//     );
// };