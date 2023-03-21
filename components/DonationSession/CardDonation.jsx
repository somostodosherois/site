import swal from 'sweetalert';
import Router from 'next/router';
import { useCoins } from "../../contexts/coins";
import formatCurrent from "../../hooks/formatCurrent";
import api from '../../pages/api/config'
import getUser from '../../hooks/getSession';

const CardDonation = ({ item, setOpenSnack, setMessageSnack, setTypeSnack }) => {
    const { coins, setCoins } = useCoins();
    const { value, subtitle, description } = item

    const handlePurchaseItem = (total) => {
        if (total < 0) {
            swal({
                title: "Moedas insuficientes. Deseja recarregar?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                buttons: ["Agora não", "Sim"],
            }).then((value) => {
                if (value) {
                    Router.push('/pagamento')
                }
            });
        } else {
            setCoins(total);
            localStorage.setItem('coins', total);

            api.post("/donation", {
                email: getUser().email,
                date: new Date().toISOString(),
                value: total,
                missionId: 0,
                category: ''
            }).then((response) => {
                setOpenSnack(true)
                setTypeSnack('success')
                setMessageSnack('Doação realizada com sucesso!')
            }).catch((err) => {
                setOpenSnack(true)
                setTypeSnack('error')
                setMessageSnack(err?.response?.data.value?.message)
            });
        }
    };

    const handleAlert = (value, total) => {
        swal({
            title: `Deseja confirmar a doação de ${formatCurrent(value)} moedas?`,
            buttons: true,
            dangerMode: true,
            buttons: ["Cancelar", "Confirmar"],
        }).then((value) => {
            if (value) {
                handlePurchaseItem(total);
            }
        });
    }

    const handleValue = (value) => {
        const total = coins - value;

        if (total < 0) {
            handlePurchaseItem(total);
        } else {
            handleAlert(value, total);
        }
    }

    return (
        <div className='bg-white border rounded-lg shadow p-6'>
            <div className='md:grid md:grid-cols-3 gap-x-4'>
                <img src="https://somos-todos-herois.cdn.prismic.io/somos-todos-herois/926f42ed-9010-415f-87da-b62c07b81e3e_Handshake.svg" />
                
                <div className="col-span-2">
                    <span className='mt-2 text-2xl text-red-600 font-semibold'>{value} moedas</span><br></br>
                    <span className='text-sm font-semibold'>{subtitle}</span>
                </div>
            </div>
            <span className="w-16 my-8 rounded-xl block"></span>
            <div className='h-12'>
                <span className='text-base'>{description}</span>
            </div>
            <div className="rounded-md mt-6 shadow cursor-pointer">
                <a
                    onClick={() => handleValue(value)}
                    className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                >
                    Doar
                </a>
            </div>
        </div>
    )
}

export default CardDonation