import { TextField,Stack, Container, Typography} from '@mui/material';
import { ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import './App.css'
import { useFormik } from "formik";

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
    <form  onSubmit={formik.handleSubmit}>
      <ThemeProvider theme={theme}>
        <Container sx={{ bgcolor:theme.palette.primary.light, minHeight:'100vh',minWidth:'100vw',display:'flex',justifyContent:'center'}}>
          <Stack spacing={2} mt={8}>
          <Typography variant='h1' color={'white'}>Sign up now</Typography>
          <TextField
            id="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type='email'
            />
            </Stack>
        </Container>
      </ThemeProvider>
    </form>
    )
}

export default App
