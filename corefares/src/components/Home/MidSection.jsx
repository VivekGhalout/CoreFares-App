import React from 'react'
import mission from '../../Assets/mission.jpg'
import online_travel from '../../Assets/online_travel.png'
import tour_operator from '../../Assets/tour_operator.png'
import travel_agencies from '../../Assets/travel_agencies.png'
import travel_management from '../../Assets/travel_management.png'
import vision from '../../Assets/vision.jpg'

function MidSection() {
    return (
        <section className='mid-section'>
            <h2 className='best-fare'>
                BEST GLOBAL AIR FARES
            </h2>
            <div className='best-fare-cards'>
                <div>
                    <div className='best-fare-card'>
                        <div>
                            <img src={travel_management} alt="travel_management" width={"100%"} />
                        </div>
                        <div>
                            <h4>Travel Management Company</h4>
                            <p>Deliver faster results to clients with the most competitive global air fares.</p>
                        </div>
                    </div>
                    <div className='best-fare-card'>
                        <div>
                            <img src={online_travel} alt="online_travel" width={"100%"} />
                        </div>
                        <div>
                            <h4>Online Travel Agency</h4>
                            <p>CoreFares makes your global air content and fulfillment quick and easy.</p>
                        </div>
                    </div>
                    <div className='best-fare-card'>
                        <div>
                            <img src={tour_operator} alt="tour_operator" width={"100%"} />
                        </div>
                        <div>
                            <h4>Tour Operators</h4>
                            <p>Make your MICE & Leisure groups more productive with the Right Fares.</p>
                        </div>
                    </div>
                    <div className='best-fare-card'>
                        <div>
                            <img src={travel_agencies} alt="travel_agencies" width={"100%"} />
                        </div>
                        <div>
                            <h4>Travel Agencies</h4>
                            <p>Increase your revenue potential with our best in class global fares.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='vision-box'>
                <div>
                    <img src={vision} alt="vision" width={"100%"} />
                </div>
                <div>
                    <h3>VISION</h3>
                    <p>To provide an easy to use technology platform with the best inventory and fares for global airlines, hotels and cruises.</p>
                </div>
            </div>
            <div className='mission-box'>
                <div>
                    <img src={mission} alt="mission" width={"100%"} />
                </div>
                <div>
                    <h3>MISSION</h3>
                    <p>Our Mission is to be the most trusted partner to travel companies providing value based travel fulfillment services with total transparency and quality support.</p>
                </div>
            </div>
        </section>
    )
}

export default MidSection