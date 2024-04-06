// pages/404.tsx

import React from "react";

const Custom404: React.FC = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "2rem" }}>Page Not Found</h1>
                <p style={{ fontSize: "1.5rem" }}>😔 The page you're looking for doesn't exist.</p>
            </div>
        </div>
    );
};

export default Custom404;
