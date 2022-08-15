const TextImageBlock = ({ title, description, button, image }) => (
    <div className="max-w-7xl mx-auto lg:items-center">
        <div className="md:max-w-2xl mx-auto lg:max-w-none ml-8 mr-4 sm:mr-0 text-lg md:text-xl text-gray-800">
            <dd className='mt-16'>
                <p className=" text-xl md:text-2xl leading-6 font-medium text-red-600 uppercase">{title}</p>
            </dd>
            <div className='sm:grid lg:flex items-center justify-center gap-x-8'>
                <div className='max-w-3xl pt-8'>
                    <p className="text-lg md:text-xl text-gray-800 lg:mx-auto">
                        {description}
                    </p>

                    <div className="max-w-sm mt-12 pb-12">
                        <a
                            href="#"
                            className="bg-red-600 text-lg uppercase rounded-md text-white py-2 px-6"
                        >
                            {button}
                        </a>
                    </div>
                </div>
                <div className="flex tems-center justify-center text-center pb-12 md:pr-8 lg:pr-0">
                    <img src={image} />
                </div>
            </div>
        </div>
    </div>
)

export default TextImageBlock