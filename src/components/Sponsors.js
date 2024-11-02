import React from 'react'
import './Sponsors.css'
import Sponsor_card from './Sponsor_card'
import dell from '../assets/Dell-removebg-preview.png';
import IBM from '../assets/IBM-Company-Logo-Design-removebg-preview.png';
import FedX from '../assets/FedEx-removebg-preview.png';
import adidas from '../assets/adidas-removebg-preview.png';
import Hr from './Hr';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Sponsors() {
  useEffect(() => {
    AOS.init({ // Animation duration (in milliseconds)
      once: true,     // Animation happens only once on scroll
    });
  }, []);
  return (
    <div id="sponsors_container">
        <header>
            <h1 data-aos="fade-right" data-aos-offset="30">Sponsors</h1>
            <p data-aos="fade-right" data-aos-offset="30" data-aos-delay="30">Lorem this is some text which is to be displayed as the subheadline in the text...</p>

        </header>
        
        <main>
            <Sponsor_card image={dell} title="Dell" />
            <Sponsor_card image={adidas} title="Adidas"/>
            <Sponsor_card image={FedX} title="FedEx"/>
            <Sponsor_card image={IBM} title="IBM"/>
        </main>
        <Hr/>
    </div>
  )
}

