import React from "react";
import { Link } from "react-router-dom";
import container from "../../style/css/container.module.css";

function Header() {
    return (
        <header>
            <div id={container.globalHeader}>
                <div>로고</div>
                <div>글로벌 Nav</div>
            </div>
            <div id={container.headerFloating}>
                <div>메뉴</div>
                <Link to={"/"}>
                    <h1 class={container.title}>JChan</h1>
                    <h2 class={container.title}>Front-end Developer</h2>
                </Link>
                <nav id={container.headerNav}>
                    <Link to={"/board"}>Go Board</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
