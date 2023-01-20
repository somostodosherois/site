// ** MUI Imports
import Card from '@mui/material/Card'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'

import TabCampanha from '../TabCampanha'
import TabsList from './TabsList'

export const filterCampanhas = (items, campanha) =>
    items?.filter((item) => item?.category_1 === campanha || item?.category_2 === campanha)
        .sort((a, b) => a.nameHero.localeCompare(b.nameHero))

export const countValueCampanha = (items) => {
    let sum = 0

    items.map(({ metaValue }) => {
        sum += parseFloat(metaValue)
    })

    return sum * 2
}

const renderTabPanel = (tabs, items) => {
    return tabs.map(({ id, description, value, progress }, index) => (
        <TabPanel sx={{ p: 0 }} value={id} key={index}>
            <TabCampanha items={filterCampanhas(items, id)} valueCampanha={countValueCampanha(filterCampanhas(items, id))} description={description} value={value} progress={progress} />
        </TabPanel>
    ))
}

const Tabs = ({ campanha, tabs, items, setCampanha }) => {

    return (
        <Card className='card-tabs'>
            <TabContext value={campanha}>

                <TabsList setCampanha={setCampanha} />

                {renderTabPanel(tabs, items)}
            </TabContext>
        </Card>
    )
}

export default Tabs