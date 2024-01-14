//Footer
import React from 'react';
import '../Footer/Footer.css'
import LogoImgFooter from '../img/logo.png';
import WepPay from '../img/webpay.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FaEnvelope } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Footer = () => {
    return (
        <footer id='footer' className="container-fluid text-center">
        <div className="row align-items-end">
          <div className="col">
          <Link to='/'>
          <img id='LogoImgFooter' src={LogoImgFooter} alt="Logo" />
          <p className='textoEmpresa'>"Somos una empresa informática especializada, ofrecemos una variedad de 
          productos computacionales de primera calidad, incluyendo ordenadores, portátiles y accesorios".</p>
        </Link>
          </div>
          <div className="col">
            <h4>Contacto:</h4>
            <div className="iconoFooter">
            <FontAwesomeIcon icon={faWhatsapp} />
              <span> <a href="tel:+56998765432"> +56 9 9876 5432</a></span>
            </div>
            <div className="iconoFooter">
            <FontAwesomeIcon icon={faInstagram} />
            <a href="https://www.instagram.com/tu_cuenta_de_instagram" target="_blank" rel="noopener noreferrer">
               @tienda.cl
            </a>
            </div>
            <div className="iconoFooter">
            <FaEnvelope />
              <span> <a href="mailto:contacto@tienda.cl"> contacto@tienda.cl</a></span>
            </div>
          </div>
          <div className="col">
            <img id='LogoWebPay' src={WepPay} alt="LogoWebPay" />
          </div>
        </div>
      </footer>
    );
  }
  
export default Footer;
