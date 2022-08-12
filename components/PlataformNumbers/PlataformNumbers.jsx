// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'

// ** Icons Imports
import HeartCircle from 'mdi-material-ui/HeartCircle'
import AccountCash from 'mdi-material-ui/AccountCash'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import AccountGroup from 'mdi-material-ui/AccountGroup'


const depositData = [
  {
    logoWidth: 28,
    logoHeight: 29,
    amount: '126',
    title: 'Número de missões concluídas',
    avatar: <HeartCircle />,
    color: '#E46C6C'
  },
  {
    logoWidth: 38,
    logoHeight: 38,
    amount: '6075',
    title: 'Número de doações realizadas',
    avatar: <AccountCash />,
    color: '#E46C6C'
  },
  {
    logoWidth: 34,
    logoHeight: 32,
    amount: '56',
    title: 'Número de doadores mensais',
    avatar: <AccountGroup />,
    color: '#E46C6C'
  },
  {
    logoWidth: 20,
    logoHeight: 28,
    amount: 'R$ 300.000,00',
    title: 'Valor arrecado para missões',
    avatar: <CurrencyUsd />,
    color: '#E46C6C'
  }
]

const PlataformNumbers = () => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'], minHeight: '367px' }}>
      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Números da Plataforma'
          sx={{ alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          titleTypographyProps={{
            variant: 'h6',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
          {depositData.map((item, index) => {
            return (
              <Box
                key={item.title}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== depositData.length - 1 ? 6 : 0 }}
              >
                <Box sx={{ minWidth: 38, display: 'flex', justifyContent: 'center' }}>
                  <Avatar sx={{ boxShadow: 3, color: 'common.white', backgroundColor: `${item.color}` }}>
                    {item.avatar}
                  </Avatar>
                </Box>
                <Box
                  sx={{
                    ml: 2,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, flexDirection: 'row' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.title}</Typography>
                    <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'success.main' }}>
                      {item.amount}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>
    </Card>
  )
}

export default PlataformNumbers
