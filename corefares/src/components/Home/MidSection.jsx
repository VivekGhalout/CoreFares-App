import React from 'react'

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
                            <img src="http://corefares.com/wp-content/uploads/2021/08/4Box-04.png" alt="first" width={"100%"} />
                        </div>
                        <div>
                            <h4>Travel Management Company</h4>
                            <p>Deliver faster results to clients with the most competitive global air fares.</p>
                        </div>
                    </div>
                    <div className='best-fare-card'>
                        <div>
                            <img src="http://corefares.com/wp-content/uploads/2021/08/4Box-02.png" alt="sec" width={"100%"} />
                        </div>
                        <div>
                            <h4>Online Travel Agency</h4>
                            <p>CoreFares makes your global air content and fulfillment quick and easy.</p>
                        </div>
                    </div>
                    <div className='best-fare-card'>
                        <div>
                            <img src="http://corefares.com/wp-content/uploads/2021/08/4Box-03.png" alt="third" width={"100%"} />
                        </div>
                        <div>
                            <h4>Tour Operators</h4>
                            <p>Make your MICE & Leisure groups more productive with the Right Fares.</p>
                        </div>
                    </div>
                    <div className='best-fare-card'>
                        <div>
                            <img src="http://corefares.com/wp-content/uploads/2021/08/4Box-01.png" alt="first" width={"100%"} />
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
                    <img src="http://corefares.com/wp-content/uploads/2021/08/vision1-1.jpg" alt="vision" width={"100%"} />
                </div>
                <div>
                    <h3>VISION</h3>
                    <p>To provide an easy to use technology platform with the best inventory and fares for global airlines, hotels and cruises.</p>
                </div>
            </div>
            <div className='mission-box'>
                <div>
                    <img src="http://corefares.com/wp-content/uploads/2021/08/mission-1.jpg" alt="mission" width={"100%"} />
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