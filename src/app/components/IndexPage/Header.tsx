import { Heading, Text } from "@radix-ui/themes";
interface HeaderProps {
    title: string;
    description?: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
    return (
        <header>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '' }}>
                <Heading size="9">{title}</Heading>
                <Text size="4">{description}</Text>
            </div>
        </header>
    );
};

export default Header;