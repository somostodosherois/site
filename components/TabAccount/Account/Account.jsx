// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

const Account = () => {
  return (
    <Card className='p-8 border-none shadow-none'>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Nome de Herói' placeholder='johnDoe' defaultValue='johnDoe' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Nome' placeholder='John Doe' defaultValue='John Doe' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type='email'
            label='Email'
            placeholder='johnDoe@example.com'
            defaultValue='johnDoe@example.com'
          />
        </Grid>

        <Grid item xs={8}>
          <Button variant='outlined' color='error' sx={{ marginRight: 3.5 }}>
            Salvar
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Account
