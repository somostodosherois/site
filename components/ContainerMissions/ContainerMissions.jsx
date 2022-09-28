import React from 'react';

import TitleSession from '../../components/TitleSession/TitleSession';
import Cards from '../Cards'

const ContainerMissions = ({ items, title }) => (
    <div className="bg-gray-100 pt-4 pb-12 px-4 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center">
            <TitleSession title={title} />
            <Cards items={items} />
        </div>
    </div>
)

export default ContainerMissions