import Grid from '@mui/material/Grid'

const DonorArea = () => {
    return (
        <Grid item xs={12} md={6} lg={6} className='mt-24'>
            <h4 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-xl">
                Se torne um guardião
            </h4>
            <p className="mb-4 text-lg">
                Com menos de R$1,50 por dia você transforma a vida de uma criança todo mês. Ajude nossa ONG com gastos de manutenção para manter plataforma e impactar mais crianças.
            </p>
            <div className="flex items-center justify-center md:justify-start">
                <a
                    href="/doar"
                    className="inline-flex px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                >
                    Quero ser um guardião
                </a>
            </div>
        </Grid>
    )
}

export default DonorArea