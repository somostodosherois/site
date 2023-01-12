import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField'

import HandHeartOutline from 'mdi-material-ui/HandHeartOutline'
import Close from 'mdi-material-ui/Close'


const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalDetails = ({ open, handleClose, mission }) => {

    const { nameHero, meta, description, id } = mission

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>

                <div className='grid grid-cols-5'>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='col-span-4'>
                        {nameHero}
                    </Typography>

                    <Button className='hover:bg-transparent' onClick={handleClose}><Close /></Button>
                </div>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {description}
                </Typography>


                <div className='grid bg-white mt-6'>
                    <span className='text-lg font-semibold'>Doação personalizada</span>

                    <TextField
                        type='text'
                        label='Valor'
                        color='error'
                        size="small"
                        className="mt-2"
                    />

                    <span className='text-sm mt-1'>100% do valor doado é direcionado para a missão.</span>

                    <Button className='bg-red-600 hover:bg-red-700 text-white mt-4' onClick={handleClose}>Doar</Button>
                </div>

            </Box>

        </Modal>
    );
}

export default ModalDetails