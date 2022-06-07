import React from "react";
import container from "../../style/css/container.module.css";

function Footer() {
    return (
        <footer id={container.footer}>
            <h3>Contact</h3>
            <p>
                <div>명함</div>
                <div id={container.card} />
            </p>
        </footer>
    );
}

export default Footer;
