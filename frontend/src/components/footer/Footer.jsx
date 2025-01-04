import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In porro, quos accusamus eius vero beatae iure atque,
                        impedit, neque nisi ad itaque maxime perferendis ut
                        ipsum illum similique iusto sequi!
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.facebook_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 98765 43210</li>
                        <li>
                            <a href="mailto:klnlokeshkumar8@gmail.com">
                                klnlokeshkumar8gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 @klnlokeshkumar. All rights reserved...
            </p>
        </div>
    );
};
export default Footer;
