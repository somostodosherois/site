import React from 'react';
import { BsCashCoin, BsCalendarDate } from "react-icons/bs";

import diffDates from '../../hooks/diffDates';
import formatCurrent from '../../hooks/formatCurrent';

const Cards = ({ items }) => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8">
        {items.map(({ id, name, image, slug, status, metadesc, meta, arrecadado, prazo }) => (
            <a href={'missao/' + slug}>
                <div key={id} className="group relative bg-white border border-transparent rounded-xl h-full">
                    <div className="sm:block bg-white -group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-center object-cover"
                            style={{ height: '35vh' }}
                        />
                    </div>

                    <div className='p-4'>
                        <h3 className="mt-4 text-base font-semibold text-gray-900">{name}</h3>
                        <p className="mt-2 text-sm text-gray-500 h-8 description-card-heros">Meta: {metadesc}</p>

                        {status === 'open' &&
                            <div className="w-full bg-gray-200 rounded-full mt-4">
                                <div className="bg-green-500 text-3xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: parseInt((arrecadado * 100) / meta) + '%' }}> {parseInt((arrecadado * 100) / meta)}%</div>
                            </div>
                        }

                        <div className='flex mt-4 justify-content'>
                            <BsCashCoin className="h-6 w-6 text-green-600 mt-1" aria-hidden="true" />
                            <p className="px-2 text-gray-500 text-base"><b>{formatCurrent(arrecadado)}</b> arrecadados</p>
                        </div>

                        {status === 'open' &&
                            <div className='flex mt-4 justify-content'>
                                <BsCalendarDate className="h-6 w-6 text-blue-400 mt-1" aria-hidden="true" />
                                <p className="px-2 text-gray-500">{diffDates(prazo) - 1} {(diffDates(prazo) - 1) > 1 ? 'dias restantes' : 'dia restante'}</p>
                            </div>
                        }


                        {status === 'open' &&
                            <div className="rounded-md mt-6 shadow">
                                <a
                                    href={'missao/' + slug}
                                    className="flex items-center justify-center bg-red-600 text-lg uppercase rounded-md text-white py-1 px-4"
                                >
                                    Ajudar este herói
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </a>
        ))}
    </div>
)

export default Cards