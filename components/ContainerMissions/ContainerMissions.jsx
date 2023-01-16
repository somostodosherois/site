import React from 'react';

import TitleSession from '../../components/TitleSession/TitleSession';
import Cards from '../Cards'

const ContainerMissions = ({ items, title }) => (
    <div className="bg-gray-100 pb-12">
        <div className="max-w-7xl mx-auto lg:items-center">
            <TitleSession title={title} />
            <Cards items={items} />
        </div>
    </div>
)

export default ContainerMissions