import React from 'react';
import '../styles/footer.css'; // Use lowercase for 'footer.css'
import logo_0 from '../assets/Logos/logo_0.png';
import logo_1 from '../assets/Logos/logo_1.png';
import logo_2 from '../assets/Logos/logo_2.png';
import logo_3 from '../assets/Logos/logo_3.png';
import logo_4 from '../assets/Logos/logo_4.1.png'; // Corrected the image path
import logo_5 from '../assets/Logos/logo_5.png';
import logo_6 from '../assets/Logos/logo_6.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black mt-5 py-5">
      <div className="container">
        <div className="text-footer">
          <img src={logo_0} alt="" />
          Ce projet respecte l’univers cinématographique des films Batman
          récents. Version Nolan & Snyder & Reeves
        </div>
        <div className="social-footer">
          <Link to="" className="social-item hoveryellow">
            <img width="4%" src={logo_1} alt="" />
            <img src={logo_2} alt="" />
            <img width="4%" src={logo_3} alt="" />
          </Link>
          <Link to="" className="social-item">
            <img className="hoveryellow" src={logo_4} alt="" />
          </Link>
          <Link to="" className="social-item">
            <img className="hoveryellow" src={logo_5} alt="" />
          </Link>
          <Link to="" className="social-item hoveryellow"> {/* Corrected the className attribute */}
            <img src={logo_6} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
