import TestimonialCarousel from "../TestimonialCarousel/TestimonialCarousel"

const TabCampanha = ({ items }) => {
    console.log(items)

    return(
        <div>
            {items && <TestimonialCarousel title='Missões em andamento' items={items} />}
        </div>
    )
}

export default TabCampanha