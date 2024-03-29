// pages/index.tsx
import Link from 'next/link';
import LoginButton from './components/login';
import { Heading, Text } from '@radix-ui/themes';
import Footer from './components/IndexPage/Footer';
import Header from './components/IndexPage/Header';
export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Header />
      <br />
      <LoginButton />
      <Footer />

    </div>

  );
}
