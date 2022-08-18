import { useState } from "react"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import FormCards from "./Cards"

const FormPayment = () => {

    const [payment, setPayment] = useState('credit-card')
    const [isOpen, setIsOpen] = useState(true)

    const paymentMethods = [
        { id: 'credit-card', title: 'Cartão de crédito' },
        { id: 'debit-card', title: 'Cartão de débito' },
        { id: 'boleto', title: 'Boleto' },
        { id: 'pix', title: 'PIX' },
    ]

    const handlePayment = (e) => {
        setPayment(e.target.value)

        if (e.target.value === 'boleto' || e.target.value === 'pix') {
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }
    }

    return (
        <div className="mt-10 border-t border-gray-200 pt-10">
            <h2 className="text-lg font-medium text-gray-900">Pagamento</h2>

            <fieldset className="mt-4">
                <legend className="sr-only">Formas de Pagamento</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            className='mt-4'
                            defaultValue="credit-card"
                        >
                            {paymentMethods.map((paymentMethod, index) => (
                                <FormControlLabel value={paymentMethod.id} control={<Radio color='error' onChange={handlePayment} />} label={paymentMethod.title} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </div>
            </fieldset>

            {isOpen && <FormCards />}
        </div>
    )
}

export default FormPayment