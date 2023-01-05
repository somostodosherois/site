import { Grid } from "@mui/material"

import TitleSession from "../TitleSession/TitleSession"

const GridCampanhas = ({ title, items }) => {
    return (
        <>
            <TitleSession title={title} />
            <Grid className="grid lg:grid-cols-4 gap-x-4 gap-y-8">
                {items.map(({ nameHero, meta, metaValue, url, age }, index) => (
                    <a key={index} href={'missao/' + url} target='_blank' className='pointer'>
                        <div className='bg-white border rounded-lg shadow p-4' style={{ height: '15rem' }}>
                            <p className='mt-2 text-md font-semibold'>{nameHero}</p>
                            <span className='text-sm'><b>Meta:</b> {meta}</span>
                            <p className='text-sm pt-4'><b>Valor da meta:</b> {metaValue*2} moedas</p>
                        </div>
                    </a>
                ))}
            </Grid>
        </>

    )
}

export default GridCampanhas