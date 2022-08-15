import { Grid } from "@mui/material"
import ShapeDivider from "../ShapeDivider"

const BannerNumbers = () => (
    <div className="bg-red-600 md:bg-fundo-herois bg-local bg-center bg-no-repeat bg-cover mt-24 mb-12" style={{ height: '60%' }}>
        <dd className='mt-16 p-8 sm:p-12 lg:p-22 lg:mb-8 text-center lg:text-left'>
            <p className="text-xl md:text-4xl leading-6 text-white uppercase font-bold">Impacto Social</p>
        </dd>

        <div className="flex items-center justify-center pl-8 pr-8 lg:p-0">
            <Grid className="flex gap-x-12 gap-y-4 sm:gap-y-8 md:gap-y-12  max-w-7xl grid grid-cols-2 lg:grid-cols-4 text-lg md:text-xl text-white text-center items-center justify-center">
                <Grid className="rounded border border-white min-h-full">
                    <h2 className="lg:mt-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight p-2 sm:p-4 lg:p-8">
                        <span className="block">128</span>
                    </h2>
                    <div className="border-t border-white rounded p-0 sm:p-2 lg:p-4 text-lg sm:text-xl lg:text-3xl">
                        <span>Missões Concluídas</span>
                    </div>
                </Grid>
                <Grid className="rounded border border-white min-h-full">
                    <h2 className="lg:mt-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight p-2 sm:p-4 lg:p-8">
                        <span className="block">4093</span>
                    </h2>
                    <div className=" border-t border-white rounded p-0 sm:p-2 lg:p-4 text-lg sm:text-xl lg:text-3xl">
                        <span>Doações para missões realizadas</span>
                    </div>
                </Grid>
                <Grid className="rounded border border-white min-h-full">
                    <h2 className="lg:mt-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight p-2 sm:p-4 lg:p-8">
                        <span className="block">2207</span>
                    </h2>
                    <div className=" border-t border-white rounded p-0 sm:p-2 lg:p-4 text-lg sm:text-xl lg:text-3xl">
                        <span>Usuários na plataforma</span>
                    </div>
                </Grid>
                <Grid className="rounded border border-white min-h-full">
                    <h2 className="lg:mt-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight p-2 sm:p-4 lg:p-8">
                        <span className="block">2207</span>
                    </h2>
                    <div className=" border-t border-white rounded p-0 sm:p-2 lg:p-4 text-lg sm:text-xl lg:text-3xl">
                        <span className="m-auto">Guardiões ativos</span>
                    </div>
                </Grid>
            </Grid>
        </div>˝
    </div>
)

export default BannerNumbers