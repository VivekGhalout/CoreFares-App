import React from 'react'
import coreFares_logo from '../../Assets/coreFares_logo.png'
import './footer.css'

function Footer() {
    return (
        <section className='footer-sec'>
            <div className='footer-main'>

                <div className='footer-top-div'>
                    <div className='footer-top-div-left'>
                        <div style={{ width: "40%" }}>
                            <img src={coreFares_logo} alt="coreFares_logo" width={"100%"} />
                        </div>
                        <p>
                            CoreFares Consulting specializes in providing best in class Global Air Fares for Business, Leisure and Group Travel to Travel Management Companies, Tour Operators and Online Travel Agencies. We have access to Global Inventory directly from major airlines, consolidators and aggregators thus enabling us to provide a fare advantage from all Global Airlines including Low Cost Carriers to our customers.
                        </p>
                    </div>

                    <div className='footer-top-div-right'>
                        <div>
                            <h3>Sitemap</h3>
                            <p>Services</p>
                            <p>About Us</p>
                            <p>Booking</p>
                            <p>Cancellation</p>
                        </div>

                        <div>
                            <h3>Company</h3>
                            <p>Careers</p>
                            <p>Our Team</p>
                        </div>

                        <div>
                            <h3>Support</h3>
                            <p>CoreFares Consulting Pvt. Ltd.</p>
                            <p>E303, Third Floor, Sunrise Chambers, 22 Ulsoor Road,</p>
                            <p>Bangalore – 560 042</p>
                            <p>sales@corefares.com</p>
                            <p>+91 98455 39988</p>
                        </div>
                    </div>

                </div>
                <div className='footer-social-links'>
                    <p>Facebook • Instagram • Youtube</p>
                </div>

                <div className='footer-bottom-div'>
                    <p>© CoreFares 2022 | Powered by <span style={{fontWeight:"700"}}>iZEN Accelerate</span></p>
                    <div gap='2rem' flexWrap='wrap'>
                        <p>Terms & Condition</p>
                        <p>Privacy</p>
                        <p>Policy</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer