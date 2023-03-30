import { useState } from "react"
import { Grid } from "@mui/material"
import TextField from '@mui/material/TextField'
import HandHeartOutline from 'mdi-material-ui/HandHeartOutline'

import CardDonation from './CardDonation'
import api from '../../pages/api/config'
import getUser from "../../hooks/getSession"
import { useCoins } from "../../contexts/coins"

const GridDonation = ({ items, campanha, setOpenSnack, setMessageSnack, setTypeSnack }) => {

    const coins = useCoins();
    const [valuePersonalized, setValuePersonalized] = useState(0)

    const handleValue = () => {

        if (getUser().token) {
            const saldo = coins - valuePersonalized

            if (coins < 0 || saldo < 0) {
                swal({
                    title: "Moedas insuficientes. Deseja recarregar?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                    buttons: ["Agora não", "Sim"],
                }).then((value) => {
                    if (value) {
                        Router.push('/pagamento')
                    }
                });
            } else {
                api.post("/donation", {
                    email: getUser().email,
                    date: new Date().toISOString(),
                    value: valuePersonalized,
                    missionId: 0,
                    category: campanha
                }).then((response) => {
                    setOpenSnack(true)
                    setTypeSnack('success')
                    setMessageSnack('Doação realizada com sucesso!')
                }).catch((err) => {
                    console.log(err)
                    setOpenSnack(true)
                    setTypeSnack('error')
                    setMessageSnack(err?.response?.data.value?.message)
                });
            }
        }else{
            window.location.href = '/login'
        }
    }

    return (
        <Grid className="grid lg:grid-cols-4 gap-x-4 gap-y-4 mt-4">
            {items.map((item, index) => (
                <CardDonation item={item} key={index} setOpenSnack={setOpenSnack} setMessageSnack={setMessageSnack} setTypeSnack={setTypeSnack} />
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
                    onChange={(e) => setValuePersonalized(e.target.value)}
                />
                <div className="rounded-md mt-8 shadow cursor-pointer">
                    <a
                        onClick={handleValue}
                        className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                    >
                        Doar
                    </a>
                </div>
            </div>
        </Grid>
    )
}

export default GridDonation