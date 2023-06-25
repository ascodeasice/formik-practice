import { useFormik } from "formik";
import { Button, ChakraProvider, FormControl, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react';
import * as Yup from 'yup';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState('');

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(/^\d+$/, 'Phone numbers must contain only numbers')
      .matches(/^[\d\s\-()]+$/, 'Phone numbers can only contain valid characters'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-z]/, 'Password must contain lowercase letters')
      .matches(/[A-Z]/, 'Password must contain uppercase letters')
      .matches(/\d/, 'Password must contain numbers'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      country: "",
      phoneNumber: "",
      password: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      setIsSubmitting(false);
      setResult(JSON.stringify(values));
    }
  });

  return (
    <ChakraProvider>
      <form onSubmit={formik.handleSubmit}>
        <VStack bgColor={'blue.100'} minH={'100vh'} pt={4}>
          <VStack spacing={4} minWidth={'lg'}>
            <Heading>Sign up now</Heading>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input value={formik.values.email} onChange={formik.handleChange} id="email"
                variant='filled' type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="country">Country</FormLabel>
              <Input value={formik.values.country} onChange={formik.handleChange}
                id="country" variant='filled' placeholder="Enter your country" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
              <Input
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                id="phoneNumber"
                variant="filled"
                placeholder="Enter your phone number"
                onBlur={formik.handleBlur}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                value={formik.values.password}
                onChange={formik.handleChange}
                id="password"
                variant="filled"
                placeholder="Enter your password"
                onBlur={formik.handleBlur}
                type="password"
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant={'filled'}
                placeholder="Confirm your password"
              />

            </FormControl>
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <Text color="red.500">{formik.errors.phoneNumber}</Text>
            )}
            {formik.touched.password && formik.errors.password && (
              <Text color="red.500">{formik.errors.password}</Text>
            )}
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <Text color="red.500">{formik.errors.confirmPassword}</Text>
            )}
          </VStack>
          <Button colorScheme="teal" type="submit" isLoading={isSubmitting}>Submit</Button>
          <Text>
            {result}
          </Text>
        </VStack>
      </form>
    </ChakraProvider>
  )
}

export default App
