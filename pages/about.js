import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/about.module.css'


export default function About() {

    return (

        <div className="flex flex-row bg-teal-500 justify-between">
            <div className="flex-col text-left bg-orange-500">
                <div className="font-medium">
                    Name:
                    Gavin B

                </div>
            </div>
            <div className="flex flex-row grow flex-wrap justify-between bg-olive-500">
                <div className="">

                    Javascript

                </div>
                <div className="">

                    NextJs

                </div>
                <div className="">

                    Node

                </div>
                <div className="">

                    Tailwind

                </div>
                <div className="">

                    Express

                </div>
                <div className="">

                    Sass

                </div>
                <div className="">

                    Reactjs

                </div>
                <div className="">

                    Postgres

                </div>
                <div className="">

                    Mongo

                </div>
            </div>
        </div>

    );



}