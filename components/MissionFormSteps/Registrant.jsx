// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

const Registrant = () => {

  return (
    <div className="mx-auto max-w-sm md:max-w-lg px-4">
      <p className="text-gray-500 text-center text-base">Preencha os campos abaixo com as suas informações</p>

      <form action="#" method="POST">
        <Grid container spacing={5} className='p-8'>
          <Grid item xs={12}>
            <TextField fullWidth label='Nome' size="small" color='error' />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type='email'
              label='Email'
              size="small"
              color='error'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label='Celular' size="small" color='error' />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label='Como conheceu a Somos Todos Heróis?' size="small" color='error' />
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default Registrant