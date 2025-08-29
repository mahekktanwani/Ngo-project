import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h3>FurEverSafe🐕</h3>
          <p>Making the world a better place together ❤️</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FaMapMarkerAlt /> chh,sambhajinagar ,Maharashtra</p>
          <p><FaPhoneAlt /> +91 9010 6733 11</p>
          <p><FaEnvelope /> contact@FurEverSafe.org</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FurEverSafe | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
