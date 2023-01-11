import swal from 'sweetalert';
import Router from 'next/router';

import { useCoins } from "../../contexts/coins";
import formatCurrent from "../../hooks/formatCurrent";
import BeerOutline from 'mdi-material-ui/BeerOutline'


const CardDonation = ({ item, index }) => {
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

            //chamar a API para realizar a doação

            swal({
                title: "Doação realizada com sucesso!",
                text: "Nós agradecemos o ato heróico!",
                icon: "success",
                button: false,
              });

              setTimeout(() => {
                swal.close()
              }, 1500);
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
        }else {
            handleAlert(value, total);
        }
    }

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