import React from "react";
import { Link } from "react-router-dom";
import container from "../../style/container.module.css";

function Header() {
    return (
        <div id={container.header}>
            <div id={container.headerTop}>
                <div>로고</div>
                <div>글로벌 Nav</div>
            </div>
            <div id={container.headerFloating}>
                <Link to={"/"}>
                    <h1>I am Header</h1>
                </Link>
                <div id={container.headerNav}>
                    <Link to={"/board"}>Go Board</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
