import React from "react";
import "./style.css";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <h2>Startup 3</h2>
                <div className="footer-margin-container">
                <div className="footer-links-top">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms</a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                </div>
                </div>
            </div>
            <hr className="footer-divider" />
            <div className="footer-bottom">
                <div className="footer-margin-left-container">
                <div className="footer-nav">
                    <a href="#">Tour</a>
                    <a href="#">Features</a>
                    <a href="#">Pricing Plans</a>
                    <a href="#">Our Works</a>
                    <a href="#">Brands</a>
                    <a href="#">Contacts</a>
                </div>
                </div>
                <p className="footer-copy">© 2017 Designmodo. All rights reserved.</p>
            </div>
        </footer>
    );
}
