import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import './scss/navbar.scss'

const Navbar = () => {
  return (
    <nav className="settings-nav">
      <div className="logo">
        <Link to="/">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
      <div className="profile-options">
        <div className="photo">
          <img
            src="https://s3-alpha-sig.figma.com/img/1035/123a/bbcc8da69647a2c109cee000d9cda98f?Expires=1646006400&Signature=fG4VINC1Q0HFu6Bmwdcn8F-5coJmr9jJIe70o9MWkRdg7v9p~A~E~UwcwYC-AYFlEc-k1QUbqrzKV89lxB4mXrnEfGaFLdEGqOc8VZWdJ-t-uKbF5HUNLsKmsZbK3A~bAgbmXC7wkEzLGMFPLXtmPN1FDRLkJnPAt6EYb8~zSkxgpLEbFNhc76h5iO2EQ9TfgoQuyNzX7DaYKQurvoOu8rfwbe15Hlu7Zb66mV-bXz5~eL9uH3EntFdE3gPrxpsjy2ab5Ob6M4nNcFuDzo3XAqHaPV-52GDJYU8kshD43DXqMf-X20WDIvi7v662jh2PZ8-srmh61C7d3CIIWNYPsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
        </div>
        <div className="name">Xanthe Neal <span className="caret-up"><FontAwesomeIcon icon={faCaretUp} /></span></div>
      </div>
    </nav>
  );
};

export default Navbar;
