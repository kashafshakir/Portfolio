import React, { useEffect, useRef } from 'react';
import './Certifications.css';

const Certifications = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      cardsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const cardData = [
    {
      src: './images/harvard.png.png',
      title: 'React Developer',
      text: 'Earned for completing React training.'
    },
    {
      src: './images/frontend-certificate.png',
      title: 'React Developer',
      text: 'Earned for completing React training.'
    },
    {
      src: './images/css-certificate.png',
      title: 'Card title 2',
      text: 'Supporting text for card 2.'
    },
    {
      src: './images/SQL-certificate.png',
      title: 'Card title 3',
      text: 'Supporting text for card 3.'
    },
    {
      src: './images/Problemsolving.png',
      title: 'Card title 4',
      text: 'Supporting text for card 4.'
    }
  ];

  return (
    <div className="certifications">
      <div className="section-header">
        <div className="section-divider"></div>
        <h2 className="section-title">
          <span className="section-title-decoration left"></span>
          Proof of Progress
          <span className="section-title-decoration right"></span>
        </h2>
        <div className="section-divider"></div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {cardData.map((card, index) => (
          <div className="col" key={index} style={{objectFit:'cover'}}>
            <div
              className="card fade-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <img src={card.src} className="card-img-top" alt={card.title}  style={{}}/>
              <div className="card-body">
                {/* <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

