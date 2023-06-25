import { useFormik } from "formik";
import { ChakraProvider,  FormControl, FormLabel } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Input,VStack } from '@chakra-ui/react'

function App() {
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <ChakraProvider>
        <form  onSubmit={formik.handleSubmit}>
          <VStack bgColor={'blue.100'} minH={'100vh'}  pt={4}>
              <VStack spacing={4} minWidth={'lg'}>
                <Heading>Sign up now</Heading>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input value={formik.values.email} onChange={formik.handleChange} id="email" variant='filled'  type="email"/>
                </FormControl>
              </VStack>
          </VStack>
        </form>
    </ChakraProvider>
    )
}

export default App
