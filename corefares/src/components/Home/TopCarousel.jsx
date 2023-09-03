import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide_1 from '../../Assets/slide_1.jpg'
import slide_2 from '../../Assets/slide_2.jpg'
import slide_4 from '../../Assets/slide_4.jpg'

function TopCarousel() {
    return (
        <section className='carousel-sec'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item interval={9000}>
                    <div id='carousel-item'>
                        <div id='carousel-item-img'>
                            <img
                                className="d-block w-100"
                                src={slide_1}
                                alt="Second slide"
                                width={"100%"}

                            />
                        </div>
                        <div id='carousel-item-text-right'>
                            YOUR IDEAL GLOBAL OFFSHOR TICKETING PARTNER
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={9000}>
                    <div id='carousel-item'>

                        <div id='carousel-item-text-left'>
                            TECH DRIVEN BOOKING PLATFORM
                        </div>
                        <div id='carousel-item-img'>
                            <img
                                className="d-block w-100"
                                src={slide_2}
                                alt="Second slide"
                                width={"100%"}
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={9000}>
                    <div id='carousel-item'> 
                        <div id='carousel-item-img'>
                            <img
                                className="d-block w-100"
                                src={slide_4}
                                alt="Second slide"
                                width={"100%"}
                            />
                        </div>
                        <div id='carousel-item-text-right'>
                            UNMATCHABLE GLOBAL BUSINESS, LEISURE & GROUP FARES
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default TopCarousel