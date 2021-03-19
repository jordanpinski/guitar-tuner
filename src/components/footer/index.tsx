import React from 'react';
import SkynetSVG from '../../assets/skynet.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          
          <div className="skynet-logo">
            <p>Powered by Skynet</p>
            <a href="https://siasky.net/" target="_blank" title="Powered By Skynet">
              <object type="image/svg+xml" data={SkynetSVG} width="100" height="100"></object>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;