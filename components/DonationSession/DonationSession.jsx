import TitleSession from "../TitleSession/TitleSession"
import GridDonation from "./GridDonation"

const tabFood = [
    {
        value: 30,
        subtitle: '(R$ 0,50 por dia)',
        description: '1 lata de leite Ninho Forti+'
    },
    {
        value: 50,
        subtitle: '(R$ 0,83 por dia)',
        description: '1 lata de leite Aptamil'
    },
    {
        value: 100,
        subtitle: '(R$ 1,66 por dia)',
        description: '2 latas de leite Ninho Forti+ e 1 lata de leite Aptamil'
    }
]

const tabHygiene = [
    {
        value: 30,
        subtitle: '(R$ 0,50 por dia)',
        description: '3 pacotes de lenços umedecidos'
    },
    {
        value: 50,
        subtitle: '(R$ 0,83 por dia)',
        description: '1 pacote com 60 fraldas'
    },
    {
        value: 100,
        subtitle: '(R$ 1,66 por dia)',
        description: '2 pacotes de fraldas'
    }
]

const tabAcessories = [
    {
        value: 100,
        subtitle: '(R$ 1,66 por dia)',
        description: '1 par de botas ortopédicas'
    },
    {
        value: 150,
        subtitle: '(R$ 2,50 por dia)',
        description: '1 óculos de grau ou 1 andador posterior'
    },
    {
        value: 400,
        subtitle: '(R$ 6,66 por dia)',
        description: '1 cadeira de rodas'
    }
]

const tabMedical = [
    {
        value: 80,
        subtitle: '(R$ 1,33 por dia)',
        description: '1 sessão de fisioterapia'
    },
    {
        value: 150,
        subtitle: '(R$ 2,50 por dia)',
        description: '2 sessões de Terapia Ocupacional'
    },
    {
        value: 200,
        subtitle: '(R$ 3,33 por dia)',
        description: '2 sessões de Estimulação Magnética Transcraniana'
    }
]

const tabs = (value) => {
    if(value == 'food'){
        return tabFood
    }else if(value == 'personal hygiene'){
        return tabHygiene
    }else if(value == 'accessories'){
        return tabAcessories
    }else if(value == 'medical treatments'){
        return tabMedical
    }
}

const DonationSession = ({ value, setOpenSnack, setMessageSnack, setTypeSnack }) => {
    const items = tabs(value)

    return (
        <div className="bg-gray-100 mt-10 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <TitleSession title={'Você topa fazer a diferença?'} />
                <p className="text-lg md:text-xl text-gray-600 lg:mx-auto leading-8 mb-12">Seu ato heróico é mais do que necessário. Doe!</p>

                <GridDonation items={items} campanha={value} setOpenSnack={setOpenSnack} setMessageSnack={setMessageSnack} setTypeSnack={setTypeSnack} />
            </div>
        </div>
    )
}

export default DonationSession