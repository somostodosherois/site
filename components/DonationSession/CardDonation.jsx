import BeerOutline from 'mdi-material-ui/BeerOutline'


const CardDonation = ({ item, index }) => {

    const { value, subtitle, description } = item

    return (
        <div key={index} className='bg-white border rounded-lg shadow p-6'>
            <div className='md:grid md:grid-cols-3 gap-x-4'>
                <BeerOutline className="text-red-600 w-12 h-12" />
                <div className="col-span-2">
                    <span className='mt-2 text-2xl text-red-600 font-semibold'>{value} moedas</span><br></br>
                    <span className='text-sm font-semibold'>{subtitle}</span>
                </div>
            </div>
            <span className="w-16 my-4 h-1 bg-red-600 border rounded-xl block"></span>
            <div className='h-12'>
                <span className='text-base'>{description}</span>
            </div>
            <div className="rounded-md mt-6 shadow">
                <a
                    href={'missao/'}
                    className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                >
                    Doar
                </a>
            </div>
        </div>
    )
}

export default CardDonation