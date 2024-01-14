import React from 'react';
import { Link } from 'react-router-dom';
import '../Oferta/Oferta.css';

const Oferta = () => {
  // Array de datos de ofertas
  const ofertas = [
    {
      id: 'xim3Ubw8NP6jQqklgBq5',
      image: 'https://www.pcfactory.cl/public/foto/51308/1_1000.jpg?t=1705067825557',
      title: 'Notebook HP AMD Ryzen 5 5500U 15.6" HD 8GB 256GB SSD Windows 11 Azul Indigo 15-ef2513la',
      price: '$349.990',
      units: 'Solo 8 unidades',
    },
    {
      id: 'IaLbWykwTBKOBM3Gi1ME',
      image: 'https://www.pcfactory.cl/public/foto/48455/1_1000.jpg?t=1705064397038',
      title: 'Notebook Galaxy Book3 15.6" FHD Intel Core i7-1355U 8GB 512GB SSD Windows 11 Silver',
      price: '$569.990',
      units: 'Solo 4 unidades',
    },
    {
      id: 'L7Fw8g2cnNxM2IZZJLNm',
      image: 'https://www.pcfactory.cl/public/foto/50711/1_1000.jpg?t=1702158926675',
      title: 'Unidad SSD 1TB PCIe NVMe Gen4 M.2 SN580 Blue',
      price: '$80.990',
      units: 'Solo 10 unidades',
    },
  ];

  return (
    <div className="d-flex justify-content-around">
      {ofertas.map((oferta) => (
        <Link key={oferta.id} to={`/item/${oferta.id}`} className="card mb-3 custom-card" style={{ maxWidth: '800px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <div
                className="img-fluid rounded-start mx-auto oferta-image"
                style={{
                  backgroundImage: `url("${oferta.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100%',
                }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">OFERTA DESTACADA</h5>
                <h3 className="card-title">{oferta.price}</h3>
                <p className="card-text">{oferta.title}</p>
                <p className="card-text">
                  <small className="text-body-secondary">{oferta.units}</small>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Oferta;