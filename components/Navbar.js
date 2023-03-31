import Link from "next/link";
import Image from 'next/image';
import Styles from "../styles/Navbar.module.css"
import Img from "../public/res-logo.png";
import { Inter } from 'next/font/google'
// import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })
export default function Navbar() {
  // const router = useRouter()
    return (
      <div className={inter.className}>
        {/* <Image src="/../public/res-logo.png" alt="me" width="64" height="64" /> */}
        <Image src={Img} alt="me" className={Styles.Image} />
        <Link href="/" className={Styles.nav}>Home</Link>
        {/* Imperatively */}
        {/* <button onClick={() => router.push('/about')}>
            About
        </button> */}

        <Link href="/about" className={Styles.nav}>About</Link>
        <Link href="/contact" className={Styles.nav}>Contact</Link>
        <Link href="/posts/posts" className={Styles.nav}>Posts</Link>
      </div>
    )
}
