import { useState } from 'react';
import { Grid } from "@mui/material"

import TitleSession from "../TitleSession/TitleSession"
import ModalDetails from '../Modal/Modal';

const GridCampanhas = ({ title, items }) => {
    const [open, setOpen] = useState(false);
    const [mission, setMission] = useState();
    const handleClose = () => setOpen(false);

    const handleItem = (index) => {
        setMission(items[index])
        setOpen(true);
    }

    return (
        <>
            <TitleSession title={title} />
            <Grid className="grid lg:grid-cols-4 gap-x-4 gap-y-8">
                {items.map(({ nameHero, meta, metaValue, url, age }, index) => (
                    <a key={index} onClick={() => handleItem(index)} target='_blank' className='cursor-pointer'>
                        <div className='bg-white border rounded-lg shadow p-4' style={{ height: '15rem' }}>
                            <p className='mt-2 text-md font-semibold'>{nameHero}</p>
                            <span className='text-sm'><b>Meta:</b> {meta}</span>
                            <p className='text-sm pt-4'><b>Valor da meta:</b> {metaValue * 2} moedas</p>
                        </div>
                    </a>
                ))}
            </Grid>
            { mission && <ModalDetails open={open} handleClose={handleClose} mission={mission} />}
        </>

    )
}

export default GridCampanhas