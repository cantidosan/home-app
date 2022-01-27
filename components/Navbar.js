import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {

    return (

        <div className={styles.container}>
            <Link href="/about">
                <a className={`${styles.item} font-anton font-bold`} >
                    About
                </a>
            </Link>
            <Link href="/Portfolio">
                <a className={`${styles.item} font-anton font-bold`}>
                    Portfolio
                </a>
            </Link>
            <Link href="/Socials">
                <a className={`${styles.item} font-anton font-bold`}>
                    Socials
                </a>
            </Link>

        </div>

    );


}

export default Navbar;