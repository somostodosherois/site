import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import InputMask from "react-input-mask";
import { useState } from 'react';

const FormCards = ({ setCreditCard }) => {

    const [isCardCheck, setIsCardCheck] = useState(true)

    const FormTitular = () => (
        <div className='mt-10 border-t border-gray-200'>
            <h2 className="text-lg font-medium mt-8 text-gray-900">Dados do titular do cartão</h2>

            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">

                <div className="sm:col-span-2 flex gap-x-4">
                    <TextField
                        type='text'
                        size='small'
                        label='Nome'
                        placeholder='Digite o seu nome completo'
                        color='error'
                        className='mb-2'
                        fullWidth={true}
                        required
                        onChange={(e) => setCreditCard({ name: e.target.value })}
                    />
                </div>

                <div className="sm:col-span-2 flex gap-x-4">

                    <InputMask
                        mask="999.999.999-99"
                        onChange={(e) => setCreditCard({ cpfCnpj: e.target.value })}
                    >
                        {() =>
                            <TextField
                                type='text'
                                size='small'
                                label='CPF'
                                placeholder='Digite o CPF'
                                color='error'
                                className='mb-2'
                                required
                            />
                        }
                    </InputMask>

                    <InputMask
                        mask="(99) 99999-9999"
                        onChange={(e) => setCreditCard({ mobilePhone: e.target.value })}
                    >
                        {() =>
                            <TextField
                                type='text'
                                size='small'
                                label='Telefone'
                                placeholder='Digite o telefone'
                                color='error'
                                className='mb-2'
                                required
                                fullWidth={true}
                            />
                        }
                    </InputMask>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div className="card-block mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                <div className="col-span-4">
                    <InputMask
                        mask="9999 9999 9999 9999"
                        onChange={(e) => setCreditCard({ number: e.target.value })}
                    >
                        {() =>
                            <TextField
                                type='text'
                                size='small'
                                label='Número do cartão'
                                name="card-number"
                                id="card-number"
                                placeholder='Digite o número do cartão'
                                color='error'
                                fullWidth={true}
                                required
                            />
                        }
                    </InputMask>
                </div>

                <div className="col-span-4">
                    <TextField
                        type='text'
                        size='small'
                        label='Nome impresso no cartão'
                        name="name-card"
                        id="name-card"
                        placeholder='Digite o nome impresso no cartão'
                        color='error'
                        fullWidth={true}
                        required
                        onChange={(e) => setCreditCard({ holderName: e.target.value })}
                    />
                </div>

                <div className="col-span-2">
                    <InputMask
                        mask="99/99"
                        onChange={(e) => setCreditCard({ expiryDate: e.target.value })}
                    >
                        {() =>
                            <TextField
                                type='text'
                                size='small'
                                label='Data de expiração'
                                name="expiration-date"
                                id="expiration-date"
                                placeholder='Digite a data de expiração'
                                color='error'
                                fullWidth={true}
                                required
                            />
                        }
                    </InputMask>
                </div>

                <div>
                    <InputMask
                        mask="999"
                        onChange={(e) => setCreditCard({ ccv: e.target.value })}
                    >
                        {() =>
                            <TextField
                                type='text'
                                size='small'
                                label='CVC'
                                name="cvc"
                                id="cvc"
                                placeholder='Digite a CVC'
                                color='error'
                                fullWidth={true}
                                required
                            />
                        }
                    </InputMask>
                </div>

            </div>

            <FormControlLabel
                className='mt-6'
                control={<Checkbox
                    onChange={() => setIsCardCheck(!isCardCheck)}
                    defaultChecked
                    sx={{
                        color: '#910000fa',
                        '&.Mui-checked': {
                            color: '#910000fa',
                        },
                    }}
                />}
                label="Os dados do titular do cartão é o mesmo da conta."
            />

            { !isCardCheck && <FormTitular /> }
        </>
    )
}

export default FormCards