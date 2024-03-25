// pages/index.tsx
import Link from 'next/link';
import LoginButton from './components/login';
import { Heading, Text } from '@radix-ui/themes';
export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Heading size="9">Welcome to Groovr</Heading>
      <Text size="4">Connect your Spotify listening experience with friends.</Text>
      <br />
      <LoginButton />
    </div>
  );
}
