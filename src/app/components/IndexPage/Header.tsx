import { Heading, Text } from "@radix-ui/themes";
import React from "react";

const Header: React.FC = () => {
    return (
        <header>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '' }}>
                <Heading size="9">Welcome to Groovr</Heading>
                <Text size="4">Connect your Spotify listening experience with friends.</Text>


            </div>


        </header>
    );
};

export default Header;