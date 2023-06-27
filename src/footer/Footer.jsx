import { React } from "react";
import "./Footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div"></div>
                    <h3>For Business</h3>
                    <a href="./employer">
                        <p>Employer</p></a>
                    <a href="./healthplan">
                        <p>Health plan</p>
                    </a>
                    <a href="./individual">
                    </a>
                </div>
                <div className="sb:fotter-links_div"></div>
                <h3>Resources</h3>
                <a href="./employer">
                    <p>employer</p>
                </a>
            </div>
        </div>
    )
}
export default Footer;




