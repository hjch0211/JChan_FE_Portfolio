import React from "react";

function StrictMode() {
    function foo(x) {
        if (!!x) {
            x = 3;
            return arguments[0];
        }
        return this;
    }
    return (
        <>
            <p>Normal function's this in strictmode is {String(foo())}</p>
            <p>
                relocating arguments(3) in strictmode can't be applied to arguments object :
                {String(foo(5))}
            </p>
        </>
    );
}

export default StrictMode;
