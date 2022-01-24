import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/about.module.css'


export default function About() {

    return (

        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.nameBlock}>
                    Name:
                    Gavin B

                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.LogoBlock}>

                    Javascript,Node,Express,Sass,Postgres,Mongo,NextJs

                </div>
            </div>
        </div>

    );



}