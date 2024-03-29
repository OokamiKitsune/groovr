import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            Groovr &copy; 2024
            <a href="https://github.com/OokamiKitsune/groovr">
                <GitHubLogoIcon />
            </a>
            <br />
        </footer>
    );
};

export default Footer;