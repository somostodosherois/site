import { useState } from 'react'
import TextField from '@mui/material/TextField'
import InputMask from "react-input-mask";

const FormPersonalData = ({ nome, setNome, sobrenome, setSobrenome, cpf, setCpf, celular, setCelular }) => {
    return (
        <div className='mt-10 border-t border-gray-200'>
            <h2 className="text-lg font-medium mt-8 text-gray-900">Dados pessoais</h2>

            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">

                <div className="sm:col-span-2 flex gap-x-4">
                    <TextField
                        type='text'
                        size='small'
                        label='Nome'
                        placeholder='Digite o seu nome'
                        color='error'
                        className='mb-2'
                        fullWidth={true}
                        required
                        value={nome}
                        disabled={nome ? true : false}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <TextField
                        type='text'
                        size='small'
                        label='Sobrenome'
                        placeholder='Digite o seu sobrenome'
                        color='error'
                        className='mb-2'
                        fullWidth={true}
                        required
                        value={sobrenome}
                        disabled={sobrenome ? true : false}
                        onChange={(e) => setSobrenome(e.target.value)}
                    />
                </div>

                <div className="sm:col-span-2 flex gap-x-4">


                    <InputMask
                        mask="999.999.999-99"
                        onChange={(e) => setCpf(e.target.value)}
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
                                value={cpf}
                                disabled={cpf ? true : false}
                            />
                        }
                    </InputMask>

                    <InputMask
                        mask="(99) 99999-9999"
                        onChange={(e) => setCelular(e.target.value)}
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
                                value={celular}
                            />
                        }
                    </InputMask>
                </div>
            </div>
        </div>
    )
}

export default FormPersonalData