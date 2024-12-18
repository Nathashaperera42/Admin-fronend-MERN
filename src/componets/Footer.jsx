import React from 'react';
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{backgroundColor:'#C3689F',height:"150px"}}>
      <div className="container text-center">
        <div className="d-flex justify-content-center mb-2">
          <a style={{marginTop:'20px'}}href="#facebook" className="text-black mx-2"><FaFacebook /></a>
          <a style={{marginTop:'20px'}}href="#whatsapp" className="text-black mx-2"><FaWhatsapp /></a>
          <a style={{marginTop:'20px'}}href="#twitter" className="text-black mx-2"><FaTwitter /></a>
          <a style={{marginTop:'20px'}}href="#instagram" className="text-black mx-2"><FaInstagram /></a>
        </div>
        <hr className="bg-white" style={{ width: '1200px',alignContent:'center' }} />
        <div className="d-flex justify-content-between mt-3">
          <div style={{marginTop:'40px'}}><FaEnvelope /> Email Address</div>
          <div style={{marginTop:'40px'}}><FaPhone /> Phone Number</div>
          <div style={{marginTop:'40px'}}><FaMapMarkerAlt /> Address</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
