// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'
import { Grid } from '@mui/material'

const data = [
  {
    progress: 10,
    imgHeight: 40,
    title: 'Iron Luccas',
    color: 'primary',
    amount: 'R$ 30,00',
    subtitle: '41 dias restantes',
    imgSrc: '	https://sth.org.br/images/2022/04/Design-sem-nome-9.png'
  },
  {
    progress: 75,
    color: 'info',
    imgHeight: 40,
    title: 'Claudio Batman',
    amount: 'R$ 480,00',
    subtitle: '10 dias restantes',
    imgSrc: 'https://sth.org.br/images/2022/04/Design-sem-nome-3.png'
  },
  {
    progress: 25,
    imgHeight: 40,
    title: 'Maísa Congelante',
    color: 'primary',
    amount: 'R$ 100,00',
    subtitle: '10 dias restantes',
    imgSrc: 'https://sth.org.br/images/2022/03/Design-sem-nome-4.png'
  },
  {
    progress: 85,
    imgHeight: 40,
    title: 'Mega Otavio',
    color: 'success',
    amount: 'R$ 2.680,00',
    subtitle: '10 dias restantes',
    imgSrc: 'https://sth.org.br/images/2022/03/Design-sem-nome-5.png'
  },
  {
    progress: 80,
    imgHeight: 40,
    title: 'A Incrível Julia',
    color: 'success',
    amount: 'R$ 1.583,50',
    subtitle: '8 dias restantes',
    imgSrc: 'https://sth.org.br/images/2021/11/Design-sem-nome-6.png'
  },
  {
    progress: 50,
    imgHeight: 40,
    title: 'Capitão Pedro Henryque',
    color: 'warning',
    amount: 'R$ 2.439,00',
    subtitle: '10 dias restantes',
    imgSrc: 'https://sth.org.br/images/2021/11/Design-sem-nome-7.png'
  },
  {
    progress: 40,
    imgHeight: 40,
    title: 'Gabriel Hulk',
    color: 'warning',
    amount: 'R$ 2.146,00',
    subtitle: '8 dias restantes',
    imgSrc: 'https://sth.org.br/images/2021/11/Design-sem-nome-8.png'
  }
]

const MissionsList = () => {
  return (
    <Card>
      <CardHeader
        title='Missões em andamento'
        titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2.25)} !important`, overflowY: 'auto' }}>
        {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ...(index !== data.length - 1 ? { mb: 5 } : {})
              }}
            >
              <Avatar
                variant='rounded'
                sx={{
                  mr: 3,
                  width: 40,
                  height: 40,
                }}
              >
                <img src={item.imgSrc} alt={item.title} height={item.imgHeight} />
              </Avatar>
              <Box
                sx={{
                  width: '100%',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                className='block sm:flex'
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant='caption'>{item.subtitle}</Typography>
                </Box>

                <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                    {item.amount}
                  </Typography>
                  <LinearProgress color={item.color} value={item.progress} variant='determinate' />
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default MissionsList
