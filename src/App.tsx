import { useFormik } from "formik";
import { Button, ChakraProvider,  FormControl, FormLabel,Heading,Input,Text,VStack } from '@chakra-ui/react'
import { useState } from 'react';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult]= useState('');

  const formik = useFormik({
    initialValues: {
      email: "",
      country:"",
    },
    onSubmit: (values) => {
      setIsSubmitting(true);
      setIsSubmitting(false);
      setResult(JSON.stringify(values));
    }
  });

  return (
    <ChakraProvider>
        <form onSubmit={formik.handleSubmit} data-testid={'form'}>
          <VStack bgColor={'blue.100'} minH={'100vh'}  pt={4}>
              <VStack spacing={4} minWidth={'lg'}>
                <Heading>Sign up now</Heading>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input value={formik.values.email} onChange={formik.handleChange} id="email"
                   variant='filled'  type="email" placeholder="Enter your email"/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="country">Country</FormLabel>
                  <Input value={formik.values.country} onChange={formik.handleChange}
                  id="country" variant='filled' placeholder="Enter your country" />
                </FormControl>
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
