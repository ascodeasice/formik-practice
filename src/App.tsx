import { TextField,Stack, Container, Typography} from '@mui/material';
import { ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import './App.css'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ bgcolor:theme.palette.primary.light, minHeight:'100vh',minWidth:'100vw',display:'flex',justifyContent:'center'}}>
        <Stack spacing={2} mt={8}>
        <Typography variant='h1' color={'white'}>Sign up now</Typography>
        <TextField
          id="email"
          label="Email"
          value={''}
          />
          </Stack>
    </Container>
        </ThemeProvider>
    )
}

export default App
