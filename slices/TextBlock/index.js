import React from 'react'

const TextBlock = ({ slice }) => {

    if (!slice.primary) return null

    const title = slice?.primary?.title || ''
    const description = slice?.primary?.description || ''

    if (!title || !description) return null

    return (
        <div className="flex max-w-7xl mx-auto lg:items-center">
            <div className="md:max-w-2xl mx-auto lg:max-w-none ml-8 mr-4 sm:mr-0 text-lg md:text-xl text-gray-800">
                <dd className='mt-16'>
                    <p className=" text-xl md:text-2xl leading-6 font-medium text-red-600 uppercase">{title}</p>
                </dd>
                <p className="text-lg md:text-xl text-gray-800 lg:mx-auto mt-4">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default TextBlock