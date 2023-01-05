import GridCampanhas from "../GridCampanhas/GridCampanhas"

const TabCampanha = ({ items, description }) => {

    return (
        <div>
            <p className="text-md md:text-lg text-gray-600 text-left">
                {description}
            </p>
            {items && <GridCampanhas title='Missões em andamento' items={items} />}
        </div>
    )
}

export default TabCampanha