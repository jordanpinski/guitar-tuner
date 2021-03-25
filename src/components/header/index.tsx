import React from 'react';
import LogoSVG from '../../assets/logo.svg';
import './Header.css';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {

  return (
    <header id="main-header">

      <div className="container">
        <div className="row">
          <div className="logo">
            <a href="/" title="Guitar Tuner"></a>
            <object type="image/svg+xml" data={LogoSVG}></object>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header;