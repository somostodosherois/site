import { Grid } from "@mui/material"
import TextField from '@mui/material/TextField'

import CardDonation from './CardDonation'
import HandHeartOutline from 'mdi-material-ui/HandHeartOutline'



const GridDonation = ({ items }) => (
    <Grid className="grid lg:grid-cols-4 gap-x-4 gap-y-4 mt-4">
        {items.map((item, index) => (
            <CardDonation item={item} index={index} />
        ))}

        <div className='bg-white border rounded-lg shadow p-6'>
            <div className='md:grid md:grid-cols-3 gap-x-4'>
                <HandHeartOutline className="text-red-600 w-12 h-12 mt-2" />
                <div className="col-span-2 mt-2">
                    <span className='text-lg font-semibold'>Doação personalizada</span>
                </div>
            </div>
            <TextField
                fullWidth
                type='text'
                label='Valor'
                size="small"
                color='error'
                className="mt-7"
            />
            <div className="rounded-md mt-8 shadow">
                <a
                    href={'missao/'}
                    className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                >
                    Doar
                </a>
            </div>
        </div>
    </Grid>
)

export default GridDonation