import React from 'react'
import Slider from 'react-slice'

const Hero = () => {

        let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        };

        const slideData = [
            {
                id: 0,
                img:"/banner-1.jpg",
                title:"Trending item",
                mainTitle: "MEN´S LATEST FASHION SALE",
                price: "$20"
            },
            {
                id: 1,
                img:"/banner-2.jpg",
                title:"Trending Accesories",
                mainTitle: "MODERN ACCESORIES",
                price: "$15"
            },
            {
                id: 2,
                img:"/banner-3.jpg",
                title:"Sale Offer",
                mainTitle: "NEW FASHION SUMMER SALE",
                price: "$30"
            }
        ]

    return (
        <div>
            <div>

            </div>
        </div>
    )
}

export default Hero