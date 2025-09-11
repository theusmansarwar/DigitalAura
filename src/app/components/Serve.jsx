import React from 'react'
import './Serve.css';
import Button from './Button';
const Serve = () => {

    // src/data/servicesData.js
const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    description:
      "Engage with your audience, build brand loyalty, drive conversions through strategic social media marketing. From content creation and community management.",
    icon: '/service-icon11.svg.png',
    number: "01",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description:
      "Engage with your audience, build brand loyalty, drive conversions through strategic social media marketing. From content creation and community management.",
    icon: '/service-icon11.svg.png',
    number: "02",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description:
      "Engage with your audience, build brand loyalty, drive conversions through strategic social media marketing. From content creation and community management.",
    icon: '/service-icon11.svg.png',
    number: "03",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    description:
      "Engage with your audience, build brand loyalty, drive conversions through strategic social media marketing. From content creation and community management.",
    icon: '/service-icon11.svg.png',
    number: "03",
  },
];



  return (
    <div className='serve'>
         <Button label="What we serve"/>
    <div className="services-section">
      <h2 className="services-title">
        Services Donec efficitur. laoreet sit Nunc nec varius nec
      </h2>
      <div className='back'>
        <div className='back1'>
          <div className='back2'>
           <p>Digital Aura_Digital Aura_ Digital Aura_Digital Aura_Digital Aura</p>
        </div>
        </div>
         </div>
        
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-card-header">
              <div className="icon-circle">
                <img src={service.icon}></img></div>
              <span className="service-number">{service.number}</span>
            </div>

            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>

            <a href="/" className="learn-more">
              Learn More →
            </a>
          </div>
        ))}
      </div>
   </div>
   </div>
    
  )
}

export default Serve