import { Inter } from 'next/font/google'
import styles from "../styles/Home.module.css"
const inter = Inter({ subsets: ['latin'] })
export default function Layout() {
    return (
        <div className={styles.layout}>
       
        <h1 className={inter.className}>Welcome to our site </h1>
        </div>
     
    )
}