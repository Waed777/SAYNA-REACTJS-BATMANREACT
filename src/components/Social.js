import React from 'react'
import logo_4 from '../assets/logos/logo_4.png';
import logo_5 from '../assets/logos/logo_5.png';
import logo_6 from '../assets/logos/logo_6.png';
import logo_bat_flèche from '../assets/logos/Logo/logo_bat_flèche.png';
import logo_bat_flèche_2 from '../assets/logos/Logo/logo_bat_flèche_2.png';
import { Link } from 'react-router-dom';
import '../styles/Social.scss';

function Social() {
  return (
    <div className="container">
    <div className="scroll">
        <Link to="#header"
        ><img
                className="arrow2 hoveryellow"
                src={logo_bat_flèche}
                alt="" /></Link
        ><img
            className="social hoveryellow"
            src={logo_4}
            alt=""
        />
        <img
            className="social hoveryellow"
            src={logo_5} 
            alt=""
        /><img
            className="social hoveryellow"
            src={logo_6}
            alt=""
        />
        <Link to="#contact"
        ><img
                className="arrow2 hoveryellow"
                src={logo_bat_flèche_2}
                alt=""
            /></Link>
</div>


</div>
  )
}

export default Social