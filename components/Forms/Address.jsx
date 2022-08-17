import TextField from '@mui/material/TextField'
import { useState } from 'react'

const FormAddress = () => {
    const [logradouro, setLogradouro] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [uf, setUf] = useState('')

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
    }

    return (
        <div className="mt-10 pt-4">
            <h2 className="text-lg font-medium text-gray-900">Endereço</h2>

            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">

                <div className="sm:col-span-2 flex gap-x-4">
                    <TextField
                        type='text'
                        size='small'
                        label='CEP'
                        placeholder='Digite o CEP'
                        color='error'
                        className='mb-2'
                        helperText='campo obrigatório'
                        onChange={handleCep}
                    />

                    <TextField
                        type='text'
                        size='small'
                        label='Endereço'
                        placeholder='Digite o endereço'
                        color='error'
                        className='mb-2'
                        value={logradouro}
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
                    />

                    <TextField
                        type='text'
                        size='small'
                        label='Bairro'
                        placeholder='Digite o bairro'
                        color='error'
                        className='mb-2'
                        fullWidth={true}
                        value={bairro}
                    />
                </div>

                <div className="sm:col-span-2 flex gap-x-4">
                    <TextField
                        type='text'
                        size='small'
                        label='Complemento'
                        placeholder='Digite o complemento'
                        color='error'
                        className='mb-2'
                        fullWidth={true}
                        value={complemento}
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
                    />
                </div>

                <div className="sm:col-span-2 flex gap-x-4">

                    <TextField
                        type='text'
                        size='small'
                        label='Estado'
                        placeholder='Digite o estado'
                        color='error'
                        className='mb-2'
                        fullWidth={true}
                        value={uf}
                    />

                    <TextField
                        type='text'
                        size='small'
                        label='Telefone'
                        placeholder='Digite o telefone'
                        color='error'
                        className='mb-2'
                        helperText='campo obrigatório'
                        fullWidth={true}
                    />
                </div>

            </div>
        </div>
    )
}

export default FormAddress