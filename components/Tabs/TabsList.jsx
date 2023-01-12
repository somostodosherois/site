import { styled } from '@mui/material/styles'

import TabList from '@mui/lab/TabList'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'

// ** Icons Imports
import CartHeart from 'mdi-material-ui/CartHeart'
import Stethoscope from 'mdi-material-ui/Stethoscope'
import Charity from 'mdi-material-ui/Charity'
import SilverwareClean from 'mdi-material-ui/SilverwareClean'

const TabsList = ({ setCampanha }) => {
    const handleChange = (event, newValue) => {
        setCampanha(newValue)
    }

    return (
        <TabList
            onChange={handleChange}
            aria-label='account-settings tabs text-left'
            variant="fullWidth"
            className='tab-campanhas'
        >
            <Tab
                value='food'
                className='flex justify-left'
                label={
                    <Box>
                        <SilverwareClean />
                        <span className='text-center m-4'>Alimentos</span>
                    </Box>
                }
            />

            <Tab
                value='personal hygiene'
                className='flex justify-left'
                label={
                    <Box>
                        <Charity />
                        <span className='text-center m-4'>Higiene Pessoal</span>
                    </Box>
                }
            />

            <Tab
                value='accessories'
                className='flex justify-left'
                label={
                    <Box>
                        <CartHeart />
                        <span className='text-center m-4'>Acessórios</span>
                    </Box>
                }
            />

            <Tab
                value='medical treatments'
                className='flex justify-left'
                label={
                    <Box>
                        <Stethoscope />
                        <span className='text-center m-4'>Assistência médica</span>
                    </Box>
                }
            />

        </TabList>
    )

}

export default TabsList