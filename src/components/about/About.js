import React from 'react';
import Social from '../social/Social';
import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const About = ({avatar, name, profession, bio, address, phone, email, social}) => {
  return(
    <div className='bio'>
      <div className='avatar'>
        <img src={avatar} alt={name} /> 
      </div>
      <div className='title'>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <div className='desc'>
        <p>{bio}</p>
      </div>
      <div className='address'>
        <p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>  {address}</p>
      </div>
      <div className='phone'>
          <p><FontAwesomeIcon icon={faPhone} /> {phone}</p>
      </div>
      <div className='email'>
        <p><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
      </div>
      <Social social={social} />
    </div>
  );
};



export default About;
