import { useState } from 'react'
import TextField from '@mui/material/TextField'
import InputMask from "react-input-mask";

const FormAddress = ({ logradouro, setLogradouro, complemento, setComplemento, numero, setNumero, bairro, setBairro, localidade, setLocalidade, uf, setUf, cep, setCep }) => {

    const showData = (result) => {
        for (const campo in result) {
            setLogradouro(result['logradouro'])
            setComplemento(result['complemento'])
            setBairro(result['bairro'])
            setLocalidade(result['localidade'])
            setUf(result['uf'])
        }
    }

    const handleCep = (e) => {

        const cep = e.target.value

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                response.json()
                    .then(data => showData(data))
            })

        setCep(cep)
    }

    return (
        <div className="mt-10 pt-4">
            <h2 className="text-lg font-medium text-gray-900">Endereço</h2>

            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">

                <div className="sm:col-span-2 flex gap-x-4">
                    <InputMask
                        mask="99999-999"
                        onChange={handleCep}
                    >
                        {() =>
                            <TextField
                                type='text'
                                size='small'
                                label='CEP'
                                placeholder='Digite o CEP'
                                color='error'
                                className='mb-2'
                                required
                                value={cep}
                            />
                        }
                    </InputMask>

                    <TextField
                        type='text'
                        size='small'
                        label='Endereço'
                        placeholder='Digite o endereço'
                        color='error'
                        className='mb-2'
                        value={logradouro}
                        onChange={(e) => setLogradouro(e.target.value)}
                        fullWidth={true}
                    />
                </div>

                <div className="sm:col-span-2 flex gap-x-4">
                    <TextField
                        type='number'
                        size='small'
                        label='Número'
                        placeholder='Digite o número'
                        color='error'
                        className='mb-2'
                        onChange={(e) => setNumero(e.target.value)}
                        value={numero}
                    />

                    <TextField
                        type='text'
                        size='small'
                        label='Complemento'
                        placeholder='Digite o complemento'
                        color='error'
                        className='mb-2'
                        fullWidth={true}
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                    />
                </div>

                <div className="sm:col-span-2 flex gap-x-4">
                    <TextField
                        type='text'
                        size='small'
                        label='Bairro'
                        placeholder='Digite o bairro'
                        color='error'
                        className='mb-2'
                        fullWidth={true}
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                    />

                    <TextField
                        type='text'
                        size='small'
                        label='Cidade'
                        placeholder='Digite a cidade'
                        color='error'
                        className='mb-2'
                        fullWidth={true}
                        value={localidade}
                        disabled
                    />

                    <TextField
                        type='text'
                        size='small'
                        label='Estado'
                        placeholder='Digite o estado'
                        color='error'
                        className='mb-2'
                        disabled
                        value={uf}
                    />
                </div>

                

            </div>
        </div>
    )
}

export default FormAddress