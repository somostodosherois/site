import TextField from '@mui/material/TextField'
import InputMask from "react-input-mask";

const FormCards = () => (
    <div className="card-block mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
        <div className="col-span-4">
            <InputMask
                mask="9999 9999 9999 9999"
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
            />
        </div>

        <div className="col-span-2">
            <InputMask
                mask="99/9999"
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
)

export default FormCards