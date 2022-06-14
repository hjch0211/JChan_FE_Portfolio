import React from "react";

function Error() {
    const location = window.location;

    return (
        <main>
            <h1>404 Error</h1>
            <h5>Resource not found at "{location.pathname}"</h5>
        </main>
    );
}

export default Error;
