import React from "react";
import { Outlet } from "react-router-dom";

function Board() {
    return (
        <>
            <h1>Board</h1>
            <Outlet />
        </>
    );
}

export default Board;
