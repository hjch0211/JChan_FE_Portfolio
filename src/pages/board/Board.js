import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import container from "../../style/container.module.css";

function Board() {
    return (
        <div id={container.main}>
            <div
                style={{ display: "flex", justifyContent: "space-around", alignItems: "baseline" }}
            >
                <h4>Board</h4>
                <button>
                    <Link to={"/board/test"}>test</Link>
                </button>
                <button>
                    <Link to={"/board/prototype"}>prototype</Link>
                </button>
                <button>
                    <Link to={"/board/strictMode"}>strictMode</Link>
                </button>
            </div>
            <Outlet />
        </div>
    );
}

export default Board;
