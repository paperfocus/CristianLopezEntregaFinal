import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Carousel/Carousel.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      id: 'xim3Ubw8NP6jQqklgBq5',
      image: 'https://www.pcfactory.cl/public/foto/imbatible/11_8877.jpg', /*Linkear a producto*/
    },
    {
      id: 'IaLbWykwTBKOBM3Gi1ME',
      image: 'https://www.pcfactory.cl/public/foto/imbatible/9_4281.jpg', /*Linkear a producto */
    },
  ];

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % carouselItems.length;
    setActiveIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <Link key={index} to={`/item/${item.id}`} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
            <img src={item.image} className="d-block w-100" alt={`Imágen ${index + 1}`} />
          </Link>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
