import GridCampanhas from "../GridCampanhas/GridCampanhas"
import ProgressBarHorizontal from '../ProgressBarHorizontal'

const TabCampanha = ({ id, items, description, valueCampanha, valueTotal }) => {
    
    const progress = parseInt((valueTotal * 100) / valueCampanha);

    const handleRedirect = () => {
        localStorage.setItem('completar-campanha-valor', valueCampanha - valueTotal)
        localStorage.setItem('completar-campanha', id)

        return window.location.href = '/pagamento'
    }

    return (
        <div className='pt-8'>
            <p className="text-md md:text-lg text-gray-600 text-left">
                {description}
            </p>

            <div className="max-w-7xl p-4 bg-gray-100 rounded-xl mx-auto grid md:grid-cols-4 gap-x-8 gap-y-8 items-center justify-center md:justify-between">
                <h2 className="text-3xl tracking-tight text-gray-900 gap-x-2">
                    <span className="block text-gray-800 font-bold text-3xl"><b>{valueCampanha}</b> moedas</span>
                </h2>

                <div className='col-span-2 w-full'>
                    <ProgressBarHorizontal progress={progress} />
                </div>

                <div className='flex justify-end'>
                    <a
                        onClick={handleRedirect}
                        className="cursor-pointer text-center px-8 py-2 text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                    >
                        Finalizar campanha
                    </a>
                </div>
            </div>


            {items && <GridCampanhas title='Missões em andamento' items={items} />}
        </div>
    )
}

export default TabCampanha