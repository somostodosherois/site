import FormCards from "./Cards"

const FormPayment = () => {

    const paymentMethods = [
        { id: 'credit-card', title: 'Cartão de crédito' },
        { id: 'debit-card', title: 'Cartão de débito' },
        { id: 'boleto', title: 'Boleto' },
        { id: 'pix', title: 'PIX' },
    ]

    return (
        <div className="mt-10 border-t border-gray-200 pt-10">
            <h2 className="text-lg font-medium text-gray-900">Pagamento</h2>

            <fieldset className="mt-4">
                <legend className="sr-only">Formas de Pagamento</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                        <div key={paymentMethod.id} className="flex items-center">
                            {paymentMethodIdx === 0 ? (
                                <input
                                    id={paymentMethod.id}
                                    name="payment-type"
                                    type="radio"
                                    defaultChecked
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                            ) : (
                                <input
                                    id={paymentMethod.id}
                                    name="payment-type"
                                    type="radio"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                            )}

                            <label htmlFor={paymentMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                                {paymentMethod.title}
                            </label>
                        </div>
                    ))}
                </div>
            </fieldset>

            <FormCards />
        </div>
    )
}

export default FormPayment