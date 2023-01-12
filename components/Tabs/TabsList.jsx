import { styled } from '@mui/material/styles'

import TabList from '@mui/lab/TabList'
import Box from '@mui/material/Box'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import CartHeart from 'mdi-material-ui/CartHeart'
import Stethoscope from 'mdi-material-ui/Stethoscope'
import Charity from 'mdi-material-ui/Charity'
import SilverwareClean from 'mdi-material-ui/SilverwareClean'

const Tab = styled(MuiTab)(() => ({

}))

const TabName = styled('span')(() => ({
    lineHeight: 1.71,
    fontSize: '1rem'
}))

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
                        <TabName className='text-center m-4'>Alimentos</TabName>
                    </Box>
                }
            />

            <Tab
                value='personal hygiene'
                className='flex justify-left'
                label={
                    <Box>
                        <Charity />
                        <TabName className='text-center m-4'>Higiene Pessoal</TabName>
                    </Box>
                }
            />

            <Tab
                value='accessories'
                className='flex justify-left'
                label={
                    <Box>
                        <CartHeart />
                        <TabName className='text-center m-4'>Acessórios</TabName>
                    </Box>
                }
            />

            <Tab
                value='medical treatments'
                className='flex justify-left'
                label={
                    <Box>
                        <Stethoscope />
                        <TabName className='text-center m-4'>Assistência médica</TabName>
                    </Box>
                }
            />

        </TabList>
    )

}

export default TabsList