import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Navbar from '@/components/Navbar';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Layout/>
        <Component {...pageProps} />
    </>
  )
}
